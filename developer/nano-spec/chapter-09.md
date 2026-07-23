---
nano_chapter: 9
items: 7
---

# 9. Cross-chain routing (89–95)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrty bridge status --dry-run
clrtynet helix status --plain
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
  -d '{"question":"Explain nano spec items 89-95","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 89 | Uses bridge contracts | `stub` | `CLRTY_SUBSTRATE/bridge_perimeter/ · L1-only launch defers live bridges` |
| 90 | External adapters connect DEX/CEX | `stub` | `Perimeter adapters · helix_engine venues` |
| 91 | MIRRA selects / adjusts optimal route | `partial` | `helix_engine/src/predictive_oracle.rs · market_model.rs · sim MIRRA book` |
| 92 | Routing criteria: liquidity, latency, cost | `roadmap` | `Multi-factor weights in pathfinding engine` |
| 93 | Atomic swap / wrapped assets | `roadmap` | `Bridge perimeter + Phase 10 FMA` |
| 94 | Settlement confirmed before final state | `partial` | `net_settlement.rs · substrate bridge snapshot` |
| 95 | Fallback route on failure | `roadmap` | `Pathfinding execute + residual re-route` |

## Nano §9 — developer console

{% hint style="info" %}
**Developer console**

9. Cross-chain routing (89–95)
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
# nano_89_95
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrty bridge status --dry-run
clrtynet helix status --plain
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
