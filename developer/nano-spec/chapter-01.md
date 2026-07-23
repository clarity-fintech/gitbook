---
nano_chapter: 1
items: 15
---

# 1. Core ledger structure (1–15)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet node genesis-verify --plain
clrtynet rpc overview --plain
cargo test -p nano_ledger -- --nocapture
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
  -d '{"question":"Explain nano spec items 1-15","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 1 | Chain = append-only block list (hash-linked) | `partial` | `simulators/state_space/src/chain/mod.rs · CLRTY_SUBSTRATE/nano_ledger/block.rs` |
| 2 | Each block references `previous_block_hash` / `parent_hash` | `partial` | `simulators/state_space/src/chain/mod.rs (BlockHeader.parent_hash) · nano_ledger/block.rs` |
| 3 | Block hash = deterministic hash(header) | `partial` | `simulators/state_space/src/chain/mod.rs · nano_ledger/block.rs` |
| 4 | Header includes: `version`, `timestamp`, `proposer`, `state_root`, `tx_root` | `partial` | `Sim header has parent_hash/state_root/nonce/timestamp; nano header targets full field set in nano_ledger/block.rs` |
| 5 | Body = ordered transaction list | `partial` | `simulators/state_space/src/chain/mod.rs (Block.transactions)` |
| 6 | Blocks are signed by validator (PoS industry model; CLRTY = PoC bonding) | `stub` | `CLRTY_SUBSTRATE/poc_consensus/ · validator signature field on nano Block` |
| 7 | Finality via validator quorum | `stub` | `CLRTY_SUBSTRATE/poc_consensus/ · docs/chain/clrty-1.md §2` |
| 8 | Fork choice = stake-weighted / PoC-weighted consensus | `stub` | `CLRTY_SUBSTRATE/poc_consensus/validator_manifold/` |
| 9 | State = global account map (account model) | `partial` | `CLRTY_SUBSTRATE/nano_ledger/account.rs · sim transfers in state_space` |
| 10 | State stored as key-value trie (Merkle-based) | `stub` | `Flat state_root.bin today; trie target nano_ledger/state_tree.rs` |
| 11 | Every state transition updates root hash | `partial` | `simulators/state_space/src/chain/mod.rs (calculate_state_root) · CLRTY_SUBSTRATE/sanity/proof_of_sanity.rs` |
| 12 | Immutability enforced via hash chaining | `partial` | `simulators/state_space/src/chain/mod.rs · CLRTY_SUBSTRATE/sanity/` |
| 13 | Nodes verify block independently | `stub` | `simulators/state_space/src/chain/mod.rs (validate_block) · production P2P external` |
| 14 | Ledger = canonical state snapshot + history | `partial` | `Genesis: CLRTY_SUBSTRATE/boot/genesis_entropy.json · sim chain history` |
| 15 | Light clients verify via Merkle proofs | `roadmap` | `Inclusion proof API target: nano_ledger/state_tree.rs` |

## Nano §1 — developer console

{% hint style="info" %}
**Developer console**

1. Core ledger structure (1–15)
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
# nano_1_15
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet node genesis-verify --plain
clrtynet rpc overview --plain
cargo test -p nano_ledger -- --nocapture
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
