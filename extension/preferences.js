// Nookmark 外观、首页布局与书签整理。
const preferenceTexts = {
  zh: {
    settings_background: '背景与配色', settings_modules: '首页布局',
    wallpaper_mode: '背景', wallpaper_none: '默认纸面', wallpaper_solid: '纯色',
    wallpaper_dawn: '晨光', wallpaper_forest: '林间', wallpaper_dusk: '暮色', wallpaper_custom: '本地图片',
    wallpaper_upload: '选择图片', wallpaper_local: '图片仅保存在本机，自动压缩。支持 JPG、PNG、WebP，最大 20 MB。',
    wallpaper_color: '背景颜色', wallpaper_brightness: '亮度', wallpaper_blur: '模糊', wallpaper_overlay: '遮罩',
    wallpaper_position_x: '水平位置', wallpaper_position_y: '垂直位置', wallpaper_remove: '移除图片',
    wallpaper_missing: '请先选择一张图片。', wallpaper_loading: '正在处理图片…',
    wallpaper_failed: '图片无法读取，请换一张 JPG、PNG 或 WebP 图片。', wallpaper_large: '图片超过 20 MB，请选择较小的图片。',
    palette: '主题配色', palette_amber: '暖纸', palette_sage: '青苔', palette_ocean: '海蓝', palette_rose: '玫瑰',
    card_style: '卡片外观', card_solid: '实色', card_translucent: '半透明', card_opacity: '卡片不透明度',
    appearance_reset: '恢复默认外观', appearance_reset_done: '已恢复默认外观',
    module_clock: '时钟与问候', module_navigation: '导航', module_pinned: '置顶链接', module_top: '近 7 天 Top 5',
    module_bar: '书签栏文件夹', module_other: '其他书签', module_recent: '最近新增入口',
    module_up: '上移', module_down: '下移', module_desc: '开关控制显示，箭头调整侧栏顺序。导航始终保留。',
    remember_layout: '记住折叠状态', remember_layout_desc: '重新打开时恢复卡片、子文件夹和隐藏区的展开状态。',
    storage_failed: '保存失败，请检查扩展存储空间后重试。',
    nav_duplicates: '重复书签', duplicates_desc: '按完整网址检查所有文件夹。参数与页面锚点不同的链接会分别保留。',
    duplicates_empty: '没有发现重复书签', duplicates_empty_desc: '你的书签整理得很清爽。', duplicates_group: '个网址有重复',
    duplicate_remove: '删除此副本', duplicate_confirm: '确认删除', duplicate_removed: '已删除一个重复副本',
    duplicate_failed: '删除失败，请检查书签是否受管理后重试。', managed_bookmark: '受管理的书签',
    edit_bookmark: '编辑书签', move_bookmark: '移动到文件夹', bookmark_name: '名称', bookmark_url: '网址', bookmark_folder: '所在文件夹',
    cancel: '取消', save_bookmark: '保存', saving_bookmark: '保存中…', bookmark_saved: '书签已更新',
    bookmark_failed: '未能完成修改，请检查名称、网址和目标文件夹后重试。', bookmark_gone: '此书签已被删除，请关闭后重新选择。',
    bookmark_unsafe: '请输入带协议的有效网址，例如 https://example.com。', bookmark_readonly: '此书签由管理员管理，无法修改。',
    bookmark_pinned: '已置顶链接', bookmark_unpinned: '已取消置顶', folder_hidden: '文件夹已隐藏', folder_restored: '文件夹已恢复',
    menu_text_input: '文本输入框', undo_failed: '撤销失败，请重试。',
  },
  en: {
    settings_background: 'Background & color', settings_modules: 'Home layout',
    wallpaper_mode: 'Background', wallpaper_none: 'Default paper', wallpaper_solid: 'Solid color',
    wallpaper_dawn: 'Dawn', wallpaper_forest: 'Forest', wallpaper_dusk: 'Dusk', wallpaper_custom: 'Local image',
    wallpaper_upload: 'Choose image', wallpaper_local: 'Stored on this device and compressed automatically. JPG, PNG or WebP, up to 20 MB.',
    wallpaper_color: 'Background color', wallpaper_brightness: 'Brightness', wallpaper_blur: 'Blur', wallpaper_overlay: 'Overlay',
    wallpaper_position_x: 'Horizontal position', wallpaper_position_y: 'Vertical position', wallpaper_remove: 'Remove image',
    wallpaper_missing: 'Choose an image first.', wallpaper_loading: 'Processing image…',
    wallpaper_failed: 'Could not read the image. Try another JPG, PNG or WebP file.', wallpaper_large: 'Image exceeds 20 MB. Choose a smaller image.',
    palette: 'Color palette', palette_amber: 'Warm paper', palette_sage: 'Sage', palette_ocean: 'Ocean', palette_rose: 'Rose',
    card_style: 'Card style', card_solid: 'Solid', card_translucent: 'Translucent', card_opacity: 'Card opacity',
    appearance_reset: 'Reset appearance', appearance_reset_done: 'Default appearance restored',
    module_clock: 'Clock & greeting', module_navigation: 'Navigation', module_pinned: 'Pinned links', module_top: 'Last 7 days · Top 5',
    module_bar: 'Bookmarks bar folders', module_other: 'Other bookmarks', module_recent: 'Recently added shortcut',
    module_up: 'Move up', module_down: 'Move down', module_desc: 'Toggle sections and use arrows to reorder the sidebar. Navigation stays available.',
    remember_layout: 'Remember expanded sections', remember_layout_desc: 'Restore cards, subfolders and hidden folder previews when you return.',
    storage_failed: 'Could not save. Check extension storage space and try again.',
    nav_duplicates: 'Duplicates', duplicates_desc: 'Checks full URLs across all folders. Different query parameters and page anchors stay separate.',
    duplicates_empty: 'No duplicate bookmarks', duplicates_empty_desc: 'Your collection is looking tidy.', duplicates_group: 'URLs have duplicates',
    duplicate_remove: 'Delete this copy', duplicate_confirm: 'Confirm delete', duplicate_removed: 'Duplicate copy deleted',
    duplicate_failed: 'Could not delete. Check whether the bookmark is managed and try again.', managed_bookmark: 'Managed bookmark',
    edit_bookmark: 'Edit bookmark', move_bookmark: 'Move to folder', bookmark_name: 'Name', bookmark_url: 'URL', bookmark_folder: 'Folder',
    cancel: 'Cancel', save_bookmark: 'Save', saving_bookmark: 'Saving…', bookmark_saved: 'Bookmark updated',
    bookmark_failed: 'Could not complete the changes. Check the name, URL and destination folder, then try again.', bookmark_gone: 'This bookmark was deleted. Close this form and choose another.',
    bookmark_unsafe: 'Enter a complete URL including its protocol, such as https://example.com.', bookmark_readonly: 'This bookmark is managed and cannot be edited.',
    bookmark_pinned: 'Link pinned', bookmark_unpinned: 'Link unpinned', folder_hidden: 'Folder hidden', folder_restored: 'Folder restored',
    menu_text_input: 'Text field', undo_failed: 'Could not undo. Try again.',
  },
};
function installPreferenceTranslations() {
  for (const lang of ['zh', 'en']) Object.assign(T[lang], preferenceTexts[lang]);
}
const APPEARANCE_DEFAULTS = {
  wallpaper: 'none', color: '#dfe8dd', image: '', brightness: 90, blur: 0, overlay: 35,
  positionX: 50, positionY: 50, palette: 'amber', cardStyle: 'solid', opacity: 92,
};
const MODULE_IDS = ['clock', 'navigation', 'pinned', 'top', 'bar', 'other'];
let appearance = { ...APPEARANCE_DEFAULTS };
let homeLayout = { order: [...MODULE_IDS], visible: { pinned: true, top: true, bar: true, other: true, recent: true }, remember: true };
let expandedHidden = new Set();
let bookmarkNodes = new Map(), bookmarkFolders = [], editorBookmarkId = null;
let layoutSaveTimer = 0, preferenceSaveTimer = 0, featureNoticeTimer = 0;
let removedBookmark = null, bookmarkRefreshTimer = 0;
let bookmarkRefreshRunning = false, bookmarkRefreshAgain = false;
let preferencesReady = false, editorPending = false, editorMoveOnly = false;

