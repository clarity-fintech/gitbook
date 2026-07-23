---
nano_chapter: 3
items: 15
---

# 3. Account data structure (26–40)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet wallet status --plain
clrtynet accounts status --plain
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
  -d '{"question":"Explain nano spec items 26-40","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 26 | Nonce prevents replay | `partial` | `nano_ledger/account.rs · nano_ledger/transaction.rs · RPC not fully enforcing yet` |
| 27 | Balance stored as integer (no float) | `live` | `nano_ledger/account.rs (balance: u128)` |
| 28 | `ccr_set` ∈ [1–99] | `live` | `nano_ledger/account.rs · entropy_sink_engine/ccr_orchestrator.rs · CLRTY_SUBSTRATE/sets/` |
| 29 | `risk_score` ∈ [0–1] | `live` | `nano_ledger/account.rs (validate_invariants)` |
| 30 | `permissions` = bitmask (routing tiers, etc.) | `partial` | `nano_ledger/account.rs (permissions: u64)` |
| 31 | Delegated stake tracked per validator | `stub` | `Account delegated_to · nano_ledger/validator.rs / stake machine` |
| 32 | Account hash = keccak(state) | `partial` | `nano_ledger/account.rs (account_hash)` |
| 33 | Accounts updated atomically | `stub` | `Target: MVM commit + nano state tree batch` |
| 34 | Contract accounts supported (optional) | `roadmap` | `MVM contract path deferred` |
| 35 | State changes require signature | `partial` | `nano_ledger/transaction.rs (ed25519) · token_core/blue_code/crypto_invariants.rs` |
| 36 | Account storage versioned | `partial` | `nano_ledger/account.rs (storage_version)` |
| 37 | Historical state accessible via root | `roadmap` | `Archive / light-client proofs` |
| 38 | Pruning enabled for old states | `roadmap` | `Ops backlog` |
| 39 | Hot vs cold state separation | `roadmap` | `Ops backlog` |
| 40 | Caching layer for fast reads | `stub` | `RPC/API caches; not Merkle-aware yet` |

## Nano §3 — developer console

{% hint style="info" %}
**Developer console**

3. Account data structure (26–40)
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
# nano_26_40
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet wallet status --plain
clrtynet accounts status --plain
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
