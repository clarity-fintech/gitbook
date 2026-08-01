# `moniversive/framework/merchant/pricing/MisMerchantPricingStarterInvariants.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisMerchantPricingStarterInvariants`** · 135 lines

```bash
bin/misc moniversive/framework/merchant/pricing/MisMerchantPricingStarterInvariants.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `kernel_is_misc:`, `zero_cost_intake:`, `pricing_billed_usdc:` |
| Outcomes | `pt021_starter_tier_config_init`, `pt022_starter_monthly_fee_zero`, `pt023_starter_yearly_fee_zero`, `pt024_starter_usage_rate_per_tx`, `pt025_starter_api_rate_limit_enforce`, `pt026_starter_standard_checkout_rails`, `pt027_starter_community_support_access`, `pt028_starter_wallet_money_tab_sync`, `pt029_starter_same_page_hash_display`, `pt030_starter_public_ledger_sync`, `pt031_starter_usage_meter_click_house`, `pt032_starter_overage_billing_handler` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Clarity Merchant pricing tiers — Tier 2: Starter pay-by-usage (PT021-PT040)
// SSOT: CLRTY_SUBSTRATE/boot/clarity_spark_merchant_pricing_tiers.json
// Logical: clarity.mis.nanotasks.merchant_pricing_tiers
// Compile: bin/misc moniversive/framework/merchant/pricing/MisMerchantPricingStarterInvariants.mis --check --compact-letters

module MisMerchantPricingStarterInvariants {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant zero_cost_intake: data_intake_cost_usd == 0;
  invariant pricing_billed_usdc: pricing_billed_in_usdc == true;

  outcome pt021_starter_tier_config_init(ctx: Bytes) {
    // PT021_StarterTierConfigInit
    require ctx != @0;
    constraint pt21_bound == true;
  }

  outcome pt022_starter_monthly_fee_zero(ctx: Bytes) {
    // PT022_StarterMonthlyFeeZero
    require ctx != @0;
    constraint pt22_bound == true;
  }

  outcome pt023_starter_yearly_fee_zero(ctx: Bytes) {
    // PT023_StarterYearlyFeeZero
    require ctx != @0;
    constraint pt23_bound == true;
  }

  outcome pt024_starter_usage_rate_per_tx(ctx: Bytes) {
    // PT024_StarterUsageRatePerTx
    require ctx != @0;
    constraint pt24_bound == true;
  }

  outcome pt025_starter_api_rate_limit_enforce(ctx: Bytes) {
    // PT025_StarterApiRateLimitEnforce
    require ctx != @0;
    constraint pt25_bound == true;
  }

  outcome pt026_starter_standard_checkout_rails(ctx: Bytes) {
    // PT026_StarterStandardCheckoutRails
    require ctx != @0;
    constraint pt26_bound == true;
  }

  outcome pt027_starter_community_support_access(ctx: Bytes) {
    // PT027_StarterCommunitySupportAccess
    require ctx != @0;
    constraint pt27_bound == true;
  }

  outcome pt028_starter_wallet_money_tab_sync(ctx: Bytes) {
    // PT028_StarterWalletMoneyTabSync
    require ctx != @0;
    constraint pt28_bound == true;
  }
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
