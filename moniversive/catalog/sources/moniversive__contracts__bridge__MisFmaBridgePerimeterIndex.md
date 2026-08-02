# `moniversive/contracts/bridge/MisFmaBridgePerimeterIndex.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisFmaBridgePerimeterIndex`** · 108 lines

```bash
bin/misc moniversive/contracts/bridge/MisFmaBridgePerimeterIndex.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `authoring_extension_mis:`, `no_solidity_authoring:`, `legacy_clrty_archive_only:` |
| Outcomes | `resolve_clrtExecutionReserve`, `resolve_clrtMarketplaceRouter`, `resolve_clrtModelRegistry`, `resolve_clrtyImmutableToken`, `resolve_clrtyNttManagerFactory`, `resolve_clrtyOFTv2`, `resolve_fmaArbitrumRouter`, `resolve_fmaBaseSettlementHub`, `resolve_fmaExecutionGateway`, `resolve_fmaInstitutionalCustody`, `resolve_fmaMasterInfrastructure`, `resolve_fmaSpotArbEntry` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — FMA bridge perimeter module catalog (CLRTY-1)
// Compile: bin/misc moniversive/contracts/bridge/MisFmaBridgePerimeterIndex.mis --check --compact-letters

module MisFmaBridgePerimeterIndex {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant authoring_extension_mis: source_extension == mis;
  invariant no_solidity_authoring: solidity_authoring == false;
  invariant legacy_clrty_archive_only: clrty_authoring == false;

  outcome resolve_clrtExecutionReserve(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrtExecutionReserve;
  }

  outcome resolve_clrtMarketplaceRouter(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrtMarketplaceRouter;
  }

  outcome resolve_clrtModelRegistry(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrtModelRegistry;
  }

  outcome resolve_clrtyImmutableToken(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrtyImmutableToken;
  }

  outcome resolve_clrtyNttManagerFactory(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrtyNttManagerFactory;
  }

  outcome resolve_clrtyOFTv2(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrtyOFTv2;
  }

  outcome resolve_fmaArbitrumRouter(path: Bytes) {
    require path != @0;
    constraint module_id == MisFmaArbitrumRouter;
  }

  outcome resolve_fmaBaseSettlementHub(path: Bytes) {
    require path != @0;
    constraint module_id == MisFmaBaseSettlementHub;
  }

  outcome resolve_fmaExecutionGateway(path: Bytes) {
    require path != @0;
    constraint module_id == MisFmaExecutionGateway;
  }

  outcome resolve_fmaInstitutionalCustody(path: Bytes) {
    require path != @0;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
