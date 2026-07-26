# `moniversive/framework/MisBeacon.mis`

> Generated 2026-07-26T17:24:53Z · module **`MisBeacon`** · 35 lines

```bash
bin/misc moniversive/framework/MisBeacon.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `embed_gates_present:`, `deep_root_moniversive:`, `settlement_chain:`, `extension_mis:`, `family_mis_chain:` |
| Outcomes | `load_root_beacon`, `heartbeat_1202`, `rpc_catalog_bind` |
| fn | — |
| EMBED 3..=6 | yes |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// Superstructure beacon loader — root `.beacon` + CHAIN 1202 telemetry

module MisBeacon {

  embed gates 3..=6 {
    context: "CLRTY-1 superstructure beacon — node signal and RPC heartbeat";
    ai: "Cross-link clrty_superstructure.json beacons; refuse foreign kernels";
    execution: "load_root_beacon ; heartbeat_1202 ; rpc_catalog_bind";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant family_mis_chain: taxonomy_family == mis_chain;

  outcome load_root_beacon(path: Bytes) {
    require path != @0;
    constraint beacon_manifest_loaded == true;
  }

  outcome heartbeat_1202(seq: Bytes) {
    require seq != @0;
    constraint chain_id == 1202;
    constraint heartbeat_ok == true;
  }

  outcome rpc_catalog_bind(catalog: Bytes) {
    require catalog != @0;
    constraint rpc_bound == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
