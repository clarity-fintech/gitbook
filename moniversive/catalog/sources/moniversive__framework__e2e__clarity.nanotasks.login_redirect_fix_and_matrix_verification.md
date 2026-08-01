# `moniversive/framework/e2e/clarity.mis.nanotasks.login_redirect_fix_and_matrix_verification.mis`

> Generated 2026-07-29T03:15:28Z · module **`clarity`** · 433 lines

```bash
bin/misc moniversive/framework/e2e/clarity.mis.nanotasks.login_redirect_fix_and_matrix_verification.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `login_redirect_nano_task_count:`, `e2e_zero_cost_intake_usd:`, `playwright_live_billing_off:`, `settlement_chain:`, `production_login_matrix_live_in_ci:`, `mandatory_matrix_success_rate:` |
| Outcomes | `lgin001_prepare_login_route_resume_init`, `lgin002_session_cookie_mirror_enforced`, `lgin003_zero_cost_intake_assertion`, `lgin004_local_clrty_address_required_check`, `lgin005_promote_login_route_to_wallet_app_lock`, `lgin006_boot_flow_single_redirect_guard`, `lgin007_wallet_shell_mount_on_login_blocked`, `lgin008_trade_hubs_in_place_mirror_sync`, `lgin009_need_auth_no_op_when_on_login_active`, `lgin010_return_query_param_preservation`, `lgin011_finish_setup_fallback_surface_live`, `lgin012_worker_deployment_c6622987_synced` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// clarity.mis.nanotasks.login_redirect_fix_and_matrix_verification — LGIN001–LGIN100
// Registry: moniversive/framework/e2e/LoginRedirectFixAndMatrixVerification.md
// Playwright: packages/exchange-app/e2e/clarity-login-redirect-matrix.spec.ts

module clarity.mis.nanotasks.login_redirect_fix_and_matrix_verification {

  invariant login_redirect_nano_task_count: login_redirect_nano_task_count == 100;
  invariant e2e_zero_cost_intake_usd: data_intake_cost_usd == 0;
  invariant playwright_live_billing_off: playwright_live_gateway_billing == false;
  invariant settlement_chain: chain_id == 1202;
  invariant production_login_matrix_live_in_ci: production_login_matrix_live_in_ci == false;
  invariant mandatory_matrix_success_rate: absolute_matrix_success_rate_percent == 100;

  outcome lgin001_prepare_login_route_resume_init(ctx: Bytes) {
    require ctx != @0;
    constraint lgin001_prepare_login_route_resume_init_ok == true;
  }
  outcome lgin002_session_cookie_mirror_enforced(ctx: Bytes) {
    require ctx != @0;
    constraint lgin002_session_cookie_mirror_enforced_ok == true;
  }
  outcome lgin003_zero_cost_intake_assertion(ctx: Bytes) {
    require ctx != @0;
    constraint lgin003_zero_cost_intake_assertion_ok == true;
    constraint data_intake_cost_usd == 0;
  }
  outcome lgin004_local_clrty_address_required_check(ctx: Bytes) {
    require ctx != @0;
    constraint lgin004_local_clrty_address_required_check_ok == true;
  }
  outcome lgin005_promote_login_route_to_wallet_app_lock(ctx: Bytes) {
    require ctx != @0;
    constraint lgin005_promote_login_route_to_wallet_app_lock_ok == true;
  }
  outcome lgin006_boot_flow_single_redirect_guard(ctx: Bytes) {
    require ctx != @0;
    constraint lgin006_boot_flow_single_redirect_guard_ok == true;
  }
  outcome lgin007_wallet_shell_mount_on_login_blocked(ctx: Bytes) {
    require ctx != @0;
    constraint lgin007_wallet_shell_mount_on_login_blocked_ok == true;
  }
  outcome lgin008_trade_hubs_in_place_mirror_sync(ctx: Bytes) {
    require ctx != @0;
    constraint lgin008_trade_hubs_in_place_mirror_sync_ok == true;
  }
  outcome lgin009_need_auth_no_op_when_on_login_active(ctx: Bytes) {
    require ctx != @0;
    constraint lgin009_need_auth_no_op_when_on_login_active_ok == true;
  }
  outcome lgin010_return_query_param_preservation(ctx: Bytes) {
    require ctx != @0;
    constraint lgin010_return_query_param_preservation_ok == true;
  }
  outcome lgin011_finish_setup_fallback_surface_live(ctx: Bytes) {
    require ctx != @0;
    constraint lgin011_finish_setup_fallback_surface_live_ok == true;
  }
  outcome lgin012_worker_deployment_c6622987_synced(ctx: Bytes) {
    require ctx != @0;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
