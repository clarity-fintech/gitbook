# Spark Pay command matrix (Tasks 1601–2600)

Each engine step (1–200) maps to five operational subtasks in `scripts/spark_pay/steps/`.

## Make targets

| Target | Purpose |
|--------|---------|
| `make spark-pay-node-push` | Deploy spark_pay module on Cherry VDS |
| `make spark-pay-1501-1600` | UI + Cloudflare workers |
| `make spark-pay-1601-2600` | Run 1000-task verify matrix |
| `make spark-pay-verify` | Aggregate smoke |
| `make spark-pay-watchdog` | Origin + CF health |

## SDK `runCommand`

| Command | Step |
|---------|------|
| `node.mainnetStatus` | prerequisite |
| `spark.health` | API gate |
| `spark.parseUri` | 101 |
| `spark.verifyLink` | 103 |
| `spark.createLink` | 86–100 |
| `spark.startSession` | 101–120 |

## Error codes

`SPARK_E101_INVALID_URI` · `SPARK_E103_SIGNATURE_INVALID` · `SPARK_E194_LINK_EXPIRED` · `SPARK_E1601_NODE_UNREACHABLE`

Full registry: `packages/clarity_spark/src/errors.js`
