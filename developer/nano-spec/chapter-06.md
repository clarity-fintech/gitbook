---
nano_chapter: 6
items: 7
---

# 6. CCR engine (66–72)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet rpc overview --plain
clrtynet token info --plain
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
  -d '{"question":"Explain nano spec items 66-72","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 66 | CCR = continuous classification system | `live` | `CLRTY_SUBSTRATE/entropy_sink_engine/ccr_orchestrator.rs` |
| 67 | Input signals: holding duration, tx frequency, volume entropy | `partial` | `entropy_sink_engine/set_dynamics/ · tensor / policy modules` |
| 68 | Output = `ccr_set` | `live` | `Orchestrator + sets/ · account field` |
| 69 | CCR recalculated per block / transfer | `partial` | `Transfer path in ccr_orchestrator · block-cadence roadmap` |
| 70 | Stored in account state | `partial` | `nano_ledger/account.rs (ccr_set, ccr_score)` |
| 71 | Affects fees + routing priority | `partial` | `Fee deflection + HELIX CCR priority hooks` |
| 72 | Low CCR → throttling | `partial` | `Adaptive policy / fee scaler paths` |

## Nano §6 — developer console

{% hint style="info" %}
**Developer console**

6. CCR engine (66–72)
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
# nano_66_72
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet rpc overview --plain
clrtynet token info --plain
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
