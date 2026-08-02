# `moniversive/framework/e2e/clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix.catalog.mis`

> Generated 2026-07-29T03:15:28Z · module **`clarity`** · 13 lines

```bash
bin/misc moniversive/framework/e2e/clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix.catalog.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `catalog_dcx_count:`, `catalog_outcome_count:`, `playwright_spec_bound:`, `ci_pipeline:`, `main_entry_bound:`, `wallet_money_surface:`, `preview_ci_policy:` |
| Outcomes | — |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Catalog: clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix (DCX001–100 + main)
// Index: moniversive/framework/e2e/DexCexDisablingUsComplianceSwapMatrix.md
// CI: npm run ci:exchange:dex-cex-us-compliance-swap

module clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix.catalog {
  invariant catalog_dcx_count: dcx_nano_task_count == 100;
  invariant catalog_outcome_count: dcx_outcome_count == 101;
  invariant playwright_spec_bound: e2e_spec == clarity_dex_cex_us_compliance_swap_matrix;
  invariant ci_pipeline: ci_pipeline == build_preview_playwright_dcx;
  invariant main_entry_bound: e2e_main_entry == execute_dex_cex_us_compliance_swap_main;
  invariant wallet_money_surface: wallet_tab == money;
  invariant preview_ci_policy: production_dcx_live_in_ci == false;
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
