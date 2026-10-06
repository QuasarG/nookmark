// ============================================================
// Nookmark v2 — 淡彩档案馆
// 左侧栏导航 + 瀑布流淡彩卡片 + 频率统计 + 搜索升级
// ============================================================

// ===== i18n =====
const T = {
  en: {
    tab_title: 'Start Here~',
    settings: 'Settings', settings_appearance: 'Appearance', close: 'Close',
    settings_lang: 'Language', settings_lang_desc: 'Select the UI language.',
    settings_theme: 'Theme', settings_theme_desc: 'Paper or ink.',
    theme_light: 'Light', theme_dark: 'Dark', theme_system: 'System',
    settings_density: 'Density', settings_density_desc: 'Card size and spacing.',
    density_comfy: 'Comfy', density_compact: 'Compact',
    settings_search: 'Search',
    settings_engine: 'Web Search Engine', settings_engine_desc: 'Used when no bookmarks match and you press Enter.',
    settings_search_other: 'Include Other Bookmarks', settings_search_other_desc: 'Also search outside the bookmarks bar.',
    settings_behavior: 'Behavior',
    settings_show_clock: 'Show Clock', settings_show_clock_desc: 'Display the clock and greeting in the sidebar.',
    settings_show_seconds: 'Show Seconds', settings_show_seconds_desc: 'Display seconds on the clock.',
    settings_clock_roll: 'Clock Roll Effect', settings_clock_roll_desc: 'Rolling transition when digits change.',
    settings_open_new_tab: 'Open in New Tab', settings_open_new_tab_desc: 'Open bookmarks in a new tab instead of the current one.',
    saved: 'Saved.',
    nav_all: 'All Bookmarks', nav_recent: 'Recently Added',
    sec_bar: 'Bookmarks Bar', sec_pinned: 'Pinned', pinned_empty: 'Right-click a link to pin it', pin: 'Pin link', unpin: 'Unpin link', sec_recent_top: 'Last 7 Days · Top 5', sec_recent_empty: 'No clicks yet', sec_other: 'Other Bookmarks', sec_hidden: 'Hidden',
    drag_hint: 'Drag a card header to reorder · Undo is available after release', order_saved: 'Card order saved', undo: 'Undo',
    menu_link: 'Bookmark link', menu_folder: 'Folder', menu_page: 'This page', menu_input: 'Search box',
    menu_open: 'Open link', menu_open_new: 'Open in new tab', menu_copy_link: 'Copy link', menu_copy_text: 'Copy selected text',
    menu_show_folder: 'Open folder', menu_hide_folder: 'Hide folder', menu_restore_folder: 'Restore folder',
    menu_search: 'Search bookmarks', menu_select_all: 'Select all', menu_cut: 'Cut', menu_copy: 'Copy', menu_paste: 'Paste', menu_clear_search: 'Clear search',
    menu_all: 'All bookmarks', menu_settings: 'Settings', menu_reload: 'Refresh page', menu_top: 'Back to top',
    menu_copied: 'Copied to clipboard', menu_copy_failed: 'Clipboard unavailable',
    sidebar_restore: 'Restore', sidebar_no_bookmarks: 'No bookmarks',
    card_bookmarks_bar: 'Bookmarks Bar',
    search_placeholder: 'Search bookmarks — Enter searches the web',
    results_title: 'Results',
    no_results_title: 'No bookmarks match',
    search_web_with: 'Search with', search_press_enter: 'Press Enter to search with',
    recent_empty: 'Nothing has been bookmarked yet.',
    show_more: 'Show all', show_less: 'Collapse',
    card_items: 'items', card_hide: 'Hide folder',
    loading: 'Loading your archive…',
    empty_title: 'Your bookmarks bar is empty.',
    empty_desc: 'Curate your collection and return.',
    error_desc: 'Could not load bookmarks.',
    greeting_night: 'Late night reading.',
    greeting_morning: 'Good morning, archivist.',
    greeting_noon: 'Good afternoon, curator.',
    greeting_evening: 'Good evening, collector.',
    greeting_late: 'Night browsing, keeper of bookmarks.',
  },
  zh: {
    tab_title: '从这里启程~',
    settings: '设置', settings_appearance: '外观', close: '关闭',
    settings_lang: '语言', settings_lang_desc: '选择界面语言。',
    settings_theme: '主题', settings_theme_desc: '纸面或墨色。',
    theme_light: '浅色', theme_dark: '深色', theme_system: '跟随系统',
    settings_density: '密度', settings_density_desc: '卡片大小与间距。',
    density_comfy: '舒适', density_compact: '紧凑',
    settings_search: '搜索',
    settings_engine: '默认网页搜索引擎', settings_engine_desc: '没有匹配书签时，按回车使用此引擎搜索。',
    settings_search_other: '搜索包含其他书签', settings_search_other_desc: '搜索范围扩展到书签栏之外。',
    settings_behavior: '行为',
    settings_show_clock: '显示时钟', settings_show_clock_desc: '在侧栏顶部显示时钟与问候。',
    settings_show_seconds: '显示秒数', settings_show_seconds_desc: '时钟显示秒。',
    settings_clock_roll: '时钟滚动效果', settings_clock_roll_desc: '数字变化时使用滚动动画。',
    settings_open_new_tab: '在新标签页打开', settings_open_new_tab_desc: '书签在新标签页而不是当前页打开。',
    saved: '已保存。',
    nav_all: '全部内容', nav_recent: '最近新增',
    sec_bar: '书签栏', sec_pinned: '置顶链接', pinned_empty: '右键链接即可置顶', pin: '置顶链接', unpin: '取消置顶', sec_recent_top: '近 7 天点击 Top 5', sec_recent_empty: '暂无点击记录', sec_other: '其他书签', sec_hidden: '已隐藏',
    drag_hint: '按住卡片标题拖动排序 · 松手后可撤销', order_saved: '卡片顺序已保存', undo: '撤销',
    menu_link: '书签链接', menu_folder: '文件夹', menu_page: '当前页面', menu_input: '搜索框',
    menu_open: '打开链接', menu_open_new: '在新标签页打开', menu_copy_link: '复制链接', menu_copy_text: '复制选中文字',
    menu_show_folder: '打开文件夹', menu_hide_folder: '隐藏文件夹', menu_restore_folder: '恢复文件夹',
    menu_search: '搜索书签', menu_select_all: '全选', menu_cut: '剪切', menu_copy: '复制', menu_paste: '粘贴', menu_clear_search: '清空搜索',
    menu_all: '全部书签', menu_settings: '设置', menu_reload: '刷新页面', menu_top: '回到顶部',
    menu_copied: '已复制到剪贴板', menu_copy_failed: '剪贴板不可用',
    sidebar_restore: '恢复', sidebar_no_bookmarks: '无书签',
    card_bookmarks_bar: '收藏栏',
    search_placeholder: '搜索书签，回车搜索网页',
    results_title: '搜索结果',
    no_results_title: '没有匹配的书签',
    search_web_with: '使用', search_press_enter: '按回车使用',
    recent_empty: '还没有任何书签。',
    show_more: '展开全部', show_less: '收起',
    card_items: '项', card_hide: '隐藏文件夹',
    loading: '加载中书签档案…',
    empty_title: '你的收藏栏是空的。',
    empty_desc: '去收藏一些网页再回来吧。',
    error_desc: '无法加载书签。',
    greeting_night: '夜深了，还在翻阅吗。',
    greeting_morning: '早上好，档案管理员。',
    greeting_noon: '下午好，策展人。',
    greeting_evening: '晚上好，收藏家。',
    greeting_late: '夜晚浏览，书签的守护者。',
  }
};
function t(key) { return T[settings.lang]?.[key] || T.en[key] || key; }

// ===== Search engines =====
const ENGINES = {
  google: { url: 'https://www.google.com/search?q=', label: 'Google' },
  bing:   { url: 'https://www.bing.com/search?q=',   label: 'Bing' },
  baidu:  { url: 'https://www.baidu.com/s?wd=',      label: '百度' },
  ddg:    { url: 'https://duckduckgo.com/?q=',       label: 'DuckDuckGo' },
  sogou:  { url: 'https://www.sogou.com/web?query=', label: '搜狗' },
  so360:  { url: 'https://www.so.com/s?q=',          label: '360 搜索' },
};

// ===== Pastel palette (card hues) =====
const PALETTE = [350, 18, 42, 88, 145, 172, 202, 224, 262, 292];
function hueOf(fid) { const n = parseInt(fid, 10); return PALETTE[(isNaN(n) ? 0 : n) % PALETTE.length]; }

// ===== DOM refs =====
const $ = (id) => document.getElementById(id);
const grid = $('grid'), searchEl = $('search'), clockEl = $('clock'),
  dateEl = $('dateLine'), greetEl = $('greeting'),
  settingsBtn = $('settingsBtn'), drawer = $('drawer'), backdrop = $('drawerBackdrop'),
  drawerClose = $('drawerClose'), langSelect = $('langSelect'), themeSelect = $('themeSelect'),
  densitySelect = $('densitySelect'), engineSelect = $('engineSelect'),
  showSecondsCb = $('showSecondsCb'), clockRollCb = $('clockRollCb'),
  openNewTabCb = $('openNewTabCb'), searchOtherCb = $('searchOtherCb'),
  drawerSaved = $('drawerSaved'),
  sidebar = $('sidebar'), sidebarBackdrop = $('sidebarBackdrop'), navToggle = $('navToggle'),
  folderNav = $('folderNav'), pinnedList = $('pinnedList'), recentTopList = $('recentTopList'), otherHead = $('otherHead'), otherNav = $('otherNav'),
  hiddenHead = $('hiddenHead'), hiddenList = $('hiddenList'), hiddenCountEl = $('hiddenCount'),
  viewTitleEl = $('viewTitle'), viewCountEl = $('viewCount'),
  cntAll = $('cntAll'), cntRecent = $('cntRecent'),
  scrollTopBtn = $('scrollTop'), searchSuggestions = $('searchSuggestions'), dragHint = $('dragHint'),
  linkMenu = $('linkMenu'), actionToast = $('actionToast'), undoToast = $('undoToast'), undoText = $('undoText'), undoButton = $('undoButton');

