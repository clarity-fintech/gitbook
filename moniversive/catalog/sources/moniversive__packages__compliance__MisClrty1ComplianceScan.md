# `moniversive/packages/compliance/MisClrty1ComplianceScan.mis`

> Generated 2026-07-26T17:24:54Z · module **`MisClrty1ComplianceScan`** · 46 lines

```bash
bin/misc moniversive/packages/compliance/MisClrty1ComplianceScan.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `embed_gates_present:`, `deep_root_moniversive:`, `settlement_chain:`, `extension_mis:`, `family_mis_chain:`, `engineering_only:` |
| Outcomes | `load_registry`, `run_catalog`, `append_temporal`, `emit_txt_snapshot`, `perfect_bar_requires_l1_probe` |
| fn | — |
| EMBED 3..=6 | yes |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// CLRTY-1 engineering compliance scan catalog (orchestrated by scripts/clrty1_compliance_scan.sh)
// Taxonomy: mis_chain → mis_substrate · settlement clrty-1 / 1202

module MisClrty1ComplianceScan {

  embed gates 3..=6 {
    context: "Engineering scan snapshot — MIS kernel, boot SSOT drift, origin health, keyword inventory";
    ai: "Bind clrty1_compliance_scan_registry.json; delegate checks to shell runner; no legal attestation";
    execution: "load_registry ; run_catalog ; append_temporal ; emit_txt_snapshot";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant engineering_only: legal_attestation == false;

  outcome load_registry(path: Bytes) {
    require path != @0;
    constraint registry_loaded == true;
  }

  outcome run_catalog(catalog: Bytes) {
    require catalog != @0;
    constraint scan_catalog_bound == true;
  }

  outcome append_temporal(line: Bytes) {
    require line != @0;
    constraint temporal_log_appended == true;
  }

  outcome emit_txt_snapshot(report: Bytes) {
    require report != @0;
    constraint txt_snapshot_written == true;
  }

  // scan_catalog (registry): mis-kernel-only .. compliance-coverage-ssot · l1-readiness-gate · optional notion-hub-reachable
  outcome perfect_bar_requires_l1_probe(strict: bool) {
    constraint strict == true || degraded_escape_documented == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
