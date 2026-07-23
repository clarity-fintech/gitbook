# Spark Pay Architecture 301–900 (NO AWS)

Spark Pay platform expansion beyond the 200-step payment engine: ledger, fraud, ISO 20022, streaming analytics, zero-trust, webhooks, AML, matching engine, ZK, AI treasury, consensus, and HSM — **without any AWS services**.

## Policy

All AWS references in the original spec are replaced:

| Forbidden | Replacement |
|-----------|-------------|
| AWS KMS / Cloud HSM | HashiCorp Vault + SoftHSM on Cherry VDS |
| Nitro Enclaves | SGX/SEV on bare metal |
| S3 / SQS / Lambda | R2, Redis Streams, Cloudflare Queues |
| Route53 / AWS WAF | Cloudflare DNS + WAF |

## Docs

- Launch: `docs/launch/SPARK_PAY_301_900.md`
- Tool matrix: `packages/clarity_spark/docs/TOOL_STACK_NO_AWS.md`
- SDK phases: `@clarity/spark-pay` → `ARCH_PHASES`, `getArchPhase()`

## Install (Cherry VDS)

```bash
make spark-pay-tools-install VPS=root@clarity-vds
make spark-pay-301-900-verify
```

## Phase index

601–625 Ledger · 626–650 Fraud · 651–675 DR · 676–700 ISO 20022 · 701–725 Analytics · 726–750 Zero-trust · 751–775 SDK · 776–800 AML · 301–400 Subscriptions · 501–600 Clearing · 801–820 Matching · 821–840 ZK · 841–860 Treasury · 861–880 Consensus · 881–900 HSM