function featureNotice(key) {
  actionToast.textContent = t(key);
  actionToast.hidden = false;
  clearTimeout(featureNoticeTimer);
  featureNoticeTimer = setTimeout(() => { actionToast.hidden = true; }, 3500);
}
function engineIconHTML() {
  const key = ENGINES[settings.engine] ? settings.engine : 'google';
  return `<img class="engine-icon" src="assets/engines/${key}.png" alt="" width="20" height="20">`;
}
function clampPreference(value, low, high, fallback) {
  return Number.isFinite(Number(value)) ? Math.max(low, Math.min(high, Number(value))) : fallback;
}
function normalizePreferences(value) {
  const a = value?.appearance || {};
  appearance = { ...APPEARANCE_DEFAULTS, ...a };
  if (!['none', 'solid', 'dawn', 'forest', 'dusk', 'custom'].includes(a.wallpaper)) appearance.wallpaper = 'none';
  if (!/^#[0-9a-f]{6}$/i.test(appearance.color)) appearance.color = APPEARANCE_DEFAULTS.color;
  if (!/^data:image\/(webp|jpeg|png);base64,/.test(appearance.image)) appearance.image = '';
  if (!['amber', 'sage', 'ocean', 'rose'].includes(appearance.palette)) appearance.palette = 'amber';
  if (!['solid', 'translucent'].includes(appearance.cardStyle)) appearance.cardStyle = 'solid';
  for (const key of ['brightness', 'overlay', 'positionX', 'positionY']) appearance[key] = clampPreference(appearance[key], key === 'brightness' ? 30 : 0, key === 'brightness' ? 130 : 100, APPEARANCE_DEFAULTS[key]);
  appearance.blur = clampPreference(appearance.blur, 0, 24, 0);
  appearance.opacity = clampPreference(appearance.opacity, 65, 100, 92);
  const layout = value?.layout || {};
  const order = Array.isArray(layout.order) ? layout.order.filter(id => MODULE_IDS.includes(id)) : [];
  homeLayout.order = [...new Set([...order, ...MODULE_IDS])];
  homeLayout.visible = Object.fromEntries(['pinned', 'top', 'bar', 'other', 'recent'].map(id => [id, layout.visible?.[id] !== false]));
  homeLayout.remember = layout.remember !== false;
}
async function loadPreferences() {
  try {
    const local = await chrome.storage.local.get(['newtabPreferences', 'layoutMemory']);
    normalizePreferences(local.newtabPreferences);
    if (homeLayout.remember) restoreLayoutMemory(local.layoutMemory);
  } catch { featureNotice('storage_failed'); }
  preferencesReady = true;
  renderAppearanceControls();
  renderModuleControls();
  applyAppearance();
  applyModules();
  drawer.inert = true;
}
function restoreLayoutMemory(memory) {
  const ids = new Set(bookmarkFolders.map(folder => folder.id));
  const valid = values => new Set(Array.isArray(values) ? values.filter(id => ids.has(id)) : []);
  expandedCards = valid(memory?.expandedCards);
  collapsedSubs = valid(memory?.collapsedSubs);
  expandedHidden = valid(memory?.expandedHidden);
}
async function persistPreferences() {
  try {
    await chrome.storage.local.set({ newtabPreferences: { appearance, layout: homeLayout } });
    drawerSaved.textContent = t('saved');
    drawerSaved.classList.add('flash');
    setTimeout(() => drawerSaved.classList.remove('flash'), 1200);
    return true;
  } catch { featureNotice('storage_failed'); return false; }
}
function schedulePreferenceSave() {
  clearTimeout(preferenceSaveTimer);
  preferenceSaveTimer = setTimeout(persistPreferences, 180);
}
function saveLayoutMemory() {
  if (!homeLayout.remember) return;
  clearTimeout(layoutSaveTimer);
  layoutSaveTimer = setTimeout(async () => {
    try {
      await chrome.storage.local.set({ layoutMemory: {
        expandedCards: [...expandedCards], collapsedSubs: [...collapsedSubs], expandedHidden: [...expandedHidden],
      } });
    } catch { featureNotice('storage_failed'); }
  }, 120);
}

function applyAppearance() {
  const layer = document.getElementById('wallpaperImage');
  if (!layer) return;
  const backgrounds = {
    none: 'none', solid: `linear-gradient(${appearance.color}, ${appearance.color})`,
    dawn: 'radial-gradient(ellipse at 12% 18%, #f3d1b0 0%, transparent 55%), linear-gradient(135deg, #e8dcc9, #efdce1 58%, #cdd9e7)',
    forest: 'radial-gradient(ellipse at 85% 20%, #bbcdbd 0%, transparent 60%), linear-gradient(145deg, #d9e3cf, #a6bbb1 55%, #718b87)',
    dusk: 'radial-gradient(ellipse at 18% 75%, #a56f73 0%, transparent 60%), linear-gradient(135deg, #293e55, #56627e 55%, #aa858a)',
    custom: appearance.image ? `url("${appearance.image}")` : 'none',
  };
  const hasBackground = appearance.wallpaper !== 'none' && (appearance.wallpaper !== 'custom' || !!appearance.image);
  document.body.dataset.palette = appearance.palette;
  document.body.dataset.cardStyle = appearance.cardStyle;
  document.body.classList.toggle('has-wallpaper', hasBackground);
  document.getElementById('wallpaper').hidden = !hasBackground;
  layer.style.backgroundImage = backgrounds[appearance.wallpaper] || 'none';
  layer.style.backgroundPosition = `${appearance.positionX}% ${appearance.positionY}%`;
  layer.style.filter = `brightness(${appearance.brightness / 100}) blur(${appearance.blur}px)`;
  document.body.style.setProperty('--wallpaper-overlay', appearance.overlay / 100);
  document.body.style.setProperty('--card-opacity', `${appearance.opacity}%`);
}
function selectControl(id, label, options, value) {
  return `<div class="appearance-row"><label for="${id}">${t(label)}</label><select class="drawer-select" id="${id}">${options.map(([v, key]) => `<option value="${v}"${value === v ? ' selected' : ''}>${t(key)}</option>`).join('')}</select></div>`;
}
function rangeControl(id, key, label, min, max, unit = '%') {
  return `<div class="range-control"><label for="${id}">${t(label)}<output for="${id}">${appearance[key]}${unit}</output></label><input id="${id}" data-appearance-range="${key}" type="range" min="${min}" max="${max}" value="${appearance[key]}" data-unit="${unit}"></div>`;
}
function renderAppearanceControls() {
  const hasBackground = appearance.wallpaper !== 'none';
  const photo = appearance.wallpaper === 'custom';
  $('appearanceControls').innerHTML = `<h3 class="drawer-group-title">${t('settings_background')}</h3>
    <div class="palette-choices" role="group" aria-label="${t('palette')}">${['amber', 'sage', 'ocean', 'rose'].map(key => `<button type="button" data-palette="${key}" class="palette-choice" aria-pressed="${appearance.palette === key}"><span class="palette-swatch palette-${key}" aria-hidden="true"></span>${t('palette_' + key)}</button>`).join('')}</div>
    ${selectControl('wallpaperSelect', 'wallpaper_mode', ['none', 'solid', 'dawn', 'forest', 'dusk', 'custom'].map(key => [key, 'wallpaper_' + key]), appearance.wallpaper)}
    <div id="wallpaperColorRow" class="appearance-row"${appearance.wallpaper === 'solid' ? '' : ' hidden'}><label for="wallpaperColor">${t('wallpaper_color')}</label><input id="wallpaperColor" type="color" value="${appearance.color}"></div>
    <div class="wallpaper-presets" aria-label="${t('wallpaper_mode')}">${['dawn', 'forest', 'dusk'].map(key => `<button type="button" class="wallpaper-preset preset-${key}" data-wallpaper="${key}" aria-pressed="${appearance.wallpaper === key}"><span>${t('wallpaper_' + key)}</span></button>`).join('')}</div>
    <div class="upload-actions"><label class="text-button file-label" for="wallpaperFile">${t('wallpaper_upload')}</label><input id="wallpaperFile" class="visually-hidden" type="file" accept="image/jpeg,image/png,image/webp"><button type="button" id="removeWallpaper" class="text-button"${appearance.image ? '' : ' hidden'}>${t('wallpaper_remove')}</button></div>
    <p class="setting-note">${t('wallpaper_local')}</p><p class="setting-note" id="wallpaperStatus" role="status"${photo && !appearance.image ? '' : ' hidden'}>${t('wallpaper_missing')}</p>
    <div id="wallpaperSliders"${hasBackground ? '' : ' hidden'}>
      ${rangeControl('wallpaperBrightness', 'brightness', 'wallpaper_brightness', 30, 130)}
      ${rangeControl('wallpaperBlur', 'blur', 'wallpaper_blur', 0, 24, 'px')}
      ${rangeControl('wallpaperOverlay', 'overlay', 'wallpaper_overlay', 0, 100)}
      <div id="wallpaperPosition"${photo ? '' : ' hidden'}>${rangeControl('wallpaperPositionX', 'positionX', 'wallpaper_position_x', 0, 100)}${rangeControl('wallpaperPositionY', 'positionY', 'wallpaper_position_y', 0, 100)}</div>
    </div>
    ${selectControl('cardStyleSelect', 'card_style', [['solid', 'card_solid'], ['translucent', 'card_translucent']], appearance.cardStyle)}
    <div id="cardOpacityRow"${appearance.cardStyle === 'translucent' ? '' : ' hidden'}>${rangeControl('cardOpacity', 'opacity', 'card_opacity', 65, 100)}</div>
    <button type="button" class="text-button reset-appearance" id="resetAppearance">${t('appearance_reset')}</button>`;
}
function renderModuleControls() {
  $('moduleControls').innerHTML = `<h3 class="drawer-group-title">${t('settings_modules')}</h3><p class="setting-note">${t('module_desc')}</p>
    <div class="module-order">${homeLayout.order.map((id, index) => {
      const checked = id === 'navigation' || (id === 'clock' ? settings.showClock : homeLayout.visible[id]);
      return `<div class="module-row"><label class="module-label"><input type="checkbox" data-module-toggle="${id}"${checked ? ' checked' : ''}${id === 'navigation' ? ' disabled' : ''}>${t('module_' + id)}</label>
        <div class="module-actions">${[['up', -1], ['down', 1]].map(([direction, delta]) => `<button type="button" class="module-arrow" data-module-move="${id}" data-step="${delta}" aria-label="${t('module_' + id)} · ${t('module_' + direction)}"${index + delta < 0 || index + delta >= homeLayout.order.length ? ' disabled' : ''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="${delta < 0 ? 'M12 19V5m-5 5 5-5 5 5' : 'M12 5v14m-5-5 5 5 5-5'}"/></svg></button>`).join('')}</div></div>`;
    }).join('')}</div>
    <label class="module-extra"><input type="checkbox" id="recentModuleCb"${homeLayout.visible.recent ? ' checked' : ''}>${t('module_recent')}</label>
    <label class="module-extra"><input type="checkbox" id="rememberLayoutCb"${homeLayout.remember ? ' checked' : ''}>${t('remember_layout')}</label><p class="setting-note">${t('remember_layout_desc')}</p>`;
}
function applyModules() {
  const stack = document.getElementById('sidebarModules');
  if (!stack) return;
  for (const id of homeLayout.order) {
    const section = stack.querySelector(`[data-module="${id}"]`);
    if (!section) continue;
    section.hidden = id === 'clock' ? !settings.showClock : id === 'navigation' ? false : !homeLayout.visible[id];
    if (id === 'other') section.hidden ||= !otherGroups.length && !otherDirect.length;
    stack.appendChild(section);
  }
  $('navRecent').hidden = !homeLayout.visible.recent;
}
function localizePreferenceUI() {
  if (!preferencesReady) return;
  renderAppearanceControls();
  renderModuleControls();
}
async function compressWallpaper(file) {
  if (file.size > 20 * 1024 * 1024) throw new Error('wallpaper_large');
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error('wallpaper_failed');
  const bitmap = await createImageBitmap(file);
  try {
    const scale = Math.min(1, 2560 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    let result = canvas.toDataURL('image/webp', 0.86);
    if (result.length > 2 * 1024 * 1024) result = canvas.toDataURL('image/webp', 0.65);
    if (result.length > 3 * 1024 * 1024) throw new Error('wallpaper_large');
    return result;
  } finally { bitmap.close(); }
}

function bindPreferenceEvents() {
  const controls = $('appearanceControls');
  controls.addEventListener('click', async e => {
    const palette = e.target.closest('button[data-palette]');
    const preset = e.target.closest('[data-wallpaper]');
    if (palette) appearance.palette = palette.dataset.palette;
    else if (preset) appearance.wallpaper = preset.dataset.wallpaper;
    else if (e.target.id === 'removeWallpaper') { appearance.image = ''; if (appearance.wallpaper === 'custom') appearance.wallpaper = 'none'; }
    else if (e.target.id === 'resetAppearance') { appearance = { ...APPEARANCE_DEFAULTS }; featureNotice('appearance_reset_done'); }
    else return;
    applyAppearance(); renderAppearanceControls(); await persistPreferences();
  });
  controls.addEventListener('input', e => {
    const key = e.target.dataset.appearanceRange;
    if (key) {
      appearance[key] = Number(e.target.value);
      e.target.previousElementSibling.querySelector('output').textContent = `${e.target.value}${e.target.dataset.unit}`;
    } else if (e.target.id === 'wallpaperColor') appearance.color = e.target.value;
    else return;
    applyAppearance(); schedulePreferenceSave();
  });
  controls.addEventListener('change', async e => {
    if (e.target.id === 'wallpaperSelect') appearance.wallpaper = e.target.value;
    else if (e.target.id === 'cardStyleSelect') appearance.cardStyle = e.target.value;
    else if (e.target.id === 'wallpaperFile' && e.target.files[0]) {
      const previous = { ...appearance };
      const input = e.target;
      input.disabled = true;
      $('wallpaperStatus').hidden = false;
      $('wallpaperStatus').textContent = t('wallpaper_loading');
      try {
        appearance.image = await compressWallpaper(input.files[0]);
        appearance.wallpaper = 'custom';
        if (!await persistPreferences()) { appearance = previous; applyAppearance(); renderAppearanceControls(); return; }
      } catch (error) { appearance = previous; featureNotice(error.message === 'wallpaper_large' ? 'wallpaper_large' : 'wallpaper_failed'); }
      finally { input.disabled = false; }
    } else return;
    applyAppearance(); renderAppearanceControls(); await persistPreferences();
  });
  $('moduleControls').addEventListener('click', async e => {
    const button = e.target.closest('[data-module-move]');
    if (!button) return;
    const index = homeLayout.order.indexOf(button.dataset.moduleMove), next = index + Number(button.dataset.step);
    if (next < 0 || next >= homeLayout.order.length) return;
    [homeLayout.order[index], homeLayout.order[next]] = [homeLayout.order[next], homeLayout.order[index]];
    applyModules(); renderModuleControls();
    $('moduleControls').querySelector(`[data-module-move="${button.dataset.moduleMove}"][data-step="${button.dataset.step}"]`)?.focus();
    await persistPreferences();
  });
  $('moduleControls').addEventListener('change', async e => {
    const id = e.target.dataset.moduleToggle;
    if (id === 'clock') { settings.showClock = e.target.checked; saveAndFlash(); }
    else if (id && id !== 'navigation') homeLayout.visible[id] = e.target.checked;
    else if (e.target.id === 'recentModuleCb') {
      homeLayout.visible.recent = e.target.checked;
      if (!e.target.checked && state.view === 'recent') setView('all');
    } else if (e.target.id === 'rememberLayoutCb') {
      homeLayout.remember = e.target.checked;
      if (homeLayout.remember) saveLayoutMemory();
      else {
        clearTimeout(layoutSaveTimer);
        try { await chrome.storage.local.remove('layoutMemory'); } catch { featureNotice('storage_failed'); }
      }
    } else return;
    applyModules(); await persistPreferences();
  });
  const editor = $('bookmarkEditor');
  $('editorClose').addEventListener('click', () => { if (!editorPending) editor.close(); });
  $('editorCancel').addEventListener('click', () => { if (!editorPending) editor.close(); });
  editor.addEventListener('cancel', e => { if (editorPending) e.preventDefault(); });
  editor.addEventListener('close', () => { document.body.appendChild(linkMenu); linkMenu.hidden = true; });
  $('bookmarkForm').addEventListener('submit', saveBookmarkEditor);
  grid.addEventListener('click', e => {
    const button = e.target.closest('[data-delete-bookmark]');
    if (button) deleteDuplicateBookmark(button);
  });
  document.addEventListener('keydown', e => {
    if (!drawer.classList.contains('open') || editor.open || !linkMenu.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); closeDrawer(); }
    if (e.key === 'Tab') {
      const items = [...drawer.querySelectorAll('button, select, input')].filter(el => !el.disabled && el.getClientRects().length);
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
  });
  const suggestionObserver = new MutationObserver(() => {
    searchEl.setAttribute('aria-expanded', String(!searchSuggestions.hidden));
    if (searchSuggestions.hidden) searchEl.removeAttribute('aria-activedescendant');
  });
  suggestionObserver.observe(searchSuggestions, { attributes: true, attributeFilter: ['hidden'] });
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    if (changes.newtabPreferences) {
      const value = changes.newtabPreferences.newValue;
      if (JSON.stringify(value) === JSON.stringify({ appearance, layout: homeLayout })) return;
      normalizePreferences(value); applyAppearance(); applyModules(); localizePreferenceUI();
      if (!homeLayout.visible.recent && state.view === 'recent') setView('all');
    }
    if (changes.layoutMemory && homeLayout.remember) {
      const value = changes.layoutMemory.newValue;
      if (JSON.stringify(value) === JSON.stringify({ expandedCards: [...expandedCards], collapsedSubs: [...collapsedSubs], expandedHidden: [...expandedHidden] })) return;
      restoreLayoutMemory(value); render(true);
    }
  });
}