// ===== State =====
let allGroups = [];        // 书签栏文件夹（递归）
let barDirect = [];        // 书签栏顶层散书签
let otherGroups = [];      // 其他书签里的文件夹
let otherDirect = [];      // 其他书签顶层散书签
let urlMap = new Map();    // url -> bm
let hiddenFolderIds = new Set();
let folderOrder = [];
let pinnedUrls = [];
let clickCounts = {};      // url -> count (storage.local)
let recentClicks = {};     // local day -> url -> count
let expandedCards = new Set();
let collapsedSubs = new Set();
let state = { view: 'all', query: '' };
let settings = {
  lang: 'zh', theme: 'light', density: 'comfy', engine: 'google',
  searchOther: true, showClock: true, showSeconds: false, clockRoll: false, openInNewTab: false,
};
const systemMQ = window.matchMedia('(prefers-color-scheme: dark)');

// ===== Mock (file:// 预览用；扩展环境中 chrome 真实存在) =====
const HAS_CHROME = Boolean(typeof chrome !== 'undefined' && chrome.bookmarks && chrome.storage);
function ensureMock() {
  if (HAS_CHROME) return;
  let mem;
  try { mem = JSON.parse(localStorage.getItem('nookmark-preview-storage')) || { sync: {}, local: {} }; } catch { mem = { sync: {}, local: {} }; }
  const storageListeners = new Set();
  const wrap = (store, area) => ({
    get: async (keys) => {
      const out = {};
      for (const k of (keys == null ? Object.keys(store) : Array.isArray(keys) ? keys : [keys])) if (k in store) out[k] = store[k];
      return out;
    },
    set: async (obj) => {
      const changes = {};
      for (const [key, value] of Object.entries(obj)) {
        if (JSON.stringify(store[key]) === JSON.stringify(value)) continue;
        changes[key] = { oldValue: store[key], newValue: structuredClone(value) };
      }
      Object.assign(store, structuredClone(obj));
      localStorage.setItem('nookmark-preview-storage', JSON.stringify(mem));
      queueMicrotask(() => { for (const listener of storageListeners) listener(changes, area); });
    },
    remove: async keys => {
      const changes = {};
      for (const key of Array.isArray(keys) ? keys : [keys]) { changes[key] = { oldValue: store[key] }; delete store[key]; }
      localStorage.setItem('nookmark-preview-storage', JSON.stringify(mem));
      queueMicrotask(() => { for (const listener of storageListeners) listener(changes, area); });
    },
  });
  const F = (dateOffset) => Date.now() - dateOffset * 86400000;
  const BM = (id, title, url, d) => ({ id, title, url, dateAdded: F(d) });
  window.chrome = {
    storage: { sync: wrap(mem.sync, 'sync'), local: wrap(mem.local, 'local'), onChanged: { addListener: listener => storageListeners.add(listener) } },
    runtime: { getURL: (p) => location.href.replace(/[^/]*$/, p.replace(/^\//, '')) },
    bookmarks: {
      getTree: async () => [{
        id: '0', children: [{
          id: '1', folderType: 'bookmarks-bar', title: 'Bookmarks Bar', children: [
            { id: '10', title: '聊天助手', dateAdded: F(15), children: [
              BM('100', 'ChatGPT', 'https://chatgpt.com', 14),
              BM('101', 'Claude', 'https://claude.ai', 10),
              BM('102', '文心一言', 'https://yiyan.baidu.com', 9),
              BM('103', 'Kimi', 'https://kimi.moonshot.cn', 9),
              BM('104', '豆包', 'https://www.doubao.com', 8),
              BM('105', 'DeepSeek', 'https://chat.deepseek.com', 8),
              BM('106', '通义千问', 'https://tongyi.aliyun.com', 7),
              BM('107', '讯飞星火', 'https://xinghuo.xfyun.cn', 7),
              BM('108', '智谱清言', 'https://chatglm.cn', 6),
              BM('109', 'Gemini', 'https://gemini.google.com', 6),
              BM('110', '腾讯元宝', 'https://yuanbao.tencent.com', 5),
              BM('111', '秘塔AI搜索', 'https://metaso.cn', 5),
            ]},
            { id: '11', title: '平台控制台', dateAdded: F(40), children: [
              BM('112', '阿里云控制台', 'https://home.console.aliyun.com', 39),
              BM('113', '腾讯云', 'https://console.cloud.tencent.com', 38),
              BM('114', '华为云', 'https://console.huaweicloud.com', 38),
              BM('115', '百度智能云', 'https://console.bce.baidu.com', 30),
              BM('116', 'Cloudflare', 'https://dash.cloudflare.com', 30),
              BM('117', 'Vercel', 'https://vercel.com/dashboard', 25),
              BM('118', 'Railway', 'https://railway.app', 25),
              BM('119', 'OSS 管理控制台', 'https://oss.console.aliyun.com', 20),
              BM('120', '域名管理', 'https://dc.console.aliyun.com', 18),
              BM('121', 'SSL 证书', 'https://yundun.console.aliyun.com', 12),
              BM('122', '计费中心', 'https://expense.console.aliyun.com', 9),
            ]},
            { id: '12', title: '学习', dateAdded: F(50), children: [
              BM('130', 'CSDN', 'https://www.csdn.net', 49),
              BM('131', '掘金', 'https://juejin.cn', 48),
              BM('132', '知乎', 'https://www.zhihu.com', 45),
              BM('133', 'Stack Overflow', 'https://stackoverflow.com', 44),
              BM('134', 'LeetCode', 'https://leetcode.cn', 40),
              BM('135', '牛客网', 'https://www.nowcoder.com', 38),
              BM('136', 'Codeforces', 'https://codeforces.com', 35),
              BM('137', '菜鸟教程', 'https://www.runoob.com', 33),
              BM('138', 'W3School', 'https://www.w3school.com.cn', 30),
              BM('139', '廖雪峰的官方网站', 'https://www.liaoxuefeng.com', 28),
              BM('140', 'MDN', 'https://developer.mozilla.org', 25),
              BM('141', '极客时间', 'https://time.geekbang.org', 22),
              BM('142', '慕课网', 'https://www.imooc.com', 20),
              BM('143', '哔哩哔哩', 'https://www.bilibili.com', 18),
              BM('144', '中国大学MOOC', 'https://www.icourse163.org', 15),
              BM('145', '网易公开课', 'https://open.163.com', 12),
              BM('146', 'TED', 'https://www.ted.com', 10),
              BM('147', 'Coursera', 'https://www.coursera.org', 8),
              BM('148', 'edX', 'https://www.edx.org', 6),
              BM('149', '学堂在线', 'https://www.xuetangx.com', 5),
              BM('150', '有道精品课', 'https://xue.youdao.com', 4),
              BM('151', '粉笔网', 'https://www.fenbi.com', 3),
              BM('152', '洛谷', 'https://www.luogu.com.cn', 2),
              BM('153', '企鹅辅导', 'https://www.fenbi.com/page', 1),
              BM('154', '万门大学', 'https://www.wanmen.org', 1),
            ]},
            { id: '13', title: '设计灵感', dateAdded: F(60), children: [
              BM('160', 'Figma', 'https://www.figma.com', 59),
              BM('161', 'Dribbble', 'https://dribbble.com', 58),
              BM('162', 'Behance', 'https://www.behance.net', 55),
              BM('163', 'Coolors', 'https://coolors.co', 50),
              BM('164', 'Google Fonts', 'https://fonts.google.com', 45),
              BM('165', 'Unsplash', 'https://unsplash.com', 40),
              BM('166', 'Openverse', 'https://openverse.org', 30),
              BM('167', 'Wikimedia Commons', 'https://commons.wikimedia.org', 20),
            ]},
            { id: '14', title: '软件', dateAdded: F(70), children: [
              BM('170', 'Everything', 'https://www.voidtools.com', 69),
              BM('171', 'Snipaste', 'https://www.snipaste.com', 68),
              BM('172', 'PowerToys', 'https://learn.microsoft.com/powertoys', 66),
              BM('173', 'Listary', 'https://www.listary.com', 65),
              { id: '15', title: '下载清单', dateAdded: F(64), children: [
                BM('180', 'IDM', 'https://www.internetdownloadmanager.com', 64),
                BM('181', 'Motrix', 'https://motrix.app', 60),
                BM('182', 'qBittorrent', 'https://www.qbittorrent.org', 58),
              ]},
              { id: '16', title: '系统镜像', dateAdded: F(56), children: [
                BM('190', 'MSDN 我告诉你', 'https://msdn.itellyou.cn', 56),
                BM('191', 'HelloWindows', 'https://hellowindows.cn', 54),
              ]},
            ]},
            BM('17', 'Hacker News', 'https://news.ycombinator.com', 2),
            BM('18', '少数派', 'https://sspai.com', 1),
          ]
        }, {
          id: '2', folderType: 'other', title: 'Other Bookmarks', children: [
            { id: '20', title: '临时收藏', dateAdded: F(5), children: [
              BM('200', 'Chrome 扩展开发文档', 'https://developer.chrome.com/docs/extensions', 4),
              BM('201', 'Chrome Web Store', 'https://chromewebstore.google.com', 3),
            ]},
            BM('21', 'Weather', 'https://weather.com', 3),
          ]
        }]
      }]
    },
  };
}

// ===== Entry =====
init();
async function init() {
  ensureMock();
  installPreferenceTranslations();
  await preparePreviewBookmarks();
  await loadSettings();
  localizeHTML();
  startClock();

  try {
    const tree = await chrome.bookmarks.getTree();
    indexBookmarkTree(tree);
    const roots = findRoots(tree);
    if (roots.bar?.children) {
      parseLevel(roots.bar.children, 'bar');
    }
    if (roots.other?.children) parseLevel(roots.other.children, 'other');
    // 空书签不提前返回：走 renderAll 的空态分支，保证事件照常绑定
  } catch (err) {
    grid.innerHTML = `<div class="state-hint"><span class="hint-icon">📓</span>${t('error_desc')}</div>`;
  }

  const s = await chrome.storage.local.get(['clickCounts', 'recentClicks']);
  clickCounts = s.clickCounts || {};
  recentClicks = s.recentClicks || {};

  cleanupFolderOrder();
  await loadHidden();
  await loadPreferences();

  render();
  bindEvents();
  bindPreferenceEvents();
  bindBookmarkChanges();
  document.documentElement.dataset.ready = 'true';
}

// ===== Bookmarks parsing =====
function findRoots(tree) {
  let bar = null, other = null;
  const walk = (nodes) => {
    for (const n of nodes) {
      if (n.folderType === 'bookmarks-bar') bar = n;
      else if (n.folderType === 'other') other = n;
      if (n.children) walk(n.children);
    }
  };
  walk(tree);
  if (!bar || !other) {
    const titles = { bar: ['Bookmarks Bar', '书签栏'], other: ['Other Bookmarks', '其他书签'] };
    const walk2 = (nodes) => {
      for (const n of nodes) {
        if (!bar && titles.bar.includes(n.title)) bar = n;
        else if (!other && titles.other.includes(n.title)) other = n;
        if (n.children) walk2(n.children);
      }
    };
    walk2(tree);
  }
  return { bar, other };
}

// 把某一层 children 解析为散书签 + 文件夹（递归）
function parseLevel(children, zone) {
  for (const c of children || []) {
    if (c.url) {
      const bm = bmData(c);
      (zone === 'bar' ? barDirect : otherDirect).push(bm);
      if (!urlMap.has(bm.url)) urlMap.set(bm.url, bm);
    } else if (c.children?.length) {
      const f = parseFolderNode(c);
      if (countAll(f) > 0) {
        (zone === 'bar' ? allGroups : otherGroups).push(f);
        indexFolder(f);
      }
    }
  }
}
function parseFolderNode(node) {
  const b = [], sf = [];
  for (const c of node.children || []) {
    if (c.url) b.push(bmData(c));
    else if (c.children?.length) sf.push(parseFolderNode(c));
  }
  return { folderName: node.title, folderId: node.id, bookmarks: b, subfolders: sf };
}
function bmData(n) { return { id: n.id, title: n.title, url: n.url, dateAdded: n.dateAdded || 0 }; }
function indexFolder(f) { for (const b of f.bookmarks) if (!urlMap.has(b.url)) urlMap.set(b.url, b); for (const sf of f.subfolders) indexFolder(sf); }
function countAll(f) { return f.bookmarks.length + f.subfolders.reduce((s, sf) => s + countAll(sf), 0); }
function flattenFolder(f) { return f.bookmarks.concat(...f.subfolders.map(flattenFolder)); }

// ===== Folder order =====
function cleanupFolderOrder() {
  const ids = new Set([...allGroups, ...otherGroups].map(g => g.folderId));
  folderOrder = folderOrder.filter(id => ids.has(id));
  for (const g of [...allGroups, ...otherGroups]) if (!folderOrder.includes(g.folderId)) folderOrder.push(g.folderId);
}
function applyFolderOrder() {
  const om = new Map(folderOrder.map((id, i) => [id, i]));
  const key = (g) => om.get(g.folderId) ?? Infinity;
  allGroups.sort((a, b) => key(a) - key(b));
  otherGroups.sort((a, b) => key(a) - key(b));
}
// ===== Storage 回声防护：自己写入触发的 onChanged 不再重渲染 =====
const echoGuard = new Set();
function guardedSet(obj) {
  Object.keys(obj).forEach(k => echoGuard.add(k));
  (async () => { try { await chrome.storage.sync.set(obj); } catch { featureNotice('storage_failed'); } })();
  setTimeout(() => Object.keys(obj).forEach(k => echoGuard.delete(k)), 600);
}
// 拖拽落点后按当前 DOM 顺序持久化（不触发整页重渲染）
function persistOrderFromDOM() {
  const ids = [...grid.querySelectorAll('.card[data-folder-id]')].map(el => el.dataset.folderId);
  const rest = folderOrder.filter(id => !ids.includes(id));
  folderOrder = [...ids, ...rest];
  guardedSet({ folderOrder });
  applyFolderOrder();
  updateNav();
}
let undoOrder = null;
let undoTimer = 0;
function showOrderUndo(previousOrder) {
  removedBookmark = null;
  undoOrder = previousOrder;
  undoText.textContent = t('order_saved');
  undoToast.hidden = false;
  clearTimeout(undoTimer);
  undoTimer = setTimeout(() => { undoToast.hidden = true; undoOrder = null; }, 8000);
}
function togglePin(url) {
  if (!urlMap.has(url)) return;
  pinnedUrls = pinnedUrls.includes(url) ? pinnedUrls.filter(item => item !== url) : [...pinnedUrls, url];
  guardedSet({ pinnedUrls });
  updateNav();
}

// ===== Hidden folders =====
async function loadHidden() {
  const s = await chrome.storage.sync.get(['hiddenFolderIds']);
  hiddenFolderIds = new Set(s.hiddenFolderIds || []);
  validateHiddenIds();
}
function validateHiddenIds() {
  const ids = new Set([...allGroups, ...otherGroups].map(g => g.folderId));
  let changed = false;
  for (const id of hiddenFolderIds) if (!ids.has(id)) { hiddenFolderIds.delete(id); changed = true; }
  if (changed) guardedSet({ hiddenFolderIds: [...hiddenFolderIds] });
}
function hideFolder(fid) {
  if (hiddenFolderIds.has(fid)) return;
  hiddenFolderIds.add(fid);
  guardedSet({ hiddenFolderIds: [...hiddenFolderIds] });
  if (state.view === 'folder:' + fid) state.view = 'all';
  render();
}
function restoreFolder(fid) {
  if (!hiddenFolderIds.has(fid)) return;
  hiddenFolderIds.delete(fid);
  guardedSet({ hiddenFolderIds: [...hiddenFolderIds] });
  render();
}

// ===== Frequency =====
function bumpCount(url) {
  clickCounts[url] = (clickCounts[url] || 0) + 1;
  const day = localDay(Date.now());
  recentClicks[day] ||= {};
  recentClicks[day][url] = (recentClicks[day][url] || 0) + 1;
  pruneRecentClicks();
  // 点击导航由浏览器处理完后再重建侧栏链接。
  setTimeout(updateNav, 0);
  const entries = Object.entries(clickCounts);
  if (entries.length > 3000) {
    entries.sort((a, b) => b[1] - a[1]);
    clickCounts = Object.fromEntries(entries.slice(0, 1500));
  }
  (async () => { try { await chrome.storage.local.set({ clickCounts, recentClicks }); } catch { featureNotice('storage_failed'); } })();
}
function localDay(time) {
  const d = new Date(time);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function pruneRecentClicks() {
  const cutoff = new Date();
  cutoff.setHours(0, 0, 0, 0);
  cutoff.setDate(cutoff.getDate() - 6);
  const firstDay = localDay(cutoff.getTime());
  for (const day of Object.keys(recentClicks)) if (day < firstDay) delete recentClicks[day];
}
function recentTopBookmarks(n) {
  pruneRecentClicks();
  const counts = new Map();
  for (const day of Object.values(recentClicks)) {
    for (const [url, count] of Object.entries(day)) counts.set(url, (counts.get(url) || 0) + count);
  }
  return [...counts].filter(([url]) => urlMap.has(url))
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([url, count]) => ({ bookmark: urlMap.get(url), count }));
}
function recentBookmarks(n) {
  const all = [];
  for (const g of [...allGroups, ...otherGroups]) all.push(...flattenFolder(g));
  all.push(...barDirect, ...otherDirect);
  return all.sort((a, b) => b.dateAdded - a.dateAdded).slice(0, n);
}

// ===== Views =====
function visibleGroups() { return allGroups.filter(g => !hiddenFolderIds.has(g.folderId)); }
function totalVisible() {
  return visibleGroups().reduce((s, g) => s + countAll(g), 0) + barDirect.length;
}

function render(skipAnim = false) {
  applyFolderOrder();
  const q = state.query.trim().toLowerCase();
  grid.classList.toggle('search-results', !!q);
  updateNav();
  if (q) renderSearch(q, skipAnim);
  else if (state.view === 'all') renderAll(skipAnim);
  else if (state.view === 'recent') renderRecent();
  else if (state.view === 'duplicates') renderDuplicates();
  else if (state.view.startsWith('folder:')) renderFolder(state.view.slice(7), skipAnim);
  dragHint.hidden = state.view !== 'all' || !!q || visibleGroups().length < 2;
  if (skipAnim) { grid.classList.add('skip-anim'); setTimeout(() => grid.classList.remove('skip-anim'), 60); }
  observeFavicons();
}

function setView(view) {
  state.view = view;
  render();
  closeSidebarMobile();
}

// 卡片 HTML
function cardHTML({ hue, name, count, folderId, cls = '', hideable, body }) {
  const fidAttr = folderId ? ` data-folder-id="${escapeAttr(folderId)}" data-total="${count}"` : '';
  const hideBtn = hideable
    ? `<button class="card-hide" title="${t('card_hide')}" data-hide-id="${escapeAttr(folderId)}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg></button>`
    : '';
  return `<section class="card${cls ? ' ' + cls : ''}" style="--h:${hue}"${fidAttr}>
    <header class="card-head"><span class="card-dot"></span><h2 class="card-name">${escapeHTML(name)}</h2><span class="card-count">${count}</span>${hideBtn}</header>
    <div class="card-pills">${body}</div>
  </section>`;
}

function pillHTML(bm, from) {
  const d = extractDomain(bm.url), fl = d.slice(0, 2).toUpperCase();
  const tip = (from ? from + ' — ' : '') + bm.title + '\n' + bm.url;
  return `<a class="pill" href="${escapeAttr(bm.url)}" target="${linkTarget()}" rel="noopener noreferrer" data-url="${escapeAttr(bm.url)}" data-bid="${escapeAttr(bm.id)}" title="${escapeAttr(tip)}"><img class="bm-favicon" src="${escapeAttr(faviconSrc(bm.url))}" alt="" loading="lazy" data-domain="${escapeAttr(d)}" data-url="${escapeAttr(bm.url)}"><span class="bm-fallback">${escapeHTML(fl)}</span><span class="bm-name">${escapeHTML(bm.title) || escapeHTML(d)}</span></a>`;
}

const CAP = 24;
// 始终渲染完整内容；clamped 状态由 .over class 控制隐藏，切换不重建 DOM
function groupBody(g, clamped) {
  const total = countAll(g);
  let html = g.bookmarks.map(b => pillHTML(b)).join('');
  for (const sf of g.subfolders) html += subHTML(sf);
  if (total > CAP) {
    html += `<button class="card-more" data-toggle-id="${escapeAttr(g.folderId)}">${clamped ? `${t('show_more')} ${total} ${t('card_items')}` : t('show_less')}</button>`;
  }
  return html;
}
function applyClamp(card, clamped) {
  const fid = card.dataset.folderId;
  const total = parseInt(card.dataset.total, 10) || 0;
  card.querySelectorAll(':scope > .card-pills > .pill').forEach((p, i) => {
    p.classList.toggle('over', clamped && i >= CAP);
  });
  card.querySelectorAll(':scope .subgroup').forEach(s => s.classList.toggle('over', clamped));
  const btn = card.querySelector('.card-more');
  if (btn) btn.textContent = clamped ? `${t('show_more')} ${total} ${t('card_items')}` : t('show_less');
}
function applyClampAll() {
  grid.querySelectorAll('.card.clamped').forEach(c => applyClamp(c, true));
}
// ===== 弹簧动画系统（卡片让位 / 归位，手机桌面手感） =====
// JS 刚度/阻尼积分驱动，不依赖 CSS transition（会被高频重排打断显得像瞬移）。
// k=170, c=20 → 阻尼比约 0.77，轻微回弹后归位。
// 循环用自排程 setTimeout 而非 rAF：rAF 在部分环境（内嵌浏览器后台标签等）会停摆。
const springs = new Map(); // el -> {x, y, s, vx, vy, vs}
let springTimer = 0, springLast = 0;
const FRAME_MS = 16;
function springTick() {
  springTimer = 0;
  const now = performance.now();
  // 子步进积分：定时器被节流（后台标签等）时也能按真实时间推进动画
  const real = Math.min((now - (springLast || now - FRAME_MS)) / 1000, 0.5);
  springLast = now;
  const steps = Math.max(1, Math.min(8, Math.round(real / (1 / 60))));
  const dt = real / steps;
  const k = 170, c = 20;
  for (let i = 0; i < steps; i++) {
    for (const [el, sp] of springs) {
      sp.vx += (-k * sp.x - c * sp.vx) * dt;
      sp.vy += (-k * sp.y - c * sp.vy) * dt;
      sp.vs += (-k * (sp.s - 1) - c * sp.vs) * dt;
      sp.x += sp.vx * dt; sp.y += sp.vy * dt; sp.s += sp.vs * dt;
    }
  }
  let active = false;
  for (const [el, sp] of springs) {
    if (Math.abs(sp.x) < 0.5 && Math.abs(sp.y) < 0.5 && Math.abs(sp.s - 1) < 0.003 &&
        Math.abs(sp.vx) < 8 && Math.abs(sp.vy) < 8 && Math.abs(sp.vs) < 0.1) {
      springs.delete(el);
      el.style.transform = '';
      el.style.willChange = '';
      el.classList.remove('springing');
    } else {
      el.style.transform = `translate(${sp.x}px, ${sp.y}px) scale(${sp.s})`;
      active = true;
    }
  }
  if (active) springTimer = setTimeout(springTick, FRAME_MS);
  else springLast = 0;
}
function springShift(el, dx, dy) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // 布局跳变了 dx/dy：视觉上先留在原地，弹簧归位；已有弹簧则合并位移、保留动量。
  // 必须同步写 transform（与 DOM 变更同一任务）——否则节流环境下卡片会先画在新位置再弹回，
  // 看起来就是瞬移 + 弹簧失效。
  let sp = springs.get(el);
  if (!sp) {
    sp = { x: dx, y: dy, s: 1, vx: 0, vy: 0, vs: 0 };
    springs.set(el, sp);
  } else { sp.x += dx; sp.y += dy; }
  el.classList.add('springing');
  el.style.willChange = 'transform';
  el.style.transform = `translate(${sp.x}px, ${sp.y}px) scale(${sp.s})`;
  if (!springTimer) { springLast = 0; springTimer = setTimeout(springTick, FRAME_MS); }
}
function springFrom(el, x, y, s = 1) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.transform = ''; return; }
  // 以给定视觉偏移启动弹簧（拖拽松手时从指针位置弹回槽位）
  springs.set(el, { x, y, s, vx: 0, vy: 0, vs: 0 });
  el.classList.add('springing');
  el.style.willChange = 'transform';
  el.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
  if (!springTimer) { springLast = 0; springTimer = setTimeout(springTick, FRAME_MS); }
}
// 布局变化 → 其余卡片从原视觉位置弹簧过渡到新位置
function animMove(container, mutate, excludeEl = null) {
  const els = [...container.querySelectorAll('.card')].filter(el => el !== excludeEl && !el.classList.contains('drag-lift'));
  const before = els.map(el => el.getBoundingClientRect());
  mutate();
  els.forEach((el, i) => {
    const after = el.getBoundingClientRect();
    const dx = before[i].left - after.left, dy = before[i].top - after.top;
    if (dx || dy) springShift(el, dx, dy);
  });
}
function toggleCardExpand(fid) {
  const card = grid.querySelector(`.card[data-folder-id="${CSS.escape(fid)}"]`);
  if (!card) return;
  const wasExpanded = expandedCards.has(fid);
  wasExpanded ? expandedCards.delete(fid) : expandedCards.add(fid);
  animMove(grid, () => applyClamp(card, wasExpanded));
  card.classList.toggle('clamped', wasExpanded);
  saveLayoutMemory();
}
function subHTML(sf) {
  const collapsed = collapsedSubs.has(sf.folderId);
  const n = countAll(sf);
  const pills = sf.bookmarks.map(b => pillHTML(b, sf.folderName)).join('');
  const nested = sf.subfolders.map(s2 => subHTML(s2)).join(' ');
  return `<div class="subgroup${collapsed ? ' collapsed' : ''}" data-sfid="${escapeAttr(sf.folderId)}">
    <button class="sub-head" aria-expanded="${!collapsed}"><svg class="sub-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg><span class="sub-name">${escapeHTML(sf.folderName)}</span><span class="sub-count">${n}</span></button>
    <div class="sub-body">${pills}${nested}</div>
  </div>`;
}

