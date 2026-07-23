---
nano_chapter: 2
items: 10
---

# 2. State tree (16–25)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet rpc call getSlot '[]' --plain
clrtynet node status --plain
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
  -d '{"question":"Explain nano spec items 16-25","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 16 | CLRTY uses Merkle/Patricia-like state tree | `stub` | `Target: CLRTY_SUBSTRATE/nano_ledger/state_tree.rs (skeleton)` |
| 17 | Leaves = account objects | `stub` | `nano_ledger/account.rs + state_tree.rs` |
| 18 | Key = address hash | `stub` | `nano_ledger/state_tree.rs` |
| 19 | Value = serialized account struct | `partial` | `nano_ledger/account.rs (serde)` |
| 20 | Root = global state commitment | `partial` | `Block header state_root; mvm_execution/processing_pipeline/deterministic_committer.rs` |
| 21 | Inclusion proofs = O(log n) | `roadmap` | `nano_ledger/state_tree.rs (InclusionProof)` |
| 22 | Tree updated per transaction batch | `stub` | `Sim batch roots in state_space; trie update roadmap` |
| 23 | Separate subtrees: balances / staking / CCR | `roadmap` | `Spec only; CCR live in account + orchestrator` |
| 24 | Optional: Verkle upgrade for compression | `roadmap` | `Explicit backlog (out of nano Phase 2)` |
| 25 | State root stored in block header | `partial` | `simulators/state_space/src/chain/mod.rs · nano_ledger/block.rs` |

## Nano §2 — developer console

{% hint style="info" %}
**Developer console**

2. State tree (16–25)
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
# nano_16_25
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet rpc call getSlot '[]' --plain
clrtynet node status --plain
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
