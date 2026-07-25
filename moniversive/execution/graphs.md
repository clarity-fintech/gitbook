# Execution graphs

Graphs are deterministic JSON artifacts:

```json
{
  "schema": "clrty.mis_ml.execution_graph/v1",
  "module": "ClrtFeeRouter",
  "settlement_chain_id": 1202,
  "invariants": [{ "id": "fee_bps_cap", "expr": "fee_bps <= 10000" }],
  "outcomes": [{ "name": "execute", "requires": [], "constraints": [] }]
}
```

Wallet, Spark, RPC companies, and monetization loops **invoke outcomes by graph id**, not Solidity selectors.
