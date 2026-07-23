# Spark Pay (Clarity Pay Application Layer)

Spark Pay is the universal payment URL layer for CLRTY — expanded from Solana Pay with **no-KYC off-ramp routing**, wallet-native init, and institutional API hooks.

## In this section

* [Platform command index (all surfaces)](../operations/clrty-command-index.md)
* [Overview](spark-pay-overview.md)
* [Usage & commands (tested)](spark-usage-commands.md)
* [claritypay:// URI reference](claritypay-uri.md)
* [Off-ramp schema (no-KYC optimized)](off-ramp-no-kyc.md)
* [API reference](api-reference.md)
* [All sections — full cross-link index](all-sections.md)
* [Segment map — GitBook ↔ website ↔ GitHub](segment-map.md)

## Quick links

| Resource | URL |
|----------|-----|
| Spark Pay tool | [clarity-fintech.com/tools/spark-pay.html](https://www.clarity-fintech.com/tools/spark-pay.html) |
| SDK repo | [github.com/clarity-fintech/clarity_spark](https://github.com/clarity-fintech/clarity_spark) |
| Exchange checkout | [exchange.clarity-fintech.com/spark-pay](https://exchange.clarity-fintech.com/spark-pay) |
| CLARITY PAY (settlement) | [tools/clarity-pay](https://www.clarity-fintech.com/tools/clarity-pay.html) |
| GitBook org site | [app.gitbook.com — Clarity site_Utrrz](https://app.gitbook.com/o/Yuash1ualCkP03YzJ8ts/sites/site_Utrrz) |

## Install SDK

```bash
npm install @clarity/spark-pay
```

```javascript
import { generateSparkPayCheckout } from '@clarity/spark-pay';

const { deepLink, httpsUrl, qr } = generateSparkPayCheckout({
  recipient: 'clrty1merchant',
  amount: 100,
  token: 'CLRTY',
});
```