// --- view: 全部 ---
function renderAll(skipAnim) {
  const vis = visibleGroups();
  viewTitleEl.textContent = t('nav_all');
  viewCountEl.textContent = totalVisible() ? `· ${totalVisible()}` : '';
  if (!vis.length && !barDirect.length) { renderEmpty(); return; }
  let html = '';
  if (barDirect.length) html += cardHTML({ hue: 45, name: t('card_bookmarks_bar'), count: barDirect.length, body: barDirect.map(b => pillHTML(b, t('card_bookmarks_bar'))).join('') });
  for (const g of vis) {
    const total = countAll(g);
    const clamped = total > CAP && !expandedCards.has(g.folderId);
    html += cardHTML({
      hue: hueOf(g.folderId), name: g.folderName, count: total,
      folderId: g.folderId, cls: clamped ? 'clamped' : '',
      hideable: true,
      body: groupBody(g, clamped),
    });
  }
  grid.innerHTML = html;
  applyClampAll();
}

// --- view: 单个文件夹 ---
function renderFolder(fid, skipAnim) {
  const g = [...allGroups, ...otherGroups].find(x => x.folderId === fid);
  if (!g) { state.view = 'all'; renderAll(); return; }
  const total = countAll(g);
  viewTitleEl.textContent = g.folderName;
  viewCountEl.textContent = `· ${total}`;
  const clamped = total > CAP && !expandedCards.has(fid);
  grid.innerHTML = cardHTML({
    hue: hueOf(g.folderId), name: g.folderName, count: total,
    folderId: g.folderId, cls: clamped ? 'clamped' : '', hideable: true,
    body: groupBody(g, clamped),
  });
  applyClampAll();
}

