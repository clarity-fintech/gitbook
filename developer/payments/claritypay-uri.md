# claritypay:// URI reference

Custom deep-link schema handled by Spark Pay SDK and Clarity Wallet.

## Transfer request (simple)

```
claritypay://pay?recipient=<wallet>&amount=<amount>&token=<token>&label=<label>&memo=<memo>
```

| Param | Required | Description |
|-------|----------|-------------|
| `recipient` | yes | clrty-1 address or merchant id |
| `amount` | yes | Human-readable amount |
| `token` | no | Default `CLRTY` |
| `label` | no | Merchant / checkout label |
| `memo` | no | Payment reference |

## Transaction request (advanced)

```
claritypay://request?callback=<https_url>&recipient=<wallet>&amount=<amount>&token=<token>
```

Merchant `callback` returns dynamic transaction payload (JSON).

## Off-ramp

```
claritypay://offramp?token=CLRTY&amount=100&rail=stable&region=US
```

## HTTPS mirror (QR-safe)

Browsers and QR codes use HTTPS instead of custom scheme:

```
https://exchange.clarity-fintech.com/spark-pay?action=pay&recipient=...&amount=...&token=CLRTY
```

## JavaScript

```javascript
import { buildSparkPayUri, parseSparkPayUri, generateSparkPayCheckout } from '@clarity/spark-pay';

const uri = buildSparkPayUri('pay', {
  recipient: 'clrty1abc',
  amount: '50',
  token: 'CLRTY',
  label: 'Invoice #1042',
});

const parsed = parseSparkPayUri(uri);
const { deepLink, httpsUrl, qr } = generateSparkPayCheckout({
  recipient: 'clrty1abc',
  amount: 50,
});
```

## Wallet integration

Register handler alongside existing CLRTY schemes:

| Scheme | Purpose |
|--------|---------|
| `clrty://@` | Identity / wallet connect |
| `clrty://dx/` | DX primitives |
| `clrty://auth` | Auth flows |
| **`claritypay://`** | **Spark Pay payments + off-ramp** |

See [wallet_integration](https://github.com/clarity-fintech/wallet_integration) for mobile handlers.
