# From Solidity

| Solidity | MIS-ML |
|----------|--------|
| `contract` / `interface` / `library` | `module` |
| `function` | `outcome` |
| `require` / `revert` | `require` / `fail` |
| `event` | `signal` |
| OpenZeppelin | `languages/mis-ml/stdlib` |
| Foundry | `clrtyc` + `clrty.toml` |
| `.clrty` | `.clrty` |

Run:

```bash
python3 scripts/mis-ml/sol_to_clrty.py --root . --purge
```

Gold-standard hand rewrites: `ClrtFeeRouter.clrty`, `SplitGatewayRouter.clrty`.
