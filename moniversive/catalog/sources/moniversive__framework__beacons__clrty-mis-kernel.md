# `moniversive/framework/beacons/clrty-mis-kernel.mis`

> Generated 2026-07-26T18:58:01Z · module **`ClrtyCLRTYMISKernelBeaconTwin`** · 22 lines

```bash
bin/misc moniversive/framework/beacons/clrty-mis-kernel.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `beacon_id:` |
| Outcomes | `load_repo_trio`, `superstructure_bind` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Framework twin — repo var/mis_github_repos/CLRTY-MIS-Kernel
// Run: bin/misc moniversive/framework/beacons/clrty-mis-kernel.mis --check --compact-letters

module ClrtyCLRTYMISKernelBeaconTwin {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant beacon_id: beacon_id == clrty_clrty_mis_kernel;

  outcome load_repo_trio(path: Bytes) {
    require path != @0;
    constraint repo_trio_loaded == true;
  }

  outcome superstructure_bind(catalog: Bytes) {
    require catalog != @0;
    constraint superstructure_linked == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
