# CLRTY-1 contract modules (`.mis` catalog)

> **Moniversive Invariant Static only — no Solidity source of truth.** Author and verify **`*.mis`** with **`bin/misc`**; we do not maintain canonical Solidity or Foundry trees for CLRTY-1.

Moniversive GitBook cross-link for **chain 1202** settlement modules. The CLRTY-1 product book owns narrative; this hub indexes **authoring paths**.

| Doc | Link |
| --- | --- |
| CLRTY-1 module deep dive | [clrty-1/README.md](clrty-1/README.md) |
| CLRTY-1 smart contracts (primary) | [../../clrty-1/contracts/README.md](../../clrty-1/contracts/README.md) |
| Module table | [../../clrty-1/contracts/catalog.md](../../clrty-1/contracts/catalog.md) |
| Spec + runtime hooks | [../../clrty-1/contracts/verification-hooks.md](../../clrty-1/contracts/verification-hooks.md) |

## Source tree (repo)

All canonical samples:

```
moniversive/contracts/
  MisClrty1ContractsIndex.mis
  MisClrty1Treasury.mis
  MisProtocolFeeCollector.mis
  MisSplitGatewayRouter.mis
  MisClrtFeeRouter.mis
  MisStrataBridgeHooks.mis
  bridge/
    MisFmaBridgePerimeterIndex.mis
    MisClrtyImmutableToken.mis
    … (FMA bridge perimeter — see clrty-1/contracts/catalog.md)
```

Policy: **no Solidity authoring** for CLRTY-1 (`no_solidity_authoring` invariant on the index module). Legacy `.clrty` surfaces in `languages/mis-ml/surfaces/` are migration archives only — new contract work is **`.mis` only**.

## Related language docs

- [Full language breakdown](../language/full-language-breakdown.md)
- [Extension map](../migration/extensions.md)
- [Kernel swap demo](../examples/kernel-swap-to-mis.md)
