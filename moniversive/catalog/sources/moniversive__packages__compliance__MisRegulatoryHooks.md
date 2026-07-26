# `moniversive/packages/compliance/MisRegulatoryHooks.mis`

> Generated 2026-07-26T17:14:13Z · module **`MisRegulatoryHooks`** · 31 lines

```bash
bin/misc moniversive/packages/compliance/MisRegulatoryHooks.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `embed_gates_present:`, `settlement_chain:`, `extension_mis:`, `family_mis_chain:` |
| Outcomes | `bind_hooks`, `scan_pass_when_wired` |
| fn | — |
| EMBED 3..=6 | yes |

## Source (excerpt)

```mis
// Regulatory hook attestation — declares programmatic paths (stub + production checklist).
// Taxonomy: mis_chain → mis_substrate · settlement clrty-1 / 1202

module MisRegulatoryHooks {

  embed gates 3..=6 {
    context: "Sanctions, KYC webhook, attestation blob, Dilisense edge — scan: regulatory-hooks-implementation";
    ai: "Link Rust/TS implementations; no fake OFAC lists; counsel for live feeds";
    execution: "bind_hooks ; scan_pass_when_wired";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant family_mis_chain: taxonomy_family == mis_chain;

  outcome bind_hooks(hooks: Bytes) {
    require hooks != @0;
    constraint sanctions_scanner_bound == true;
    constraint kyc_webhook_bound == true;
    constraint attestation_blob_bound == true;
    constraint dilisense_edge_bound == true;
  }

  outcome scan_pass_when_wired(checklist: Bytes) {
    require checklist != @0;
    constraint production_checklist_doc == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
