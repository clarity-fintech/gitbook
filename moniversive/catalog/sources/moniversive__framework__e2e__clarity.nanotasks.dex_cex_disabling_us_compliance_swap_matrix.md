# `moniversive/framework/e2e/clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix.mis`

> Generated 2026-07-29T03:15:28Z · module **`clarity`** · 438 lines

```bash
bin/misc moniversive/framework/e2e/clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `dcx_nano_task_count:`, `e2e_zero_cost_intake_usd:`, `playwright_live_billing_off:`, `settlement_chain:`, `production_dcx_live_in_ci:`, `mandatory_dcx_success_rate:` |
| Outcomes | `dcx001_dex_cex_global_switch_deactivate`, `dcx002_zero_cost_intake_assertion`, `dcx003_order_book_microstructure_halted`, `dcx004_external_cex_api_webhooks_suspended`, `dcx005_automated_arbitrage_bots_deactivated`, `dcx006_liquidity_pool_swaps_paused_globally`, `dcx007_spot_trading_interface_locked_ui`, `dcx008_margin_leverage_engines_stopped`, `dcx009_perpetual_contracts_halted_safely`, `dcx010_dark_pool_liquidity_routing_paused`, `dcx011_click_house_dex_telemetry_disabled`, `dcx012_postgre_sql_trading_tables_readonly` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix — DCX001–DCX100
// Registry: moniversive/framework/e2e/DexCexDisablingUsComplianceSwapMatrix.md
// Playwright: packages/exchange-app/e2e/clarity-dex-cex-us-compliance-swap-matrix.spec.ts

module clarity.mis.nanotasks.dex_cex_disabling_us_compliance_swap_matrix {

  invariant dcx_nano_task_count: dcx_nano_task_count == 100;
  invariant e2e_zero_cost_intake_usd: data_intake_cost_usd == 0;
  invariant playwright_live_billing_off: playwright_live_gateway_billing == false;
  invariant settlement_chain: chain_id == 1202;
  invariant production_dcx_live_in_ci: production_dcx_live_in_ci == false;
  invariant mandatory_dcx_success_rate: absolute_dcx_success_rate_percent == 100;

  outcome dcx001_dex_cex_global_switch_deactivate(ctx: Bytes) {
    require ctx != @0;
    constraint dcx001_dex_cex_global_switch_deactivate_ok == true;
    constraint dex_cex_trading_enabled == false;
  }
  outcome dcx002_zero_cost_intake_assertion(ctx: Bytes) {
    require ctx != @0;
    constraint dcx002_zero_cost_intake_assertion_ok == true;
    constraint data_intake_cost_usd == 0;
  }
  outcome dcx003_order_book_microstructure_halted(ctx: Bytes) {
    require ctx != @0;
    constraint dcx003_order_book_microstructure_halted_ok == true;
  }
  outcome dcx004_external_cex_api_webhooks_suspended(ctx: Bytes) {
    require ctx != @0;
    constraint dcx004_external_cex_api_webhooks_suspended_ok == true;
  }
  outcome dcx005_automated_arbitrage_bots_deactivated(ctx: Bytes) {
    require ctx != @0;
    constraint dcx005_automated_arbitrage_bots_deactivated_ok == true;
  }
  outcome dcx006_liquidity_pool_swaps_paused_globally(ctx: Bytes) {
    require ctx != @0;
    constraint dcx006_liquidity_pool_swaps_paused_globally_ok == true;
  }
  outcome dcx007_spot_trading_interface_locked_ui(ctx: Bytes) {
    require ctx != @0;
    constraint dcx007_spot_trading_interface_locked_ui_ok == true;
    constraint spot_ui_disabled_message == true;
  }
  outcome dcx008_margin_leverage_engines_stopped(ctx: Bytes) {
    require ctx != @0;
    constraint dcx008_margin_leverage_engines_stopped_ok == true;
  }
  outcome dcx009_perpetual_contracts_halted_safely(ctx: Bytes) {
    require ctx != @0;
    constraint dcx009_perpetual_contracts_halted_safely_ok == true;
  }
  outcome dcx010_dark_pool_liquidity_routing_paused(ctx: Bytes) {
    require ctx != @0;
    constraint dcx010_dark_pool_liquidity_routing_paused_ok == true;
  }
  outcome dcx011_click_house_dex_telemetry_disabled(ctx: Bytes) {
    require ctx != @0;
    constraint dcx011_click_house_dex_telemetry_disabled_ok == true;
  }
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
