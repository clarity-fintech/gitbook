# Chrome extension — install & full walkthrough

> Clarity Wallet browser extension v0.1.5 · Mini-Exchange in popup + exchange tab dock

{% stepper %}
{% step %}
### Build from monorepo

```bash
git clone https://github.com/clarity-fintech/fintauo.git
cd fintauo
npm run pack:extension
# Output: clrty-wallet-extension.zip + packages/browser-extension/dist/
```
{% endstep %}
{% step %}
### Load unpacked in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `dist` folder (or synced `clarity-wallet/downloads/browser-extension`)
5. Pin **Clarity Wallet** to toolbar
{% endstep %}
{% step %}
### Sign in

1. Click extension icon → **Profile** → **Login**
2. Or open [https://exchange.clarity-fintech.com/login](https://exchange.clarity-fintech.com/login) — session syncs to extension
{% endstep %}
{% step %}
### Use Mini-Exchange

Popup tabs: **Home · Portfolio · Markets · Trade · Profile**
- **Home**: quick actions (Swap, Trade, Analytics)
- **Markets**: search (⌘K) + trade routing
- **Trade**: CLOB order entry
- **Full**: opens dedicated wallet tab
- **Panel**: opens Chrome side panel
{% endstep %}
{% step %}
### Exchange tab dock

On `exchange.clarity-fintech.com`, a floating **Clarity Wallet** pill injects in-page provider + quick launch.
{% endstep %}
{% endstepper %}

## Terminal commands (copy-paste)

{% tabs %}
{% tab title="Build" %}
```bash
cd external/clarity-fintech/fintauo
npm run pack:extension
```
{% endtab %}
{% tab title="Sync downloads" %}
```bash
cp -R packages/browser-extension/dist \
  clarity-wallet/downloads/browser-extension
cp clrty-wallet-extension.zip \
  clarity-wallet/downloads/clrty-wallet-extension.zip
```
{% endtab %}
{% tab title="Verify manifest" %}
```bash
node -p "require('./packages/browser-extension/dist/manifest.json').version"
# Expected: 0.1.5
```
{% endtab %}
{% tab title="Reload" %}
```bash
# In Chrome: chrome://extensions → Reload on Clarity Wallet
```
{% endtab %}
{% endtabs %}

## Extension messaging API

{% hint style="info" %}
**Developer console**

Background service worker handles OPEN_FULL_WALLET, OPEN_SIDE_PANEL, GET_SESSION, WS_SUBSCRIBE.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
// content-script → background
chrome.runtime.sendMessage({ type: 'OPEN_FULL_WALLET' })
chrome.runtime.sendMessage({ type: 'GET_SESSION' })
```
{% endtab %}
{% tab title="MCP" %}
```bash
# In-page provider (exchange tab)
window.clarity.request({ method: 'eth_accounts' })
```
{% endtab %}
{% tab title="CLI" %}
```bash
# N/A — use Chrome DevTools → Extension service worker console
```
{% endtab %}
{% tab title="Client library" %}
```javascript
import { sendBg } from './shared/messaging'
const session = await sendBg({ type: 'GET_SESSION' })
```
{% endtab %}
{% endtabs %}

{% expandable title="Protocol & organization selectors" %}
| Selector | Options |
| --- | --- |
| Protocol | HTTP · gRPC · WebSocket |
| Organization | CLRTY-1 Mainnet · Volkov Intelligence Systems |
| Endpoint | `chrome-extension://<id>/` |
{% endexpandable %}

Web fallback: [https://exchange.clarity-fintech.com/exchange/wallet-app.html](https://exchange.clarity-fintech.com/exchange/wallet-app.html)