function indexBookmarkTree(tree) {
  bookmarkNodes = new Map(); bookmarkFolders = [];
  const walk = (nodes, parentId, path, managed) => {
    for (const node of nodes) {
      const locked = managed || !!node.unmodifiable;
      const current = { ...node, parentId: node.parentId || parentId, path, managed: locked };
      bookmarkNodes.set(node.id, current);
      if (!node.url) {
        const nextPath = node.id === '0' ? '' : [path, node.title].filter(Boolean).join(' / ');
        if (node.id !== '0') bookmarkFolders.push({ id: node.id, title: node.title, path: nextPath, managed: locked });
        walk(node.children || [], node.id, nextPath, locked);
      }
    }
  };
  walk(tree, null, '', false);
}
async function refreshBookmarks() {
  if (bookmarkRefreshRunning) { bookmarkRefreshAgain = true; return; }
  bookmarkRefreshRunning = true;
  try {
    do {
      bookmarkRefreshAgain = false;
      const tree = await chrome.bookmarks.getTree();
      indexBookmarkTree(tree);
      allGroups = []; barDirect = []; otherGroups = []; otherDirect = []; urlMap = new Map();
      const roots = findRoots(tree);
      if (roots.bar?.children) parseLevel(roots.bar.children, 'bar');
      if (roots.other?.children) parseLevel(roots.other.children, 'other');
      cleanupFolderOrder(); validateHiddenIds();
      render(true);
      if (state.query.trim()) showSuggestions();
    } while (bookmarkRefreshAgain);
  } finally { bookmarkRefreshRunning = false; }
}
function bindBookmarkChanges() {
  const refresh = () => {
    clearTimeout(bookmarkRefreshTimer);
    bookmarkRefreshTimer = setTimeout(async () => {
      try { await refreshBookmarks(); } catch { featureNotice('error_desc'); }
    }, 100);
  };
  for (const event of ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportEnded']) chrome.bookmarks[event]?.addListener(refresh);
}
function duplicateGroups() {
  const groups = new Map();
  for (const bookmark of bookmarkNodes.values()) {
    if (!bookmark.url) continue;
    let key = bookmark.url;
    try { key = new URL(bookmark.url).href; } catch {}
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(bookmark);
  }
  return [...groups.entries()].filter(([, copies]) => copies.length > 1).sort((a, b) => b[1].length - a[1].length);
}
function updateDuplicateCount() { $('cntDuplicates').textContent = duplicateGroups().length; }
function renderDuplicates() {
  const groups = duplicateGroups();
  viewTitleEl.textContent = t('nav_duplicates');
  viewCountEl.textContent = `· ${groups.length}`;
  const symbol = '<svg class="duplicate-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>';
  if (!groups.length) {
    grid.innerHTML = `<div class="state-hint duplicate-empty">${symbol}<p>${t('duplicates_empty')}</p><p class="setting-note">${t('duplicates_empty_desc')}</p></div>`;
    return;
  }
  grid.innerHTML = `<p class="duplicates-intro">${t('duplicates_desc')}</p>` + groups.map(([url, copies]) => `<section class="card duplicate-card" style="--h:40"><h2 class="duplicate-url" title="${escapeAttr(url)}">${escapeHTML(extractDomain(url))}<span>${copies.length}</span></h2><p class="duplicate-full-url">${escapeHTML(url)}</p><div class="duplicate-rows">${copies.map(b => `<div class="duplicate-row"><div class="duplicate-link">${pillHTML(b)}<span class="duplicate-path">${escapeHTML(b.path)}</span></div><button type="button" class="text-button delete-copy" data-delete-bookmark="${escapeAttr(b.id)}"${b.managed ? ' disabled' : ''}>${t(b.managed ? 'managed_bookmark' : 'duplicate_remove')}</button></div>`).join('')}</div></section>`).join('');
}
async function deleteDuplicateBookmark(button) {
  const bookmark = bookmarkNodes.get(button.dataset.deleteBookmark);
  if (!bookmark || bookmark.managed) return;
  if (!button.dataset.confirm) {
    button.dataset.confirm = '1'; button.textContent = t('duplicate_confirm');
    setTimeout(() => { delete button.dataset.confirm; button.textContent = t('duplicate_remove'); }, 5000);
    return;
  }
  button.disabled = true;
  try {
    const [latest] = await chrome.bookmarks.get(bookmark.id);
    if (!latest?.url || latest.url !== bookmark.url) throw new Error('bookmark changed');
    await chrome.bookmarks.remove(bookmark.id);
    removedBookmark = { title: latest.title, url: latest.url, parentId: latest.parentId, index: latest.index };
    undoOrder = null; clearTimeout(undoTimer);
    undoText.textContent = t('duplicate_removed'); undoToast.hidden = false;
    undoTimer = setTimeout(() => { undoToast.hidden = true; removedBookmark = null; }, 8000);
    await refreshBookmarks();
  } catch { button.disabled = false; featureNotice('duplicate_failed'); }
}
async function undoRemovedBookmark() {
  if (!removedBookmark) return false;
  const snapshot = removedBookmark;
  undoButton.disabled = true;
  try {
    await chrome.bookmarks.create(snapshot);
    removedBookmark = null; clearTimeout(undoTimer); undoToast.hidden = true;
    await refreshBookmarks();
  } catch { featureNotice('undo_failed'); }
  finally { undoButton.disabled = false; }
  return true;
}
function openBookmarkEditor(id, moveOnly = false) {
  const bookmark = bookmarkNodes.get(id);
  if (!bookmark) { featureNotice('bookmark_gone'); return; }
  if (bookmark.managed) { featureNotice('bookmark_readonly'); return; }
  editorBookmarkId = id;
  editorMoveOnly = moveOnly;
  $('bookmarkName').disabled = moveOnly;
  $('bookmarkUrl').disabled = moveOnly;
  $('editorTitle').textContent = t(moveOnly ? 'move_bookmark' : 'edit_bookmark');
  $('bookmarkName').value = bookmark.title;
  $('bookmarkUrl').value = bookmark.url;
  $('bookmarkFolder').innerHTML = bookmarkFolders.filter(folder => !folder.managed).map(folder => `<option value="${escapeAttr(folder.id)}"${folder.id === bookmark.parentId ? ' selected' : ''}>${escapeHTML(folder.path)}</option>`).join('');
  $('editorError').hidden = true;
  $('bookmarkEditor').appendChild(linkMenu);
  $('bookmarkEditor').showModal();
  (moveOnly ? $('bookmarkFolder') : $('bookmarkName')).focus();
}
async function saveBookmarkEditor(e) {
  e.preventDefault();
  if (editorPending) return;
  const bookmark = bookmarkNodes.get(editorBookmarkId);
  const title = editorMoveOnly ? bookmark?.title : $('bookmarkName').value.trim();
  const url = editorMoveOnly ? bookmark?.url : $('bookmarkUrl').value.trim(), parentId = $('bookmarkFolder').value;
  const errorEl = $('editorError');
  if (!bookmark) { errorEl.textContent = t('bookmark_gone'); errorEl.hidden = false; return; }
  try {
    const parsed = new URL(url);
    if (!editorMoveOnly && !['https:', 'http:', 'ftp:', 'file:', 'chrome:', 'chrome-extension:', 'mailto:', 'about:'].includes(parsed.protocol)) throw new Error('invalid protocol');
  } catch { errorEl.textContent = t('bookmark_unsafe'); errorEl.hidden = false; return; }
  if ((!editorMoveOnly && !title) || !parentId) { errorEl.textContent = t('bookmark_failed'); errorEl.hidden = false; return; }
  editorPending = true;
  $('editorSave').disabled = true; $('editorSave').textContent = t('saving_bookmark');
  $('editorCancel').disabled = true; $('editorClose').disabled = true;
  errorEl.hidden = true;
  let updated = false;
  try {
    if (!editorMoveOnly) { await chrome.bookmarks.update(bookmark.id, { title, url }); updated = true; }
    if (parentId !== bookmark.parentId) await chrome.bookmarks.move(bookmark.id, { parentId });
    if (bookmark.url !== url && pinnedUrls.includes(bookmark.url)) {
      pinnedUrls = [...new Set(pinnedUrls.map(item => item === bookmark.url ? url : item))];
      guardedSet({ pinnedUrls });
    }
    await refreshBookmarks();
    $('bookmarkEditor').close();
    featureNotice('bookmark_saved');
  } catch {
    if (updated) {
      try { await chrome.bookmarks.update(bookmark.id, { title: bookmark.title, url: bookmark.url }); } catch {}
    }
    errorEl.textContent = t('bookmark_failed'); errorEl.hidden = false;
    try { await refreshBookmarks(); } catch {}
  } finally {
    editorPending = false; $('editorSave').disabled = false; $('editorSave').textContent = t('save_bookmark');
    $('editorCancel').disabled = false; $('editorClose').disabled = false;
  }
}

// 预览使用独立的本机数据，不会读写浏览器的真实书签。
async function preparePreviewBookmarks() {
  if (HAS_CHROME) return;
  const original = await chrome.bookmarks.getTree();
  let tree;
  try { tree = JSON.parse(localStorage.getItem('nookmark-preview-bookmarks')) || original; } catch { tree = original; }
  const events = {};
  for (const name of ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportEnded']) {
    events[name] = new Set(); chrome.bookmarks[name] = { addListener: callback => events[name].add(callback) };
  }
  const locate = (id, nodes = tree, parent = null) => {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) return { node: nodes[i], nodes, index: i, parent };
      const found = nodes[i].children && locate(id, nodes[i].children, nodes[i]);
      if (found) return found;
    }
    return null;
  };
  const record = (id) => {
    const found = locate(id);
    if (!found) throw new Error('Bookmark not found');
    return { ...structuredClone(found.node), parentId: found.parent?.id, index: found.index };
  };
  const emit = name => { localStorage.setItem('nookmark-preview-bookmarks', JSON.stringify(tree)); for (const callback of events[name]) callback(); };
  chrome.bookmarks.getTree = async () => structuredClone(tree);
  chrome.bookmarks.get = async id => [record(id)];
  chrome.bookmarks.update = async (id, changes) => { const found = locate(id); if (!found) throw new Error('Bookmark not found'); Object.assign(found.node, changes); emit('onChanged'); return record(id); };
  chrome.bookmarks.move = async (id, destination) => {
    const found = locate(id), target = locate(destination.parentId);
    if (!found || !target?.node.children) throw new Error('Folder not found');
    found.nodes.splice(found.index, 1); target.node.children.push(found.node); emit('onMoved'); return record(id);
  };
  chrome.bookmarks.remove = async id => { const found = locate(id); if (!found) throw new Error('Bookmark not found'); found.nodes.splice(found.index, 1); emit('onRemoved'); };
  chrome.bookmarks.create = async details => {
    const target = locate(details.parentId); if (!target?.node.children) throw new Error('Folder not found');
    const node = { id: String(Date.now()) + String(Math.floor(Math.random() * 1000)), title: details.title, url: details.url, dateAdded: Date.now() };
    target.node.children.splice(details.index ?? target.node.children.length, 0, node); emit('onCreated'); return record(node.id);
  };
}
