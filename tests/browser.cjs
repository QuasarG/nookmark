const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');
let server, browser, base;
const root = path.resolve(__dirname, '..');
before(async () => {
  server = createServer(async (request, response) => {
    const file = path.resolve(root, '.' + new URL(request.url, 'http://localhost').pathname);
    if (!file.startsWith(root + path.sep)) { response.writeHead(403); response.end(); return; }
    try {
      const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
      response.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      response.end(await readFile(file));
    } catch { response.writeHead(404); response.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${server.address().port}/newtab.html`;
  browser = await chromium.launch({ executablePath: process.env.CHROME_BIN || undefined, headless: true, args: ['--no-sandbox'] });
});
after(async () => { await browser?.close(); await new Promise(resolve => server?.close(resolve)); });
async function openPage() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('https://**/*', route => route.abort());
  await page.goto(base);
  await page.waitForSelector('html[data-ready="true"]');
  return { page, errors };
}
async function reload(page) { await page.reload(); await page.waitForSelector('html[data-ready="true"]'); }
async function settings(page) { await page.locator('#settingsBtn').click(); await page.waitForTimeout(330); }
async function closeSettings(page) { await page.locator('#drawerClose').click(); await page.waitForTimeout(330); }
async function waitStored(page, predicate) { await page.waitForFunction(predicate); }

test('all search engines have a local logo in the no-match prompt, including offline', async () => {
  const { page, errors } = await openPage();
  for (const engine of ['google', 'bing', 'baidu', 'ddg', 'sogou', 'so360']) {
    await settings(page);
    await page.locator('#engineSelect').selectOption(engine);
    await closeSettings(page);
    await page.locator('#search').fill('45984-no-match');
    await page.waitForFunction(() => document.querySelector('.suggestion-web .engine-icon')?.naturalWidth === 32);
    assert.match(await page.locator('.suggestion-web .engine-icon').getAttribute('src'), new RegExp(engine + '\\.png$'));
    const href = await page.locator('.suggestion-web').getAttribute('href');
    assert.ok(href.includes('45984-no-match'));
    assert.equal(await page.locator('#search').getAttribute('aria-expanded'), 'true');
  }
  await page.locator('#search').fill('ChatGPT');
  await page.locator('#search').press('ArrowDown');
  assert.equal(await page.locator('.suggestion[aria-selected="true"]').count(), 1);
  assert.equal(await page.locator('#search').getAttribute('aria-activedescendant'), 'suggestion-0');
  await page.locator('#search').press('Escape');
  assert.equal(await page.locator('#search').getAttribute('aria-expanded'), 'false');
  assert.deepEqual(errors, []);
  await page.close();
});

test('wallpaper upload, live controls, palette and module ordering survive reload', async () => {
  const { page, errors } = await openPage();
  await settings(page);
  await page.locator('[data-wallpaper="dawn"]').click();
  await page.waitForFunction(() => document.body.classList.contains('has-wallpaper'));
  await page.locator('[data-palette="sage"]').last().click();
  await page.locator('#cardStyleSelect').selectOption('translucent');
  await page.locator('#wallpaperBlur').fill('8');
  await page.locator('#cardOpacity').fill('80');
  await page.locator('#wallpaperFile').setInputFiles(path.join(root, 'icon128.png'));
  await page.waitForFunction(() => document.querySelector('#wallpaperSelect').value === 'custom');
  await page.locator('#wallpaperPositionX').fill('25');
  await page.locator('[data-module-toggle="top"]').uncheck();
  await page.locator('[data-module-move="pinned"][data-step="-1"]').click();
  await waitStored(page, () => {
    const saved = JSON.parse(localStorage.getItem('nookmark-preview-storage')).local.newtabPreferences;
    return saved.appearance.positionX === 25 && saved.appearance.opacity === 80 && saved.layout.visible.top === false;
  });
  const before = await page.evaluate(() => ({ appearance, layout: homeLayout }));
  await reload(page);
  assert.deepEqual(await page.evaluate(() => ({ appearance, layout: homeLayout })), before);
  assert.ok(before.appearance.image.startsWith('data:image/webp;base64,'));
  assert.equal(await page.locator('[data-module="top"]').isVisible(), false);
  const order = await page.locator('#sidebarModules > section').evaluateAll(items => items.map(item => item.dataset.module));
  assert.deepEqual(order, before.layout.order);
  await settings(page);
  await page.locator('#resetAppearance').click();
  await page.waitForFunction(() => !document.body.classList.contains('has-wallpaper'));
  assert.equal(await page.locator('body').getAttribute('data-palette'), 'amber');
  await page.locator('#wallpaperFile').setInputFiles({ name: 'broken.png', mimeType: 'image/png', buffer: Buffer.from('invalid-image') });
  await page.waitForFunction(() => document.querySelector('#actionToast').textContent.includes('图片无法读取'));
  assert.equal(await page.locator('body').getAttribute('class'), '');
  assert.deepEqual(errors, []);
  await page.close();
});

test('card, subfolder and hidden preview states persist after counting clicks and reopening', async () => {
  const { page, errors } = await openPage();
  await page.locator('[data-toggle-id="12"]').click();
  await page.locator('[data-sfid="15"] > .sub-head').click();
  await page.locator('[data-hide-id="13"]').click();
  await page.locator('.h-item-wrap[data-fid="13"] .h-item').click();
  await page.evaluate(() => bumpCount('https://chatgpt.com'));
  await page.waitForFunction(() => document.querySelector('.h-item-wrap[data-fid="13"]').classList.contains('expanded'));
  await waitStored(page, () => JSON.parse(localStorage.getItem('nookmark-preview-storage')).local.layoutMemory?.expandedHidden.includes('13'));
  await reload(page);
  assert.equal(await page.locator('.card[data-folder-id="12"]').getAttribute('class'), 'card');
  assert.equal(await page.locator('[data-sfid="15"] > .sub-head').getAttribute('aria-expanded'), 'false');
  assert.ok((await page.locator('.h-item-wrap[data-fid="13"]').getAttribute('class')).includes('expanded'));
  assert.deepEqual(errors, []);
  await page.close();
});

test('right-click edit and move update the selected bookmark, and pin follows an edited URL', async () => {
  const { page, errors } = await openPage();
  const link = page.locator('#grid a[data-bid="100"]');
  await link.click({ button: 'right' });
  await page.locator('[data-menu-action="pin"]').click();
  await link.click({ button: 'right' });
  await page.locator('[data-menu-action="edit-bookmark"]').click();
  await page.locator('#bookmarkName').fill('My GPT');
  await page.locator('#bookmarkUrl').fill('https://chatgpt.com/?source=nookmark');
  await page.locator('#bookmarkFolder').selectOption('11');
  await page.locator('#editorSave').click();
  await page.waitForFunction(() => !document.querySelector('#bookmarkEditor').open);
  const record = await page.evaluate(async () => (await chrome.bookmarks.get('100'))[0]);
  assert.equal(record.title, 'My GPT'); assert.equal(record.parentId, '11');
  assert.equal(await page.locator('#pinnedList a').getAttribute('data-url'), record.url);
  await reload(page);
  assert.equal(await page.locator('#grid a[data-bid="100"] .bm-name').innerText(), 'My GPT');
  await page.locator('#grid a[data-bid="100"]').click({ button: 'right' });
  await page.locator('[data-menu-action="move-bookmark"]').click();
  await page.locator('#bookmarkFolder').selectOption('15');
  await page.locator('#editorSave').click();
  await page.waitForFunction(() => !document.querySelector('#bookmarkEditor').open);
  assert.equal((await page.evaluate(async () => (await chrome.bookmarks.get('100'))[0])).parentId, '15');
  assert.deepEqual(errors, []);
  await page.close();
});

test('duplicates preserve distinct parameters and anchors; deleting a chosen copy can be undone', async () => {
  const { page, errors } = await openPage();
  await page.evaluate(async () => {
    await chrome.bookmarks.create({ parentId: '11', title: 'GPT duplicate', url: 'https://chatgpt.com' });
    await chrome.bookmarks.create({ parentId: '11', title: 'GPT query', url: 'https://chatgpt.com/?x=1' });
    await chrome.bookmarks.create({ parentId: '11', title: 'GPT anchor', url: 'https://chatgpt.com/#settings' });
    await refreshBookmarks();
  });
  await page.locator('#navDuplicates').click();
  assert.equal(await page.locator('.duplicate-row').count(), 2);
  const remove = page.locator('[data-delete-bookmark="100"]');
  await remove.click();
  assert.equal(await remove.innerText(), '确认删除');
  await remove.click();
  await page.waitForSelector('.duplicate-empty');
  await page.locator('#undoButton').click();
  await page.waitForSelector('.duplicate-row');
  assert.equal(await page.locator('.duplicate-row').count(), 2);
  assert.equal(await page.locator('.duplicate-path').count(), 2);
  assert.deepEqual(errors, []);
  await page.close();
});

test('narrow and dark settings have no horizontal overflow, and labels switch language', async () => {
  const { page, errors } = await openPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await settings(page);
  await page.locator('#themeSelect').selectOption('dark');
  await page.locator('#langSelect').selectOption('en');
  assert.equal(await page.locator('[data-palette="sage"]').last().innerText(), 'Sage');
  assert.equal(await page.locator('#navDuplicates').innerText(), 'Duplicates\n0');
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  assert.equal(await page.locator('#drawer').getAttribute('inert'), null);
  await closeSettings(page);
  assert.equal(await page.locator('#drawer').getAttribute('inert'), '');
  assert.deepEqual(errors, []);
  await page.close();
});

test('drag only starts on a header, saves a new order and offers undo', async () => {
  const { page, errors } = await openPage();
  const previous = await page.evaluate(() => folderOrder.slice());
  const source = await page.locator('.card[data-folder-id="10"] .card-head').boundingBox();
  const target = await page.locator('.card[data-folder-id="11"]').boundingBox();
  await page.mouse.move(source.x + 45, source.y + 12);
  await page.mouse.down();
  await page.mouse.move(target.x + 45, target.y + target.height - 16, { steps: 12 });
  await page.waitForTimeout(150);
  await page.mouse.up();
  await page.waitForSelector('#undoToast:not([hidden])');
  assert.notDeepEqual(await page.evaluate(() => folderOrder.slice()), previous);
  await page.locator('#undoButton').click();
  assert.deepEqual(await page.evaluate(() => folderOrder.slice()), previous);
  assert.deepEqual(errors, []);
  await page.close();
});

test('failed moves restore the original bookmark and leave the editor available to retry', async () => {
  const { page, errors } = await openPage();
  const original = await page.evaluate(async () => (await chrome.bookmarks.get('100'))[0]);
  await page.locator('#grid a[data-bid="100"]').click({ button: 'right' });
  await page.locator('[data-menu-action="edit-bookmark"]').click();
  await page.locator('#bookmarkName').fill('Must roll back');
  await page.locator('#bookmarkFolder').selectOption('11');
  await page.evaluate(() => { chrome.bookmarks.move = async () => { throw new Error('managed destination'); }; });
  await page.locator('#editorSave').click();
  await page.waitForSelector('#editorError:not([hidden])');
  const after = await page.evaluate(async () => (await chrome.bookmarks.get('100'))[0]);
  assert.equal(after.title, original.title);
  assert.equal(after.parentId, original.parentId);
  assert.equal(await page.locator('#editorSave').isEnabled(), true);
  assert.deepEqual(errors, []);
  await page.close();
});
