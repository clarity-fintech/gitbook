---
nano_chapter: 8
items: 8
---

# 8. HELIX (internal routing) (81–88)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet helix status --plain
curl -sS -X POST "$CLRTY_L1_RPC" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"routeTx","params":[{"tx":"...","mode":"private"}]}'
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
  -d '{"question":"Explain nano spec items 81-88","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 81 | Maintains internal order book | `live` | `helix_engine/src/matching_grid.rs` |
| 82 | Uses liquidity graph (nodes = assets) | `partial` | `helix_engine/src/liquidity_graph.rs (BFS weight_bps); upgrade → helix_engine/src/pathfinding/` |
| 83 | Edge weights = price + slippage (+ multi-factor) | `partial` | `helix_engine/src/pathfinding/edge.rs` |
| 84 | Supports batch matching | `partial` | `matching_grid.rs · kernel.rs` |
| 85 | Netting reduces settlement load | `live` | `helix_engine/src/net_settlement.rs` |
| 86 | Priority given to high CCR users | `partial` | `Intent/kernel hooks; full mempool sort roadmap` |
| 87 | Internal matching avoids MEV | `partial` | `Dark matching grid / shadow book` |
| 88 | Partial fills supported | `partial` | `MatchResult / order placement in matching_grid.rs` |

## Nano §8 — developer console

{% hint style="info" %}
**Developer console**

8. HELIX (internal routing) (81–88)
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
# nano_81_88
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet helix status --plain
curl -sS -X POST "$CLRTY_L1_RPC" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"routeTx","params":[{"tx":"...","mode":"private"}]}'
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
