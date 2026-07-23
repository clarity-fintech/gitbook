---
nano_chapter: 7
items: 8
---

# 7. Staking data structures (73–80)

> Nano items in this chapter · [Index](README.md)

{% tabs %}
{% tab title="Terminal" %}
```bash
clrtynet node status --plain
clrtynet node registry --plain
clrtynet treasury balance --plain
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
  -d '{"question":"Explain nano spec items 73-80","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## All details

| # | Detail | Status | Code path |
| --- | --- | --- | --- |
| 73 | Validator selected by stake / PoC weight | `stub` | `poc_consensus/validator_manifold/ · balance_bonding.rs (3-line helper today)` |
| 74 | Delegation tracked in map | `stub` | `nano_ledger/validator.rs · stake state machine` |
| 75 | Rewards distributed per epoch | `roadmap` | `Tokenomics manifests; epoch machine not live` |
| 76 | Commission deducted first | `roadmap` | `Validator commission field` |
| 77 | Slashing reduces stake | `stub` | `slash_flag on Validator · enforcement roadmap` |
| 78 | Validator metadata stored on-chain | `stub` | `Registry JSON + nano Validator` |
| 79 | Epoch snapshot used for reward calc | `roadmap` | `Spec` |
| 80 | Stake locked during active epochs | `stub` | `Unbonding period in tokenomics docs; state machine stub` |

## Nano §7 — developer console

{% hint style="info" %}
**Developer console**

7. Staking data structures (73–80)
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
# nano_73_80
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet node status --plain
clrtynet node registry --plain
clrtynet treasury balance --plain
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