// --- view: 最近新增 ---
function renderRecent() {
  const list = recentBookmarks(12);
  viewTitleEl.textContent = t('nav_recent');
  viewCountEl.textContent = list.length ? `· ${list.length}` : '';
  grid.innerHTML = list.length
    ? cardHTML({ hue: 205, name: t('nav_recent'), count: list.length, body: list.map(b => pillHTML(b)).join('') })
    : `<div class="state-hint"><span class="hint-icon">🕰️</span>${t('recent_empty')}</div>`;
}

// --- view: 搜索 ---
function searchPool() {
  const pool = [];
  for (const g of visibleGroups()) pool.push(...flattenFolder(g).map(b => ({ b, from: g.folderName })));
  for (const g of otherGroups) if (settings.searchOther) pool.push(...flattenFolder(g).map(b => ({ b, from: g.folderName })));
  pool.push(...barDirect.map(b => ({ b, from: t('card_bookmarks_bar') })));
  if (settings.searchOther) pool.push(...otherDirect.map(b => ({ b, from: t('sec_other') })));
  return pool;
}
function searchMatches(q) {
  return searchPool().filter(({ b }) => b.title.toLowerCase().includes(q) || b.url.toLowerCase().includes(q));
}
function selectedEngine() { return ENGINES[settings.engine] || ENGINES.google; }
function webSearchUrl(query) { return selectedEngine().url + encodeURIComponent(query); }
let suggestionIndex = -1;
function showSuggestions() {
  const q = searchEl.value.trim().toLowerCase();
  suggestionIndex = -1;
  searchEl.removeAttribute('aria-activedescendant');
  if (!q || document.activeElement !== searchEl) { searchSuggestions.hidden = true; return; }
  const seen = new Set();
  const hits = searchMatches(q).filter(({ b }) => {
    if (seen.has(b.url)) return false;
    seen.add(b.url);
    return true;
  }).slice(0, 8);
  searchSuggestions.innerHTML = hits.length
    ? hits.map(({ b }, i) => `<a id="suggestion-${i}" class="suggestion" role="option" aria-selected="false" href="${escapeAttr(b.url)}" target="${linkTarget()}" rel="noopener noreferrer" data-url="${escapeAttr(b.url)}" data-bid="${escapeAttr(b.id)}"><span class="suggestion-name">${escapeHTML(b.title || extractDomain(b.url))}</span><span class="suggestion-domain">${escapeHTML(extractDomain(b.url))}</span></a>`).join('')
    : `<div class="suggestion-empty">${t('no_results_title')}</div><a class="suggestion-web" href="${escapeAttr(webSearchUrl(searchEl.value.trim()))}">${engineIconHTML()}<span>${t('search_press_enter')} ${escapeHTML(selectedEngine().label)} ${settings.lang === 'zh' ? '搜索网页' : 'the web'}</span><kbd>Enter</kbd></a>`;
  searchSuggestions.hidden = false;
  searchEl.setAttribute('aria-expanded', 'true');
}
function moveSuggestion(step) {
  const items = [...searchSuggestions.querySelectorAll('a.suggestion')];
  if (!items.length) return;
  suggestionIndex = (suggestionIndex + step + items.length) % items.length;
  items.forEach((item, i) => { item.classList.toggle('active', i === suggestionIndex); item.setAttribute('aria-selected', String(i === suggestionIndex)); });
  searchEl.setAttribute('aria-activedescendant', items[suggestionIndex].id);
  items[suggestionIndex].scrollIntoView({ block: 'nearest' });
}
function renderSearch(q, skipAnim) {
  const eng = selectedEngine();
  const hits = searchMatches(q);
  viewTitleEl.textContent = t('results_title');
  viewCountEl.textContent = `· ${hits.length}`;
  if (!hits.length) {
    grid.innerHTML = `<div class="state-hint"><span class="hint-icon">🔍</span>${t('no_results_title')} “${escapeHTML(state.query.trim())}”<br><br><a href="${escapeAttr(webSearchUrl(state.query.trim()))}" target="_self" class="empty-web-link">${engineIconHTML()}${t('search_web_with')} ${escapeHTML(eng.label)} ${settings.lang === 'zh' ? '搜索' : 'to search for'} “${escapeHTML(state.query.trim())}” →</a></div>`;
    return;
  }
  const shown = hits.slice(0, 60);
  grid.innerHTML = cardHTML({ hue: 210, name: t('results_title'), count: hits.length, body: shown.map(({ b, from }) => pillHTML(b, from)).join('') });
}

