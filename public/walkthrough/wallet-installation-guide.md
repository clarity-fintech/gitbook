# Wallet installation — web, SDK & hardware

> Notion: [Wallet Integration](https://app.notion.com/p/39e5f7f81f9e81598df6d4314d5cf7a8) · [Hardware Wallets](https://app.notion.com/p/39e5f7f81f9e8100be19c4151ebe116f)

{% stepper %}
{% step %}
### Web wallet (fastest)

1. Open [https://exchange.clarity-fintech.com/exchange/wallet-app.html](https://exchange.clarity-fintech.com/exchange/wallet-app.html)
2. Login at [https://exchange.clarity-fintech.com/login](https://exchange.clarity-fintech.com/login)
3. Create or import wallet from recovery phrase
{% endstep %}
{% step %}
### Partner SDK install

```bash
git clone https://github.com/clarity-fintech/wallet_integration.git
cd wallet_integration
npm install
npm run build
```
{% endstep %}
{% step %}
### JavaScript SDK

```bash
npm install @clrty/sdk
```

```javascript
import { createWallet } from '@clrty/sdk'
const wallet = await createWallet({ network: 'clrty-1' })
console.log(wallet.address)
```
{% endstep %}
{% step %}
### Hardware wallet

```javascript
import { connectHardwareWallet } from '@wallet-core/hardwareWallet'
const session = await connectHardwareWallet('ledger')
```
{% endstep %}
{% step %}
### Chrome extension

See [Chrome extension guide](chrome-extension-guide.md) for unpacked load + exchange tab dock.
{% endstep %}
{% endstepper %}

## Wallet session bridge

{% hint style="info" %}
**Developer console**

Exchange session token powers extension popup, side panel, and in-page provider.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
POST /v1/auth/session HTTP/1.1
Host: api.clarity-fintech.com
# Returns Bearer token for wallet + trading APIs
```
{% endtab %}
{% tab title="MCP" %}
```bash
wallet connect --surface extension
```
{% endtab %}
{% tab title="CLI" %}
```bash
# Extension stores session in chrome.storage.local
# Key: clrty_session
```
{% endtab %}
{% tab title="Client library" %}
```javascript
import { WalletApp } from '@clrty/wallet'
const app = new WalletApp({ rpc: 'https://rpc.clarity-fintech.com' })
await app.connect()
```
{% endtab %}
{% endtabs %}

{% expandable title="Protocol & organization selectors" %}
| Selector | Options |
| --- | --- |
| Protocol | HTTP · gRPC · WebSocket |
| Organization | CLRTY-1 Mainnet · Volkov Intelligence Systems |
| Endpoint | `https://api.clarity-fintech.com` |
{% endexpandable %}

Product page: [clarity-fintech.com/clrty-wallet](https://www.clarity-fintech.com/clrty-wallet)
