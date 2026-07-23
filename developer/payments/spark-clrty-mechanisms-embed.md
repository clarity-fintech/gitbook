# CLRTY Mechanisms — Spark Embed Integration

Load nano-monetization and checkout mechanisms inside host apps via the Spark embed bundle.

## Embed snippet

```html
<script src="https://pay.clarity-fintech.com/embed/spark-embed.js"></script>
<script>
  SparkPayEmbed.open({
    linkId: 'pay_lnk_…',
    mechanisms: ['CLRTY-M012', 'CLRTY-N001'], // optional CLRTY hooks
    onSuccess: (ev) => console.log(ev),
  });
</script>
```

## SDK

```javascript
import {
  runMechanism,
  listEmbedMechanisms,
  getMechanism,
  CLRTY_MECHANISM_COUNT,
} from '@clarity/spark-pay';

// Sub-cent LLM billing (CLRTY-N001)
await runMechanism('CLRTY-N001', { units: 1200, ratePerToken: 0.00005 });

// Auto-slippage rebate (CLRTY-M001)
await runMechanism('CLRTY-M001', { checkoutSessionId: 'sess_…' });
```

## Mechanism bands

| Band | IDs | Count | Doc |
|------|-----|-------|-----|
| Core | CLRTY-M001–M100 | 100 | `SPARK_CLRTY_MECHANISMS_100.md` |
| Nano | CLRTY-N001–N100 | 100 | `SPARK_CLRTY_NANO_MONETIZATION_100.md` |

## Verify

```bash
make spark-clrty-mechanisms-verify
```
