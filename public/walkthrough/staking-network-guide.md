# Staking & network integration — full guide

> Notion: [CLARITY Full Staking Blueprint](https://app.notion.com/p/3a15f7f81f9e81cb8cc1e458812d936a)

On Proof-of-Stake chains, **validators replace miners** and **stake tokens instead of compute**. CLRTY-1 uses PoC bonding of CLRTY (no PoW miners).

## Staking flow

```text
Wallet → Validator selection → Stake lock → CCR classification → Rewards + routing privileges
UNSTAKED → DELEGATED → LOCKED → ACTIVE → REWARD ACCRUAL → UNBONDING
```

**Reward sketch:**
```text
Total Reward = (E_base + E_execution + E_intelligence + E_liquidity) × CCR_multiplier
```

## Stake CLRTY

{% hint style="info" %}
**Developer console**

Lockup tiers: 30 / 90 / 365 / 730 days. CCR multiplier rises with holding time, entropy discipline, stake size.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
POST https://api.clrty-1.protocol/v1/v1/stake/create HTTP/1.1
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{ "amount": 1000, "validator": "<validator_pubkey>", "lockup_days": 90 }
```
{% endtab %}
{% tab title="MCP" %}
```bash
stake create --amount 1000 --validator <validator_pubkey> --lockup 90
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrty-cli stake create --amount 1000 --validator <validator_pubkey>
clrty-cli stake status --wallet <wallet>
clrty-cli stake withdraw --amount 500
```
{% endtab %}
{% tab title="Client library" %}
```javascript
import { stake } from '@clrty/sdk'
await stake.create({ amount: 1000n, validator: VALIDATOR_PUBKEY, lockupDays: 90 })
const status = await stake.status({ wallet: MY_WALLET })
```
{% endtab %}
{% endtabs %}

{% expandable title="Protocol & organization selectors" %}
| Selector | Options |
| --- | --- |
| Protocol | HTTP · gRPC · WebSocket |
| Organization | CLRTY-1 Mainnet · Volkov Intelligence Systems |
| Endpoint | `https://api.clrty-1.protocol/v1` |
{% endexpandable %}

## CCR tier benefits

| Tier | Benefit |
| --- | --- |
| Set 1–5 | Highest multiplier / priority routing |
| Set 6–20 | Reduced fees |
| Set 21–50 | Standard |
| Set 50+ | Baseline / discounted multiplier |

{% stepper %}
{% step %}
### Select validator

See [Validators & nodes](validators-and-nodes.md) for PoS primer.
{% endstep %}
{% step %}
### Create stake

`clrty-cli stake create --amount 1000 --validator <pubkey>`
{% endstep %}
{% step %}
### Monitor status

`clrty-cli stake status --wallet <wallet>`
{% endstep %}
{% step %}
### Withdraw (after unbonding)

`clrty-cli stake withdraw --amount 500`
{% endstep %}
{% endstepper %}

Related: [RPC setup guide](rpc-setup-guide.md) · [HELIX / MIRRA](helix-mirra-integration.md)
