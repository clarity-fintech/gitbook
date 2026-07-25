# Outcomes & constraints

An `outcome` declares the **desired result**. Constraints bind the post-state; requires gate entry.

```clrty
outcome flush_pool(token: Account, amount: u128) {
  require paused == false;
  require amount > 0;
  constraint treasury_amount == amount * treasury_bps / 10000;
  constraint bank_amount == amount - treasury_amount;
  constraint invariants_hold == true;
}
```

The MIS-ML runtime searches for an execution schedule that satisfies all constraints without breaking module invariants — **execution = optimized outcome**.
