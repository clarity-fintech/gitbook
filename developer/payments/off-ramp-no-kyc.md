# Off-ramp schema (no-KYC optimized)

Decentralized off-ramp system — **P2P + stablecoin-first**, partner rails when user opts in.

## Routing priority

1. **Decentralized** — P2P, USDC/USDT finalization, multi-DEX aggregation, cross-chain stable routing, MEV-safe private pools
2. **Optional partner** — card, gift card, bank (ACH/SEPA/SWIFT), mobile money, ATM, merchant network
3. **Enterprise** — payroll proxy, API-triggered batch payouts

## Feature catalog (Spark Pay spec)

### Wallet-native init (1–10)

Detect wallet → token standard → liquidity tier → Lens suggestions → off-ramp paths → simulate → fees → intent signature → local session → decentralized route first.

### Fiat conversion engine (21–30)

Token → stable (USDC/USDT) → fiat via banking rails; multi-currency FX; rate lock; instant vs delayed settlement; receipts.

### Global payment rails (31–40)

Bank transfer, card payout, mobile money, crypto debit settlement, instant partners, localized providers, wallet-to-wallet, stablecoin payout, batch payroll, enterprise API.

## API

```http
POST https://exchange.clarity-fintech.com/v1/offramp/session
Content-Type: application/json

{
  "schema": "spark_offramp/v1",
  "token": "CLRTY",
  "amount": "100",
  "region": "US",
  "preferKyc": "none"
}
```

Response includes ranked `paths` and `primary` rail id.

## SDK

```javascript
import { suggestOffRampPaths, buildOffRampSession, createOffRampSession } from '@clarity/spark-pay';

const paths = suggestOffRampPaths({ token: 'CLRTY', preferKyc: 'none' });
const session = buildOffRampSession({ amount: 100, region: 'US' });
const live = await createOffRampSession({ token: 'CLRTY', amount: 100 });
```

## UI entry points

- [exchange.clarity-fintech.com/sell](https://exchange.clarity-fintech.com/sell)
- [Spark Pay tool](https://www.clarity-fintech.com/tools/spark-pay.html)
- `claritypay://offramp?...` deep link

## Compliance note

No-KYC paths route through decentralized liquidity and optional partner KYC at rail selection. Institutional flows use attestation-gated settlement — see [AML/KYC program](../../institutional/compliance/aml-kyc-ctf-program.md).
