<div align="center">

<img src="extension/assets/logo.svg" width="76" height="76" alt="Nookmark logo" />

# Nookmark

### Start Here~ · 从这里启程～

**A little nook for everything you bookmark.**

Turn a new tab into a warm, personal starting point.

[简体中文](README.md) · [English](README.en.md)

[![Release](https://img.shields.io/github/v/release/QuasarG/nookmark?style=flat-square&color=b77848)](https://github.com/QuasarG/nookmark/releases/latest)
[![Chrome MV3](https://img.shields.io/badge/Chrome-Manifest_V3-8a9e72?style=flat-square&logo=googlechrome&logoColor=white)](manifest.json)
[![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-c9a351?style=flat-square&logo=javascript&logoColor=white)](extension/newtab.js)
[![License](https://img.shields.io/badge/License-Noncommercial_Source-927594?style=flat-square)](LICENSE)
[![Languages](https://img.shields.io/badge/Language-中文_%2F_English-7095a4?style=flat-square)](README.md)

[Download](https://github.com/QuasarG/nookmark/releases/latest) · [Installation](#-installation) · [Examples](#-everyday-examples) · [Report an issue](https://github.com/QuasarG/nookmark/issues)

</div>

![Nookmark brand banner](docs/images/banner.svg)

## ✨ A calmer home for your bookmarks

Nookmark is a Chrome new tab extension that turns your real bookmarks into soft, readable cards. Find a saved link, tidy your collection, choose a wallpaper, and start here.

`New tab` `Bookmark manager` `Instant search` `Custom wallpaper` `Bilingual` `Warm paper design`

## 🖼️ Preview

![Nookmark English light theme preview](docs/images/preview-en.png)

> Captured from the actual interface using generic design, development and learning bookmarks, without personal or school information. Bookmark titles keep their original language; UI labels follow your language setting. Headlines and the clock use bundled Glow Sans SC ExtraBold; body text uses Source Han Serif.

<details>
<summary>Chinese interface preview · 中文页面</summary>

![Nookmark Chinese preview](docs/images/preview-zh.png)

</details>

## 🧭 Features

| Feature | What it does |
| :-- | :-- |
| **Bookmark cards** | Browse folders and subfolders, remember expanded sections, and hide folders you do not need right now |
| **Instant search** | Find bookmarks as you type; use arrow keys and Enter, or search the web when nothing matches |
| **Search engines** | Google, Bing, Baidu, DuckDuckGo, Sogou and 360 Search, with a matching icon in the fallback prompt |
| **Pinned links & Top 5** | Keep essentials in a dedicated section and see your most clicked links from the last seven days |
| **Context menus** | Page, link, folder and search menus with actions such as open, copy, pin, edit and move |
| **Bookmark editing** | Change titles and URLs, or move bookmarks into folders, including empty ones; changes update Chrome bookmarks |
| **Duplicate check** | Compare complete URLs and show each copy's folder; confirm deletion and undo within eight seconds |
| **Drag to reorder** | Drag card headers, see spring motion as other cards move aside, and undo a saved order |
| **Wallpaper & palettes** | Upload a local image or choose a solid/gradient background; adjust brightness, blur, overlay and position |
| **Home layout** | Toggle and reorder sidebar modules, change card density, and use translucent cards |
| **Language & themes** | Chinese / English, light / dark / system theme, and configurable clock behavior |

**Editing, moving or deleting a bookmark changes your real Chrome bookmarks.** Card order, pinned links and click statistics are Nookmark preferences; they do not reorder Chrome's native bookmarks bar.

## 📦 Installation

Download from **[Releases](https://github.com/QuasarG/nookmark/releases/latest)**. `nookmark.crx` is the signed package; `nookmark.zip` contains the extension files.

### Option A: Load the ZIP · Desktop platforms

1. Download and extract `nookmark.zip`. Keep the extracted folder.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Click **Load unpacked** and select the folder containing `manifest.json`.
4. Open a new tab.

### Option B: Install the CRX · Linux Chrome

1. Download `nookmark.crx`.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Drag the CRX onto the extensions page and confirm installation.

Regular Chrome on Windows and macOS restricts off-store CRX installation. Use the ZIP workflow instead. See [Chrome's distribution documentation](https://developer.chrome.com/docs/extensions/how-to/distribute).

### Updates and migration

- **ZIP:** replace the extension files in the existing directory, then click **Reload** on the extensions page.
- **CRX:** install the newer CRX. Official packages reuse the signing key to retain the extension ID.
- An unpacked copy and the CRX may have different IDs. Pinned links and layout preferences do not automatically migrate between them.
- There is no automatic update service. Removing the extension may clear its local settings and wallpaper; keep the existing installation when updating.

## ⌨️ Everyday examples

### 01 / Find a bookmark

Type `GitHub`, select a result with `↓` / `↑`, and press `Enter` to open it. Press `Esc` to dismiss suggestions.

Choose Bing as your default engine, type `weather tomorrow`, and press `Enter` if no bookmark matches. The fallback prompt shows the Bing icon.

**中文范例：** 输入 `GitHub` → 方向键选择 → 回车打开。没有匹配时，回车使用默认引擎搜索网页。

### 02 / Keep essentials close

Right-click `GitHub` → **Pin link**. It appears in the dedicated pinned section. Right-click again to unpin.

**中文范例：** 右键链接 →「置顶链接」→ 在侧栏置顶区域快速访问。

### 03 / Tidy your collection

Right-click a bookmark to edit its title or URL, or move it to another folder. Drag a card header to reorder the page, then use **Undo** if needed.

**中文范例：** 右键书签编辑或移动；拖动卡片标题排序，误操作时点击撤销。

### 04 / Make it yours

Open Settings → **Background & Palette**, upload an image, and adjust blur and overlay. Choose a palette and translucent cards, then toggle the sidebar modules you want to see.

**中文范例：** 设置 →「背景与配色」→ 上传本地壁纸 → 调整遮罩与模糊 → 选择配色。

## 🎨 Design notes

**A carefully kept page of paper, with room for your next idea.**

| Element | Direction |
| :-- | :-- |
| **Identity** | A warm brown cover, a bookmark cutout and a dot representing a starting point |
| **Color** | Paper, sage, ocean and rose palettes, with soft borders and quiet contrast |
| **Typography** | Glow Sans SC ExtraBold for distinctive headlines; Source Han Serif for readable body text |
| **Layout** | Sidebar navigation, centered search and masonry bookmark cards |
| **Motion** | Fading menus, spring feedback when dragging, rolling clock digits and reduced-motion support |
| **Personalization** | Solid colors, dawn / forest / dusk gradients, local wallpaper and translucent cards |

The original logo lives in [logo.svg](extension/assets/logo.svg). The documentation banner is [docs/images/banner.svg](docs/images/banner.svg); both previews are real interface captures.

## 🔒 Data and permissions

Nookmark has no separate backend and does not upload wallpapers to a project server.

| Data / permission | Purpose |
| :-- | :-- |
| `bookmarks` | Read, edit, move and delete Chrome bookmarks |
| `storage` | Save appearance, layout, pinned links and click statistics |
| `favicon` | Display website icons for bookmarks |
| Local storage | Wallpaper, appearance details, expanded sections and click statistics |
| Chrome sync storage | Language, base theme, card order and pinned preferences, depending on Chrome sync settings |

Top 5 counts links opened through Nookmark, not your entire browsing history. Opening bookmarks or running web searches visits the corresponding websites; demo mode may request website favicons. Search engine prompt icons are bundled and work offline.

## 🛠️ Development

Plain HTML, CSS and JavaScript, using Manifest V3. No page build step is required.

```bash
git clone https://github.com/QuasarG/nookmark.git
cd nookmark
```

Load the repository through **Load unpacked** in Chrome. After changing source files, reload the extension.

### Browser tests

Requires Node.js and Playwright:

```bash
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node --test tests/browser.cjs
```

To use an existing Chrome installation instead of downloading a test browser:

```bash
CHROME_BIN=/path/to/chrome node --test tests/browser.cjs
```

Tests cover engine icons, wallpaper and module persistence, expanded sections, bookmark editing and moves, duplicate deletion and undo, narrow layouts and dragging. They use isolated browser profiles and demo bookmarks.

### Package CRX / ZIP

Requires Python 3 and Chrome:

```bash
python scripts/package.py
# Or specify a Chrome executable:
CHROME_BIN=/path/to/chrome python scripts/package.py
```

- Creates `dist/nookmark.crx` and `dist/nookmark.zip`, including runtime files, fonts and license notices.
- Keeps the private key in `.extension-signing/nookmark.pem`, excluded from Git and packages.
- Reuse the key to keep your CRX ID. A new personal key produces an ID different from the official package.
- Documentation, screenshots, tests and development files are excluded from packages.

### Repository map

```text
nookmark/
├── manifest.json             # Chrome extension manifest
├── README.md / README.en.md  # Project documentation
├── LICENSE                  # Project license
├── extension/               # Extension runtime
│   ├── newtab.html / css / js
│   ├── preferences.js
│   ├── assets/              # Logo, icons and engine identifiers
│   └── fonts/               # Bundled fonts and OFL notices
├── docs/                    # Previews and third-party notices
├── scripts/package.py       # CRX / ZIP packaging
├── tests/browser.cjs         # Browser checks
└── dist/                    # Local packages (Git-ignored)
```

## 📄 License and credits

The project uses the **[Nookmark Noncommercial Source License](LICENSE)**:

- Noncommercial use, modification and redistribution are permitted. Preserve notices and provide the corresponding editable source when redistributing.
- Commercial exploitation, closed-source redistribution, and uploading the project or derivatives to any extension/application store require the copyright holder's written permission.
- This is a **source-available license**, not an OSI-approved open-source license. The complete `LICENSE` text governs.

**Fonts retain their independent OFL 1.1 licenses.** Glow Sans comes from [Project Wêlai](https://github.com/welai/glow-sans); Source Han Serif comes from [Adobe](https://github.com/adobe-fonts/source-han-serif). Copyright and license notices accompany the bundled fonts. The Source Han Serif WOFF2 derivatives use the internal name Nookmark Serif. Search engine marks belong to their respective owners. See [third-party notices](docs/THIRD_PARTY_NOTICES.md).

---

<div align="center">

**Nookmark · Your world, bookmarked. Start here.**

[Download](https://github.com/QuasarG/nookmark/releases/latest) · [简体中文](README.md) · [Feedback](https://github.com/QuasarG/nookmark/issues)

</div>
