# `moniversive/framework/e2e/clarity.mis.nanotasks.payment_swaps_buying_selling_fees_compliance_matrix.catalog.mis`

> Generated 2026-07-29T03:15:28Z · module **`clarity`** · 13 lines

```bash
bin/misc moniversive/framework/e2e/clarity.mis.nanotasks.payment_swaps_buying_selling_fees_compliance_matrix.catalog.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `catalog_swp_count:`, `catalog_outcome_count:`, `playwright_spec_bound:`, `ci_pipeline:`, `main_entry_bound:`, `spark_matrix_bound:`, `wallet_home_surface:` |
| Outcomes | — |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Catalog: clarity.mis.nanotasks.payment_swaps_buying_selling_fees_compliance_matrix (SWP001–100 + main)
// Index: moniversive/framework/e2e/PaymentSwapsBuyingSellingFeesComplianceMatrix.md
// CI: npm run ci:exchange:payment-swaps-fees-compliance-matrix

module clarity.mis.nanotasks.payment_swaps_buying_selling_fees_compliance_matrix.catalog {
  invariant catalog_swp_count: payment_swaps_nano_task_count == 100;
  invariant catalog_outcome_count: payment_swaps_outcome_count == 101;
  invariant playwright_spec_bound: e2e_spec == clarity_payment_swaps_fees_compliance_matrix;
  invariant ci_pipeline: ci_pipeline == mis_check_http_smoke_playwright_swp;
  invariant main_entry_bound: e2e_main_entry == execute_payment_swaps_buying_selling_fees_compliance_main;
  invariant spark_matrix_bound: spark_cash_out_module == clarity.mis.nanotasks.spark_cash_out_full_e2e_matrix;
  invariant wallet_home_surface: wallet_tab == home;
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