function renderEmpty() {
  grid.innerHTML = `<div class="state-hint"><span class="hint-icon">📚</span>${t('empty_title')}<br>${t('empty_desc')}</div>`;
}

// ===== Sidebar render =====
function updateNav() {
  cntAll.textContent = totalVisible();
  cntRecent.textContent = recentBookmarks(12).length;

  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === state.view && !state.query);
  });

  pinnedList.innerHTML = pinnedUrls.filter(url => urlMap.has(url))
    .map(url => pillMiniHTML(urlMap.get(url))).join('') || `<span class="recent-top-empty">${t('pinned_empty')}</span>`;

  // 书签栏文件夹列表
  folderNav.innerHTML = visibleGroups().map(g =>
    `<button class="f-item${state.view === 'folder:' + g.folderId && !state.query ? ' active' : ''}" data-fid="${escapeAttr(g.folderId)}"><span class="f-dot" style="--h:${hueOf(g.folderId)}"></span><span class="f-name">${escapeHTML(g.folderName)}</span><span class="f-count">${countAll(g)}</span></button>`
  ).join('');

  const recentTop = recentTopBookmarks(5);
  recentTopList.innerHTML = recentTop.length
    ? recentTop.map(({ bookmark, count }, i) => `<div class="recent-top-row"><span class="recent-top-rank">${i + 1}</span>${pillMiniHTML(bookmark)}<span class="recent-top-count">${count}</span></div>`).join('')
    : `<span class="recent-top-empty">${t('sec_recent_empty')}</span>`;

  // 其他书签
  const hasOther = otherGroups.length || otherDirect.length;
  otherHead.hidden = !hasOther;
  otherNav.hidden = !hasOther;
  if (hasOther) {
    otherNav.innerHTML = otherGroups.map(g =>
      `<button class="f-item${state.view === 'folder:' + g.folderId && !state.query ? ' active' : ''}" data-fid="${escapeAttr(g.folderId)}"><span class="f-dot" style="--h:${hueOf(g.folderId)}"></span><span class="f-name">${escapeHTML(g.folderName)}</span><span class="f-count">${countAll(g)}</span></button>`
    ).join('') + otherDirect.map(b =>
      pillMiniHTML(b)
    ).join('');
  }

  renderHiddenSection();
  applyModules();
  updateDuplicateCount();
  observeFavicons();
}
function pillMiniHTML(b) {
  const d = extractDomain(b.url);
  return `<a class="pill pill-mini" href="${escapeAttr(b.url)}" target="${linkTarget()}" rel="noopener noreferrer" data-url="${escapeAttr(b.url)}" data-bid="${escapeAttr(b.id)}" title="${escapeAttr(b.title)}&#10;${escapeAttr(b.url)}"><img class="bm-favicon" src="${escapeAttr(faviconSrc(b.url))}" alt="" loading="lazy" data-domain="${escapeAttr(d)}" data-url="${escapeAttr(b.url)}"><span class="bm-fallback">${escapeHTML(d.slice(0, 2).toUpperCase())}</span><span class="bm-name">${escapeHTML(b.title) || escapeHTML(d)}</span></a>`;
}

function renderHiddenSection() {
  const hidden = [...allGroups, ...otherGroups].filter(g => hiddenFolderIds.has(g.folderId));
  hiddenHead.hidden = hiddenList.hidden = !hidden.length;
  hiddenCountEl.textContent = hidden.length;
  if (!hidden.length) { hiddenList.innerHTML = ''; return; }
  hiddenList.innerHTML = hidden.map(g => {
    const n = countAll(g);
    const mini = flattenFolder(g).slice(0, 20).map(b => pillMiniHTML(b)).join('');
    return `<div class="h-item-wrap${expandedHidden.has(g.folderId) ? ' expanded' : ''}" data-fid="${escapeAttr(g.folderId)}">
      <div class="h-item"><svg class="h-expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg><span class="h-name">${escapeHTML(g.folderName)}</span><span class="f-count">${n}</span><button class="h-restore" data-restore-id="${escapeAttr(g.folderId)}" title="${t('sidebar_restore')}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></button></div>
      <div class="h-body">${mini || `<span class="h-empty">${t('sidebar_no_bookmarks')}</span>`}</div>
    </div>`;
  }).join('');
}

// ===== Favicon: chrome._favicon 优先，Google s2 兜底，最后字母 =====
function faviconSrc(url) {
  try { return chrome.runtime.getURL('/_favicon/?pageUrl=' + encodeURIComponent(url) + '&size=32'); }
  catch { return 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(extractDomain(url)) + '&sz=32'; }
}
function observeFavicons() {
  document.querySelectorAll('.bm-favicon').forEach(img => {
    if (img.dataset.observed) return;
    img.dataset.observed = '1';
    setupFaviconFallback(img);
  });
}
function setupFaviconFallback(img) {
  const domain = img.dataset.domain, url = img.dataset.url;
  let stage = 0;
  const sources = [
    faviconSrc(url),
    'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=32',
  ];
  const next = () => {
    stage++;
    if (stage < sources.length) img.src = sources[stage];
    else { img.style.display = 'none'; const fb = img.nextElementSibling; if (fb?.classList.contains('bm-fallback')) fb.style.display = 'flex'; }
  };
  const bt = setTimeout(() => { if (img.naturalWidth === 0 || img.naturalWidth < 3) next(); }, 2500);
  img.addEventListener('error', () => { clearTimeout(bt); next(); });
  img.addEventListener('load', () => { clearTimeout(bt); if (img.naturalWidth <= 1) next(); });
}

