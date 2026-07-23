# Spark Pay API reference

Base URLs:

| Service | URL |
|---------|-----|
| CLRTY API | `https://api.clarity-fintech.com` |
| Exchange / off-ramp | `https://exchange.clarity-fintech.com` |
| Public RPC | `https://rpc.clarity-fintech.com` |

## Create payment

```http
POST /v1/payments/create
Content-Type: application/json

{
  "recipient": "clrty1merchant",
  "amount": 100,
  "token": "CLRTY",
  "label": "Order 42",
  "memo": "spark-pay"
}
```

## Fetch payment

```http
GET /v1/payments/:id
```

## Webhook (merchant)

```http
POST /v1/webhooks/payment-confirmed
```

Payload includes payment id, tx hash, and settlement attestation when L1 commit completes.

## Off-ramp session

```http
POST /v1/offramp/session
```

See [Off-ramp schema](off-ramp-no-kyc.md).

## Settlement backend (L1)

| Step | Endpoint / module |
|------|-------------------|
| Treasury check | `GET /v1/compliance/treasury` |
| Deposit confirm | `POST /v1/compliance/deposit/confirm` |
| Ledger commit | `commit_payment_to_register` (substrate) |

## SDK (JS)

```javascript
import { createPayment, fetchPayment, createOffRampSession } from '@clarity/spark-pay';

const payment = await createPayment({
  recipient: 'clrty1merchant',
  amount: 100,
  token: 'CLRTY',
});

const status = await fetchPayment(payment.id);
const offramp = await createOffRampSession({ token: 'CLRTY', amount: 100 });
```

## CortexPay (commerce)

Advanced checkout routing:

- `POST /v1/cortexpay/route`
- `POST /v1/cortexpay/checkout-plan`

See [CortexPay](../../../frontend/products/commerce/cortexpay.html) and `cortexpay_engine/`.
