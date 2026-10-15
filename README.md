# Share via Telegram (URL only)

Chrome extension that shares the current page, a link, or an image to Telegram — **URL only**, with no page title and no trailing `/`.

Modified from [Share via Telegram 1.16](https://chromewebstore.google.com/detail/phhmllhhondgbkaifcompghkadamdanc).

## Changes from the original

- Shares just the URL; the `text` (page title / "Check this link") is dropped.
- Trailing slashes are stripped: `https://x.com/` → `https://x.com`.
- Removed "Share Text via Telegram" (without text it duplicated "Share Page").
- Removed `update_url`, so the Web Store can't overwrite it.

## Usage

- Click the toolbar icon to share the current page.
- Right-click a page, link, or image → **Share … via Telegram**.

It opens `https://t.me/share/url?url=…`, which hands off to Telegram Desktop, and closes that tab after 2 seconds.

## Install

1. Clone this repo.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Click **Load unpacked** and select the repo folder.

Permissions: `tabs` (read the current URL) and `contextMenus`. No network requests, no content scripts.
