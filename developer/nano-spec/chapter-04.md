---
nano_chapter: 4
items: 15
---

# 4. Transaction structure (41–55)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet tx status --plain
clrtynet tx build --dry-run
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
  -d '{"question":"Explain nano spec items 41-55","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 41 | Signed using ed25519 | `partial` | `nano_ledger/transaction.rs · token_core/blue_code/crypto_invariants.rs` |
| 42 | Signature verifies ownership | `partial` | `SignedTransaction::verify` |
| 43 | Nonce must match account | `stub` | `Pipeline step target: nano_ledger/rpc_pipeline.rs` |
| 44 | Fee deducted before execution | `partial` | `entropy_sink_engine/ fee deflection · full nano fee deduct stub` |
| 45 | Data field = contract / routing info | `partial` | `Transaction.data` |
| 46 | `ccr_hint` used for fast routing | `partial` | `Transaction.ccr_hint · CCR orchestrator` |
| 47 | `route_hint` = internal / external / auto | `partial` | `RouteHint enum in nano_ledger/transaction.rs` |
| 48 | `compliance_proof` required for execution | `stub` | `Field present; RPC compliance gate thin` |
| 49 | Transactions hashed → `tx_id` | `partial` | `Transaction::tx_id` |
| 50 | Added to mempool after validation | `stub` | `Production mempool not live; sim queue only` |
| 51 | Mempool sorted by priority (CCR + fee) | `roadmap` | `Spec; CCR priority exists in HELIX matching` |
| 52 | Duplicate tx rejected | `stub` | `Target: pipeline + mempool` |
| 53 | Expiry timestamp / slot optional | `partial` | `Transaction.expiry_slot` |
| 54 | Batchable flag for HELIX | `partial` | `Transaction.batchable · helix_engine/matching_grid.rs` |
| 55 | Deterministic serialization required | `partial` | `Transaction::canonical_bytes` |

## Nano §4 — developer console

{% hint style="info" %}
**Developer console**

4. Transaction structure (41–55)
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
# nano_41_55
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet tx status --plain
clrtynet tx build --dry-run
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
