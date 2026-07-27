# CLRTY-1 settlement modules (`.mis` only)

> **Moniversive Invariant Static only — no Solidity source of truth.** CLRTY-1 does not author Solidity sources, pragma solidity, or Foundry/OZ trees. Canonical contract intent lives in `moniversive/contracts/*.mis` and is checked with **`bin/misc`**.

| Doc | Link |
| --- | --- |
| Product book (primary narrative) | [../../../clrty-1/contracts/README.md](../../../clrty-1/contracts/README.md) |
| Module table | [../../../clrty-1/contracts/catalog.md](../../../clrty-1/contracts/catalog.md) |
| Spec ↔ runtime hooks | [../../../clrty-1/contracts/verification-hooks.md](../../../clrty-1/contracts/verification-hooks.md) |
| Language reference | [../../language/full-language-breakdown.md](../../language/full-language-breakdown.md) · [CLRTY-1 settlement modules](../../language/full-language-breakdown.md#clrty-1-settlement-modules-chain-1202) |

## Settlement binding

| Field | Value |
| --- | --- |
| Network | `clrty-1` |
| Chain id | **1202** |
| Treasury label | `treasury:clrty-1` |
| Fiat onramp | **Spark** (`clarity_spark`) — not legacy foreign onramp |
| Compiler kernel | **`misc`** only |

## Module responsibilities

### `MisClrty1ContractsIndex.mis`

Catalog resolver; enforces `no_solidity_authoring`, `compiler_kernel == misc`, and paths to treasury, fee collector, split gateway, L01 tax router, bridge hooks, and `MisSparkCustomRules`.

### `MisClrty1Treasury.mis`

Operational treasury sink: `treasury_route_label == treasury_clrty_1`, SIWE-gated treasury API, `attach_settle_route` attaches `mis_ml_module` and `clrty_route → treasury:clrty-1`. **`eth_safe_intake_enabled == false`**.

### `MisSparkCustomRules.mis` (framework)

100% operational invariants when product policy applies:

- `operational_treasury_route_pct == 100` · `treasury_sink == clrty_1_operational`
- `onramp_provider == clarity_spark` · `onramp_provider != foreign_onramp_banned`
- `verify_dual_endpoint_balance` — drift **0** ppm, quorum **2**
- FX TTL **3000** ms, Spark charge UUID v4 idempotency

Runtime mirror (names only): `external/clarity-fintech/fintauo/packages/exchange-app/src/invariants/misCustomRules.ts`.

### `MisProtocolFeeCollector.mis` · `MisSplitGatewayRouter.mis`

Product fee lane: pool deposits → threshold `route_fees` intent → default **50/50** bps split with Spark provider guard. Custom rules may force **100%** to `treasury:clrty-1`.

### `MisClrtFeeRouter.mis`

L01 execution tax **400 bps** → `tax_sink == treasury_clrty_1` (separate from product split).

### `MisStrataBridgeHooks.mis`

Chain **1202** bridge perimeter: dual-attested receipts (`bridge_receipt_quorum >= 2`), `finalize_clrty1_mint`, `verify_dual_endpoint_balance` outcome aligned with custom rules.

## Onramp provider enum (MIS)

| Symbol | Meaning |
| --- | --- |
| `clarity_spark` | Canonical Spark onramp (CLRTY-1) |
| `foreign_onramp_banned` | Forbidden — must not appear in live routing |

Declared in `MisSplitGatewayRouter.mis` and `MisSparkCustomRules.mis`; payment types in `moniversive/invariants/types.mis` (Spark-only).

## Verify

```bash
make clrty1-contracts-verify
# or:
for f in moniversive/contracts/*.mis moniversive/contracts/bridge/*.mis; do
  bin/misc "$f" --check --compact-letters
done
bin/misc moniversive/framework/MisSparkCustomRules.mis --check --compact-letters
```

## Kernel cross-refs

- Active kernel: `moniversive/framework/misc.mis` · policy `CLRTY_SUBSTRATE/boot/mis_kernel_active_only.json`
- Index ids: `idx-mis-clrty1-contracts-*` in `CLRTY_SUBSTRATE/boot/mis_code_index.json`
