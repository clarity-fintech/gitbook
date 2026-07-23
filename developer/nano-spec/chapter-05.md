---
nano_chapter: 5
items: 10
---

# 5. RPC internal flow (56–65)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet rpc methods --plain
clrtynet rpc call getHealth '[]' --plain
curl -sS -X POST "$CLRTY_L1_RPC" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"simulateTx","params":[{"tx":"<signed_tx>"}]}'
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
  -d '{"question":"Explain nano spec items 56-65","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 56 | RPC receives raw tx | `partial` | `clrty-rpc/src/lib.rs · clrty-api/` |
| 57 | Deserialize + schema check | `stub` | `HUD/schema stubs in clrty-rpc` |
| 58 | Signature verification | `stub` | `Nano types ready; RPC not fully wired` |
| 59 | Fetch account state | `stub` | `No Patricia account store yet` |
| 60 | Validate nonce + balance | `stub` | `Pipeline trait target` |
| 61 | Query CCR engine | `partial` | `entropy_sink_engine/ccr_orchestrator.rs · mvm_execution/processing_pipeline/incoming_tx_validator.rs` |
| 62 | Run compliance checks | `partial` | `Compliance reports under compliance/ · VIS docs` |
| 63 | Simulate execution | `stub` | `clrty-rpc simulate_transaction returns simulated ok` |
| 64 | Call routing engine | `stub` | `HELIX kernel + future helix_engine/src/pathfinding/` |
| 65 | Submit to validator queue | `stub` | `PoC validator manifold stubs` |

## Nano §5 — developer console

{% hint style="info" %}
**Developer console**

5. RPC internal flow (56–65)
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
# nano_56_65
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet rpc methods --plain
clrtynet rpc call getHealth '[]' --plain
curl -sS -X POST "$CLRTY_L1_RPC" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"simulateTx","params":[{"tx":"<signed_tx>"}]}'
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
