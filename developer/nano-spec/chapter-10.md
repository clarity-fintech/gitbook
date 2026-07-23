---
nano_chapter: 10
items: 5
---

# 10. Security + safety (96–100)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet sys health --plain
clrtynet node genesis-verify --plain
clrtynet rpc call getHealth '[]' --plain
```
{% endtab %}
{% tab title="Verify" %}
```bash
clrtynet sys health --plain
clrtynet node genesis-verify --plain
```
{% endtab %}
{% tab title="GitBook Ask" %}
```bash
curl -X POST "https://api.gitbook.com/v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"question":"Explain nano spec items 96-100","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 96 | Replay protection via nonce | `partial` | `Account/tx nonce fields; full RPC enforce stub` |
| 97 | Merkle proofs for verification | `stub` | `Sim merkle roots; inclusion proofs roadmap` |
| 98 | Slashing for malicious validators | `stub` | `slash_flag · PoC manifold` |
| 99 | Simulation prevents failed execution | `stub` | `clrty-rpc simulate handlers (HUD)` |
| 100 | Compliance layer blocks invalid tx | `partial` | `Compliance / VIS gates · pipeline compliance step` |

## Nano §10 — developer console

{% hint style="info" %}
**Developer console**

10. Security + safety (96–100)
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
POST https://rpc.clarity-fintech.com
{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}
```
{% endtab %}
{% tab title="MCP" %}
```bash
# nano_96_100
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet sys health --plain
clrtynet node genesis-verify --plain
clrtynet rpc call getHealth '[]' --plain
```
{% endtab %}
{% tab title="Client library" %}
```javascript
// See CLRTY_SUBSTRATE/nano_ledger/
import { nano } from '@clrty/sdk'
```
{% endtab %}
{% endtabs %}

{% expandable title="Protocol & organization selectors" %}
| Selector | Options |
| --- | --- |
| Protocol | HTTP · gRPC · WebSocket |
| Organization | CLRTY-1 Mainnet · Volkov Intelligence Systems |
| Endpoint | `https://rpc.clarity-fintech.com` |
{% endexpandable %}