// ===== Clock =====
function startClock() {
  updateClock();
  const tick = () => {
    updateClock();
    setTimeout(tick, 1020 - (Date.now() % 1000));
  };
  setTimeout(tick, 1020 - (Date.now() % 1000));
}
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0'), mm = String(now.getMinutes()).padStart(2, '0'),
    ss = String(now.getSeconds()).padStart(2, '0');
  const newStr = settings.showSeconds ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
  const minuteChanged = updateClock._lm !== mm;
  if (settings.showSeconds || minuteChanged || !updateClock._init) {
    updateClock._init = true;
    if (settings.clockRoll) {
      const prev = clockEl.dataset.prev || '';
      const lenCh = prev.length !== newStr.length;
      let html = '';
      for (let i = 0; i < newStr.length; i++)
        html += `<span class="digit-char${(lenCh || i >= prev.length || prev[i] !== newStr[i]) ? ' roll' : ''}">${escapeHTML(newStr[i])}</span>`;
      clockEl.innerHTML = html;
    } else clockEl.textContent = newStr;
    clockEl.dataset.prev = newStr;
  }
  if (minuteChanged) {
    updateClock._lm = mm;
    // 日期
    const loc = settings.lang === 'zh' ? 'zh-CN' : 'en-US';
    const dStr = new Intl.DateTimeFormat(loc, { month: 'long', day: 'numeric' }).format(now);
    const wStr = new Intl.DateTimeFormat(loc, { weekday: 'long' }).format(now);
    dateEl.textContent = `${dStr} · ${wStr}`;
    // 问候
    const h = now.getHours();
    const ks = ['greeting_night', 'greeting_morning', 'greeting_noon', 'greeting_evening', 'greeting_late'];
    const gi = h < 6 ? 0 : h < 12 ? 1 : h < 17 ? 2 : h < 21 ? 3 : 4;
    greetEl.textContent = t(ks[gi]);
  }
}

// ===== Settings / storage =====
async function loadSettings() {
  const keys = ['lang', 'theme', 'density', 'engine', 'searchOther', 'showClock', 'showSeconds', 'clockRoll', 'openInNewTab', 'hiddenFolderIds', 'folderOrder', 'pinnedUrls'];
  const s = await chrome.storage.sync.get(keys);
  settings.lang = s.lang || 'zh';
  settings.theme = s.theme || 'light';
  settings.density = s.density || 'comfy';
  settings.engine = ENGINES[s.engine] ? s.engine : 'google';
  settings.searchOther = s.searchOther !== false;
  settings.showClock = s.showClock !== false;
  settings.showSeconds = s.showSeconds === true;
  settings.clockRoll = s.clockRoll === true;
  settings.openInNewTab = s.openInNewTab === true;
  folderOrder = s.folderOrder || [];
  pinnedUrls = Array.isArray(s.pinnedUrls) ? s.pinnedUrls : [];
  langSelect.value = settings.lang;
  themeSelect.value = settings.theme;
  densitySelect.value = settings.density;
  engineSelect.value = settings.engine;
  searchOtherCb.checked = settings.searchOther;
  showSecondsCb.checked = settings.showSeconds;
  clockRollCb.checked = settings.clockRoll;
  openNewTabCb.checked = settings.openInNewTab;
  applyLang(settings.lang);
  applyTheme();
  applyDensity();
  // dev/preview hooks: ?theme=dark&view=recent&q=git
  try {
    const sp = new URLSearchParams(location.search);
    if (sp.get('theme')) { settings.theme = sp.get('theme'); applyTheme(); }
    if (sp.get('density')) { settings.density = sp.get('density'); applyDensity(); }
    if (['all', 'recent'].includes(sp.get('view'))) state.view = sp.get('view');
    if (sp.get('q')) { state.query = sp.get('q'); searchEl.value = sp.get('q'); searchEl.parentElement.classList.add('has-query'); }
  } catch {}
}
function applyLang(lang) { settings.lang = lang; document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'; document.title = t('tab_title'); updateClock._lm = null; updateClock(); }
function resolveTheme() { return settings.theme === 'system' ? (systemMQ.matches ? 'dark' : 'light') : settings.theme; }
function applyTheme() { document.body.setAttribute('data-theme', resolveTheme()); applyAppearance(); }
function applyDensity() { document.body.setAttribute('data-density', settings.density); }
function onSystemThemeChange() { if (settings.theme === 'system') applyTheme(); }
systemMQ.addEventListener('change', onSystemThemeChange);

let saveTimer = null;
async function saveAndFlash() {
  clearTimeout(saveTimer);
  try { await chrome.storage.sync.set(settings); } catch { featureNotice('storage_failed'); return; }
  drawerSaved.textContent = t('saved');
  drawerSaved.classList.add('flash');
  saveTimer = setTimeout(() => drawerSaved.classList.remove('flash'), 1200);
}

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync') {
    if (changes.lang) { langSelect.value = changes.lang.newValue; applyLang(changes.lang.newValue); localizeHTML(); render(true); }
    if (changes.theme) { settings.theme = changes.theme.newValue; themeSelect.value = settings.theme; applyTheme(); }
    if (changes.density) { settings.density = changes.density.newValue; densitySelect.value = settings.density; applyDensity(); }
    if (changes.engine) { settings.engine = changes.engine.newValue; engineSelect.value = settings.engine; if (state.query.trim()) { render(true); showSuggestions(); } }
    if (changes.searchOther) { settings.searchOther = changes.searchOther.newValue; searchOtherCb.checked = settings.searchOther; if (state.query.trim()) { render(true); showSuggestions(); } }
    if (changes.showClock) { settings.showClock = changes.showClock.newValue; applyModules(); renderModuleControls(); }
    if (changes.showSeconds) { settings.showSeconds = changes.showSeconds.newValue; showSecondsCb.checked = settings.showSeconds; updateClock._init = false; updateClock(); }
    if (changes.clockRoll) { settings.clockRoll = changes.clockRoll.newValue; clockRollCb.checked = settings.clockRoll; }
    if (changes.openInNewTab) { settings.openInNewTab = changes.openInNewTab.newValue; openNewTabCb.checked = settings.openInNewTab; render(true); }
    if (changes.hiddenFolderIds) { hiddenFolderIds = new Set(changes.hiddenFolderIds.newValue || []); if (!echoGuard.has('hiddenFolderIds')) render(true); }
    if (changes.folderOrder) { folderOrder = changes.folderOrder.newValue || []; if (!echoGuard.has('folderOrder')) { applyFolderOrder(); render(true); } }
    if (changes.pinnedUrls) { pinnedUrls = changes.pinnedUrls.newValue || []; if (!echoGuard.has('pinnedUrls')) updateNav(); }
  } else if (area === 'local' && (changes.clickCounts || changes.recentClicks)) {
    // 其他窗口的点击计数同步
    if (changes.clickCounts) clickCounts = changes.clickCounts.newValue || {};
    if (changes.recentClicks) recentClicks = changes.recentClicks.newValue || {};
    updateNav();
  }
});

// ===== i18n apply =====
function localizeHTML() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    let key = el.dataset.i18n;
    // data-i18n 空值属性：用当前文本内容作为键名并缓存
    if (!key) {
      if (!el.dataset.i18nCached) el.dataset.i18nCached = el.textContent.trim();
      key = el.dataset.i18nCached;
    }
    if (!key) return;
    if (el.tagName === 'OPTION') { el.textContent = t(key); return; }
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  localizePreferenceUI();
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
}

// ===== Drawer =====
function openDrawer() { drawer.classList.add('open'); backdrop.classList.add('open'); drawer.inert = false; drawerClose.focus(); }
function closeDrawer() { drawer.classList.remove('open'); backdrop.classList.remove('open'); drawer.inert = true; settingsBtn.focus(); }
function closeSidebarMobile() {
  if (window.innerWidth <= 1080) { sidebar.classList.remove('open'); sidebarBackdrop.classList.remove('open'); }
}

// ===== Keyboard =====
function focusSearch() { if (drawer.classList.contains('open')) closeDrawer(); searchEl.focus(); searchEl.select(); }

