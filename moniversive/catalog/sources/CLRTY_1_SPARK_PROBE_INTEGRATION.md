# GitBook moniversive catalog source — CLRTY-1 × SPARK $0.01 Probe + Auto-Refund

## Module

`CLRTY_SPARK_PROBE_INTEGRATION`  
Path: `moniversive/payments/spark_mis/CLRTY_1_SPARK_PROBE_INTEGRATION.mis`  
Boot SSOT: `CLRTY_SUBSTRATE/boot/clarity_spark_probe_auto_refund.json`

## Flow

Authorize `$0.01` → optional capture → verify → instant refund → ledger net `$0.00` → rail ACTIVE

## Endpoints

- `POST /v1/spark/rails/probe`
- `POST /v1/rails/probe`

## Webhooks

`probe.started` · `probe.completed` · `probe.refunded` · `probe.failed`

## CLI

```bash
pay rails probe --amount 0.01 --refund
pay rails monitor --probe --auto-refund
pay rails status
```

## SQL

Tables: `spark_probe_events`, `spark_rail_activations`  
Schema: `clrty-1/database/spark_probe_schema.sql`

## Descriptor

`CLRTY VERIFY $0.01 (REFUNDED)`

## Tagline

Test before trust. Refund before impact.  
**CLRTY-1 × SPARK (PAY)** — Verified. Refunded. Activated.