// ===== Events =====
function bindEvents() {
  // 侧栏导航
  document.querySelectorAll('.nav-item').forEach(el => el.addEventListener('click', () => { state.query = ''; searchEl.value = ''; searchEl.parentElement.classList.remove('has-query'); setView(el.dataset.view); }));

  const folderClick = (e) => {
    const item = e.target.closest('[data-fid]');
    if (item) { state.query = ''; searchEl.value = ''; searchEl.parentElement.classList.remove('has-query'); setView('folder:' + item.dataset.fid); return; }
    const mini = e.target.closest('a.pill-mini');
    if (mini) bumpCount(mini.dataset.url);
  };
  folderNav.addEventListener('click', folderClick);
  pinnedList.addEventListener('click', folderClick);
  recentTopList.addEventListener('click', folderClick);
  otherNav.addEventListener('click', folderClick);

  let menuContext = null, menuCloseTimer = 0, noticeTimer = 0;
  function closeMenu() {
    linkMenu.classList.remove('open');
    clearTimeout(menuCloseTimer);
    menuCloseTimer = setTimeout(() => { if (!linkMenu.classList.contains('open')) linkMenu.hidden = true; }, 170);
  }
  function showNotice(key) {
    actionToast.textContent = t(key);
    actionToast.hidden = false;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => { actionToast.hidden = true; }, 1800);
  }
  async function copyText(value) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard API unavailable');
      await navigator.clipboard.writeText(value);
    } catch {
      try {
        const field = document.createElement('textarea');
        field.value = value;
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('copy failed');
      } catch { showNotice('menu_copy_failed'); return false; }
    }
    showNotice('menu_copied');
    return true;
  }
  function menuItems(context) {
    if (context.kind === 'link') return [
      ['open', 'menu_open'], ['open-new', 'menu_open_new'], ['copy-link', 'menu_copy_link'],
      null, [pinnedUrls.includes(context.url) ? 'unpin' : 'pin', pinnedUrls.includes(context.url) ? 'unpin' : 'pin'],
      ['edit-bookmark', 'edit_bookmark'], ['move-bookmark', 'move_bookmark'],
      ['search', 'menu_search'],
    ];
    if (context.kind === 'folder') return [
      ['show-folder', 'menu_show_folder'],
      [hiddenFolderIds.has(context.fid) ? 'restore-folder' : 'hide-folder', hiddenFolderIds.has(context.fid) ? 'menu_restore_folder' : 'menu_hide_folder'],
      null, ['search', 'menu_search'],
    ];
    if (context.kind === 'input') return [
      ['cut', 'menu_cut'], ['copy', 'menu_copy'], ['paste', 'menu_paste'],
      null, ['select-all', 'menu_select_all'], ...(context.input === searchEl ? [['clear-search', 'menu_clear_search']] : []),
      ...(context.input === searchEl ? [null, ['all', 'menu_all'], ['settings', 'menu_settings']] : []),
    ];
    return [
      ...(context.selection ? [['copy-selection', 'menu_copy_text'], null] : []),
      ['search', 'menu_search'], ['all', 'menu_all'], ['settings', 'menu_settings'],
      null, ['top', 'menu_top'], ['reload', 'menu_reload'],
    ];
  }
  function menuIcon(action) {
    const paths = {
      'edit-bookmark': '<path d="m15 4 5 5-11 11H4v-5zM13 6l5 5"/>',
      'move-bookmark': '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 13h8m-3-3 3 3-3 3"/>',
      open: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
      'open-new': '<path d="M13 5h6v6m0-6-8 8"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
      'copy-link': '<path d="M10 13a4 4 0 0 0 6 .3l2.5-2.5a4 4 0 0 0-5.7-5.6l-1.4 1.4"/><path d="M14 11a4 4 0 0 0-6-.3l-2.5 2.5a4 4 0 0 0 5.7 5.6l1.4-1.4"/>',
      'copy-selection': '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
      copy: '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
      pin: '<path d="m16 3 5 5-2 1-3 3-1 4-2 2-7-7 2-2 4-1 3-3zM9 15l-6 6"/>',
      unpin: '<path d="m16 3 5 5-2 1-3 3-1 4-2 2-7-7 2-2 4-1 3-3zM9 15l-6 6M3 3l18 18"/>',
      search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
      'show-folder': '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
      'hide-folder': '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M4 20 20 4"/>',
      'restore-folder': '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m9 14 2 2 4-4"/>',
      cut: '<circle cx="6" cy="17" r="2"/><circle cx="6" cy="7" r="2"/><path d="m8 8 11 11M8 16 19 5"/>',
      paste: '<rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 5V3h6v2m-7 5h8m-8 4h6"/>',
      'select-all': '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M3 8V4h4m10 0h4v4M3 16v4h4m10 0h4v-4"/>',
      'clear-search': '<path d="M5 5 19 19M19 5 5 19"/>',
      all: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>',
      top: '<path d="M12 20V5m-6 6 6-6 6 6"/>',
      reload: '<path d="M20 11a8 8 0 1 0-2 6m2-6V5m0 6h-6"/>',
    };
    return `<span class="menu-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[action] || ''}</svg></span>`;
  }
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (editorPending) return;
    const link = e.target.closest('a[data-url]');
    const folder = e.target.closest('.card[data-folder-id], .f-item[data-fid], .h-item-wrap[data-fid]');
    const input = e.target.closest('input[type="text"], input[type="url"], input:not([type]), textarea');
    if (link && (bookmarkNodes.has(link.dataset.bid) || urlMap.has(link.dataset.url))) {
      const bookmark = bookmarkNodes.get(link.dataset.bid) || urlMap.get(link.dataset.url);
      menuContext = { kind: 'link', bid: bookmark.id, url: bookmark.url, title: bookmark.title || extractDomain(bookmark.url) };
    } else if (folder) {
      const fid = folder.dataset.folderId || folder.dataset.fid;
      const group = [...allGroups, ...otherGroups].find(item => item.folderId === fid);
      menuContext = group ? { kind: 'folder', fid, title: group.folderName } : { kind: 'page', title: t('menu_page') };
    } else if (input) {
      menuContext = { kind: 'input', input, title: input === searchEl ? t('menu_input') : t('menu_text_input'), start: input.selectionStart || 0, end: input.selectionEnd || 0 };
    } else {
      menuContext = { kind: 'page', title: t('menu_page'), selection: window.getSelection()?.toString().trim() || '' };
    }
    const items = menuItems(menuContext);
    linkMenu.innerHTML = `<div class="menu-title">${escapeHTML(menuContext.title)}</div>` + items.map(item => item
      ? `<button type="button" role="menuitem" class="${['pin', 'unpin', 'hide-folder', 'restore-folder'].includes(item[0]) ? 'menu-special' : ''}" data-menu-action="${item[0]}">${menuIcon(item[0])}<span class="menu-label">${escapeHTML(t(item[1]))}</span></button>`
      : '<div class="menu-divider" role="separator"></div>').join('');
    clearTimeout(menuCloseTimer);
    linkMenu.hidden = false;
    linkMenu.classList.remove('open');
    const width = linkMenu.offsetWidth, height = linkMenu.offsetHeight;
    linkMenu.style.left = `${Math.max(8, Math.min(e.clientX, window.innerWidth - width - 8))}px`;
    linkMenu.style.top = `${Math.max(8, Math.min(e.clientY, window.innerHeight - height - 8))}px`;
    requestAnimationFrame(() => { linkMenu.classList.add('open'); linkMenu.querySelector('button')?.focus({ preventScroll: true }); });
  });
  linkMenu.addEventListener('click', async (e) => {
    const action = e.target.closest('[data-menu-action]')?.dataset.menuAction;
    if (!action || !menuContext) return;
    const context = menuContext;
    closeMenu();
    if (action === 'open') { bumpCount(context.url); location.href = context.url; }
    else if (action === 'open-new') { bumpCount(context.url); window.open(context.url, '_blank', 'noopener,noreferrer'); }
    else if (action === 'copy-link') copyText(context.url);
    else if (action === 'copy-selection') copyText(context.selection);
    else if (action === 'copy') await copyText(context.input.value.slice(context.start, context.end));
    else if (action === 'cut') {
      if (await copyText(context.input.value.slice(context.start, context.end))) {
        context.input.setRangeText('', context.start, context.end, 'start');
        context.input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    } else if (action === 'paste') {
      try {
        const value = await navigator.clipboard.readText();
        context.input.setRangeText(value, context.start, context.end, 'end');
        context.input.dispatchEvent(new Event('input', { bubbles: true }));
      } catch { showNotice('menu_copy_failed'); }
    }
    else if (action === 'edit-bookmark' || action === 'move-bookmark') openBookmarkEditor(context.bid, action === 'move-bookmark');
    else if (action === 'pin' || action === 'unpin') { togglePin(context.url); showNotice(action === 'pin' ? 'bookmark_pinned' : 'bookmark_unpinned'); }
    else if (action === 'show-folder') { state.query = ''; searchEl.value = ''; searchEl.parentElement.classList.remove('has-query'); searchSuggestions.hidden = true; setView('folder:' + context.fid); }
    else if (action === 'hide-folder') { hideFolder(context.fid); showNotice('folder_hidden'); }
    else if (action === 'restore-folder') { restoreFolder(context.fid); showNotice('folder_restored'); }
    else if (action === 'search') focusSearch();
    else if (action === 'select-all') { context.input.focus(); context.input.select(); }
    else if (action === 'clear-search') { searchEl.value = ''; state.query = ''; searchSuggestions.hidden = true; searchEl.parentElement.classList.remove('has-query'); render(true); searchEl.focus(); }
    else if (action === 'all') { state.query = ''; searchEl.value = ''; searchEl.parentElement.classList.remove('has-query'); searchSuggestions.hidden = true; setView('all'); }
    else if (action === 'settings') { if ($('bookmarkEditor').open) $('bookmarkEditor').close(); openDrawer(); }
    else if (action === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
    else if (action === 'reload') location.reload();
  });
  document.addEventListener('pointerdown', (e) => { if (!linkMenu.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', (e) => {
    if (linkMenu.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const buttons = [...linkMenu.querySelectorAll('button')];
      const index = buttons.indexOf(document.activeElement);
      buttons[(index + (e.key === 'ArrowDown' ? 1 : buttons.length - 1)) % buttons.length]?.focus();
    }
  });
  window.addEventListener('scroll', closeMenu, { passive: true });

  undoButton.addEventListener('click', async () => {
    if (await undoRemovedBookmark()) return;
    if (!undoOrder) return;
    folderOrder = undoOrder;
    undoOrder = null;
    clearTimeout(undoTimer);
    undoToast.hidden = true;
    guardedSet({ folderOrder });
    render(true);
  });

  // 隐藏区：展开 / 恢复（拖入隐藏由 Pointer 拖拽模块处理）
  hiddenList.addEventListener('click', (e) => {
    const rb = e.target.closest('[data-restore-id]');
    if (rb) { e.stopPropagation(); restoreFolder(rb.dataset.restoreId); return; }
    const mini = e.target.closest('a.pill-mini');
    if (mini) { bumpCount(mini.dataset.url); return; }
    const hd = e.target.closest('.h-item');
    if (hd) {
      const wrap = hd.closest('.h-item-wrap');
      wrap.classList.toggle('expanded') ? expandedHidden.add(wrap.dataset.fid) : expandedHidden.delete(wrap.dataset.fid);
      saveLayoutMemory();
    }
  });

  // 卡片区：点击（药丸计数 / 展开 / 隐藏 / 子分组折叠）
  grid.addEventListener('click', (e) => {
    const pill = e.target.closest('a.pill');
    if (pill) { bumpCount(pill.dataset.url); return; }
    const tog = e.target.closest('[data-toggle-id]');
    if (tog) { toggleCardExpand(tog.dataset.toggleId); return; }
    const hide = e.target.closest('[data-hide-id]');
    if (hide) { hideFolder(hide.dataset.hideId); return; }
    const sub = e.target.closest('.sub-head');
    if (sub) {
      const sg = sub.closest('.subgroup');
      const fid = sg.dataset.sfid;
      animMove(grid, () => {
        const collapsed = sg.classList.toggle('collapsed');
        collapsed ? collapsedSubs.add(fid) : collapsedSubs.delete(fid);
        sub.setAttribute('aria-expanded', String(!collapsed));
      });
      saveLayoutMemory();
    }
  });

  // ===== Pointer 拖拽：卡片实时让位（手机桌面式，多列瀑布流） =====
  // 多列布局下 DOM 顺序 = 列序阅读顺序（列内自上而下，再下一列），
  // 命中判定：指针最近卡片 + y 上下决定插前/插后，滞回 + 节流防抖。
  // 注意：不能用 elementFromPoint + pointer-events:none 的方案——
  // pointer-events:none 会隐式释放指针捕获，真实拖拽会断流。
  let drag = null;
  // 原生 dragstart（拖 favicon/文字）会抢占事件流导致拖拽断流，拖拽中一律屏蔽
  window.addEventListener('dragstart', (e) => { if (drag?.active) e.preventDefault(); });
  grid.addEventListener('pointerdown', (e) => {
    if (drag) return;
    if (e.button !== 0) return;
    if (e.target.closest('a, button')) return; // 药丸/按钮照常点击，不发起拖拽
    if (state.view !== 'all' || state.query.trim() || !e.target.closest('.card-head')) return;
    const card = e.target.closest('.card');
    if (!card?.dataset.folderId) return;
    if (grid.querySelectorAll('.card[data-folder-id]').length < 2) return;
    e.preventDefault(); // 阻止文字选择/原生拖拽（链接和按钮已在前面排除，不受影响）
    const rect = card.getBoundingClientRect();
    drag = {
      card, id: e.pointerId,
      previousOrder: folderOrder.slice(),
      startX: e.clientX, startY: e.clientY,
      lastX: e.clientX, lastY: e.clientY,
      grabX: e.clientX - rect.left, grabY: e.clientY - rect.top,
      active: false, overHidden: false, frame: 0, lastMut: 0, tx: 0, ty: 0,
    };
    // grid 不会在排序时被重新挂载，指针捕获不会因移动 card 而丢失。
    try { grid.setPointerCapture(e.pointerId); } catch {}
    window.addEventListener('pointermove', onDragMove);
    window.addEventListener('pointerup', onDragEnd);
    window.addEventListener('pointercancel', onDragEnd);
  });

  function onDragMove(e) {
    if (!drag || e.pointerId !== drag.id) return;
    drag.lastX = e.clientX; drag.lastY = e.clientY;
    if (!drag.active) {
      if (Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) < 6) return;
      drag.active = true;
      document.body.classList.add('drag-active');
      springs.delete(drag.card);
      drag.card.classList.remove('springing');
      drag.card.style.transform = 'none';
      drag.card.classList.add('drag-lift');
    }
    if (!drag.frame) drag.frame = setTimeout(dragFrame, FRAME_MS);
  }

  function dragFrame() {
    if (!drag) return;
    drag.frame = 0;
    const { card, lastX, lastY } = drag;

    // 边缘自动滚动
    const vh = window.innerHeight;
    if (lastY < 76) window.scrollBy(0, -14);
    else if (lastY > vh - 76) window.scrollBy(0, 14);

    // 侧栏隐藏区判定（矩形包含）
    const sr = sidebar.getBoundingClientRect();
    const overHidden = lastX >= sr.left && lastX <= sr.right && lastY >= sr.top && lastY <= sr.bottom && sr.width > 0;
    drag.overHidden = overHidden;
    sidebar.classList.toggle('drag-target', overHidden);

    if (!overHidden && performance.now() - drag.lastMut > 90) {
      // 目标：全平面最近卡片中心（列序布局下阅读顺序与 DOM 顺序一致）
      const cards = [...grid.querySelectorAll('.card[data-folder-id]')].filter(c => c !== card);
      let target = null, bestD = Infinity;
      for (const c of cards) {
        const r = c.getBoundingClientRect();
        const dx = lastX - (r.left + r.width / 2), dy = lastY - (r.top + r.height / 2);
        const d = dx * dx + dy * dy;
        if (d < bestD) { bestD = d; target = c; }
      }
      if (target) {
        const r = target.getBoundingClientRect();
        const cy = r.top + r.height / 2;
        const before = lastY < cy;
        // 滞回：已在目标一侧且指针距中线 < 20px 时保持不动，防止边界抖动
        const alreadyAfter = card.previousElementSibling === target;
        const alreadyBefore = card.nextElementSibling === target;
        const hold = (alreadyAfter && before && cy - lastY < 20) ||
                     (alreadyBefore && !before && lastY - cy < 20);
        const neighbor = before ? target.previousElementSibling : target.nextElementSibling;
        if (!hold && neighbor !== card) {
          animMove(grid, () => {
            grid.insertBefore(card, before ? target : target.nextSibling);
          }, card);
          drag.lastMut = performance.now();
        }
      }
    }

    // 拖拽卡片直接跟随指针（补偿 DOM 移动带来的布局位移，滚动时保持吸附）
    card.style.transform = 'none';
    const rect = card.getBoundingClientRect();
    const tx = lastX - drag.grabX - rect.left;
    const ty = lastY - drag.grabY - rect.top;
    drag.tx = tx; drag.ty = ty;
    card.style.transform = `translate(${tx}px, ${ty}px)`;
  }

  function onDragEnd(e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (drag.active && e.type === 'pointerup') {
      drag.lastX = e.clientX; drag.lastY = e.clientY;
      dragFrame();
    }
    const d = drag; drag = null;
    window.removeEventListener('pointermove', onDragMove);
    window.removeEventListener('pointerup', onDragEnd);
    window.removeEventListener('pointercancel', onDragEnd);
    clearTimeout(d.frame);
    if (grid.hasPointerCapture(d.id)) grid.releasePointerCapture(d.id);
    sidebar.classList.remove('drag-target');
    document.body.classList.remove('drag-active');
    if (!d.active) return; // 未超过阈值 = 普通点击
    const card = d.card;
    card.classList.remove('drag-lift');
    if (e.type === 'pointercancel') { card.style.transform = ''; folderOrder = d.previousOrder; render(true); return; }
    if (d.overHidden) { card.style.transform = ''; hideFolder(card.dataset.folderId); return; }
    // 松手：从当前指针位置弹簧归位（带轻微回弹）
    springFrom(card, d.tx, d.ty);
    persistOrderFromDOM();
    if (d.previousOrder.join('\0') !== folderOrder.join('\0')) showOrderUndo(d.previousOrder);
  }

  // 搜索
  searchEl.addEventListener('input', () => {
    state.query = searchEl.value;
    searchEl.parentElement.classList.toggle('has-query', !!searchEl.value);
    render(true);
    showSuggestions();
  });
  searchEl.addEventListener('focus', showSuggestions);
  searchEl.addEventListener('blur', () => setTimeout(() => { searchSuggestions.hidden = true; }, 150));
  searchSuggestions.addEventListener('click', (e) => {
    const link = e.target.closest('a.suggestion');
    if (link) bumpCount(link.dataset.url);
  });
  searchEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveSuggestion(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveSuggestion(-1); }
    else if (e.key === 'Enter') {
      const items = [...searchSuggestions.querySelectorAll('a.suggestion')];
      if (items.length && !searchSuggestions.hidden) {
        e.preventDefault();
        items[suggestionIndex >= 0 ? suggestionIndex : 0].click();
      } else if (state.query.trim()) {
        e.preventDefault();
        location.href = webSearchUrl(state.query.trim());
      }
    }
    else if (e.key === 'Escape') {
      searchEl.value = ''; state.query = '';
      searchEl.parentElement.classList.remove('has-query');
      searchSuggestions.hidden = true;
      searchEl.blur(); render(true);
    }
  });
  document.addEventListener('keydown', (e) => {
    if ($('bookmarkEditor').open) return;
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); focusSearch(); }
    else if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) && !$('bookmarkEditor').open) { e.preventDefault(); focusSearch(); }
  });

  // 设置抽屉
  settingsBtn.addEventListener('click', openDrawer);
  backdrop.addEventListener('click', closeDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  langSelect.addEventListener('change', () => { applyLang(langSelect.value); localizeHTML(); saveAndFlash(); render(true); });
  themeSelect.addEventListener('change', () => { settings.theme = themeSelect.value; applyTheme(); saveAndFlash(); });
  densitySelect.addEventListener('change', () => { settings.density = densitySelect.value; applyDensity(); saveAndFlash(); });
  engineSelect.addEventListener('change', () => { settings.engine = engineSelect.value; saveAndFlash(); if (state.query.trim()) { render(true); showSuggestions(); } });
  searchOtherCb.addEventListener('change', () => { settings.searchOther = searchOtherCb.checked; saveAndFlash(); if (state.query.trim()) { render(true); showSuggestions(); } });
  showSecondsCb.addEventListener('change', () => { settings.showSeconds = showSecondsCb.checked; updateClock._init = false; saveAndFlash(); });
  clockRollCb.addEventListener('change', () => { settings.clockRoll = clockRollCb.checked; saveAndFlash(); });
  openNewTabCb.addEventListener('change', () => { settings.openInNewTab = openNewTabCb.checked; saveAndFlash(); });

  // 移动端侧栏
  navToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    sidebarBackdrop.classList.toggle('open', open);
  });
  sidebarBackdrop.addEventListener('click', closeSidebarMobile);

  // 回到顶部
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => { scrollTopBtn.classList.toggle('visible', window.scrollY > 400); ticking = false; });
    }
  }, { passive: true });
}

// ===== Helpers =====
function escapeHTML(s) { const m = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }; return String(s).replace(/[&<>"']/g, c => m[c]); }
function escapeAttr(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function linkTarget() { return settings.openInNewTab ? '_blank' : '_self'; }
function extractDomain(u) { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } }
