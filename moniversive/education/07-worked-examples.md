# 7 — Worked examples (multi-module)

> Generated 2026-07-27T00:56:55Z · compare with [showcase](mis-showcase.md) (**39** files)

Each example below has **paragraph guidance** plus **full source**. Run any repo path with `bin/misc`.

---

## Example A — Counter with state, signal, and fail

Purpose: learn **`state` + `outcome` + `invariant`** together.

```mis
module CounterLesson {

  invariant counter_non_negative: counter >= 0;
  invariant step_positive_bounded: max_step <= 1000;

  state counter;
  state max_step;

  signal Tick(n: u64);
  fail Overflow;
  fail ZeroStep;

  outcome bump(n: u64) {
    require n > 0;
    require n <= max_step;
    constraint counter == counter + n;
  }

  outcome reset() {
    constraint counter == 0;
  }
}
```

Write a paragraph summary yourself: identify two invariants, two outcomes, and one signal. Then change `max_step` invariant bound in a scratch copy and re-check.

---

## Example B — Ledger conservation

Purpose: learn **global invariants** with multiple outcomes touching related state.

```mis
module LedgerLesson {

  invariant supply_constant: total_minted == total_outstanding + total_burned;
  invariant accounts_non_negative: all_balances_non_negative == true;

  state total_minted;
  state total_outstanding;
  state total_burned;

  outcome mint(account: Account, amount: u128) {
    require account != @0;
    require amount > 0;
    constraint total_minted == total_minted + amount;
    constraint total_outstanding == total_outstanding + amount;
  }

  outcome transfer(from: Account, to: Account, amount: u128) {
    require from != @0;
    require to != @0;
    require amount > 0;
    constraint transfer_ok == true;
  }

  outcome burn(account: Account, amount: u128) {
    require account != @0;
    require amount > 0;
    constraint total_outstanding == total_outstanding - amount;
    constraint total_burned == total_burned + amount;
  }
}
```

Notice **`supply_constant`** is the spine. **`mint`** and **`burn`** adjust totals; **`transfer`** only sets `transfer_ok` in this lesson file — a follow-up exercise adds balance state.

---

## Example C — Recursion bounds (teaching → repo)

Teaching shape:

```mis
module RecursionLesson {

  invariant max_depth_positive: max_depth >= 1;
  invariant depth_within_cap: current_depth <= max_depth;

  outcome step(payload: Bytes) {
    require payload != @0;
    require current_depth < max_depth;
    constraint current_depth == current_depth + 1;
  }

  outcome fold_complete(payload: Bytes) {
    require payload != @0;
    constraint fold_complete_ok == true;
  }
}
```

Repository module (full file — focus on outcome names):

```mis
// Moniversive deep root — letter-hash
// Moniversive Recursion — static tail-fold + ZK-IVC

module MisRecursion {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;

  outcome ivc_recurse_step(payload: Bytes) {
    require payload != @0;
    constraint ivc_recurse_step_ok == true;
  }

  outcome bounded_recurse_fold(payload: Bytes) {
    require payload != @0;
    constraint bounded_recurse_fold_ok == true;
  }

  outcome assert_max_depth(payload: Bytes) {
    require payload != @0;
    constraint assert_max_depth_ok == true;
  }
}
```

Compare: teaching file uses `current_depth` / `max_depth`; repo file uses framework invariant headers. The **outcome triple** (`step`, fold/complete analogues) is the pattern to copy.

---

## Example D — Router intents (teaching → repo)

Teaching shape:

```mis
module RouterLesson {

  invariant queue_not_full: queue_size < queue_capacity;

  outcome ingest(payload: Bytes) {
    require payload != @0;
    constraint queue_size == queue_size + 1;
  }

  outcome dispatch(route_id: u32, payload: Bytes) {
    require route_id >= 1;
    require payload != @0;
    constraint dispatch_ok == true;
  }

  outcome emit_copy(payload: Bytes) {
    require payload != @0;
    constraint emit_copy_ok == true;
  }
}
```

Repository module:

```mis
// Moniversive deep root — letter-hash
// MIS inbound/outbound zero-allocation routing

module MisRouter {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;

  outcome spsc_ingest(payload: Bytes) {
    require payload != @0;
    constraint spsc_ingest_ok == true;
  }

  outcome bitwise_dispatch(payload: Bytes) {
    require payload != @0;
    constraint bitwise_dispatch_ok == true;
  }

  outcome zero_copy_emit(payload: Bytes) {
    require payload != @0;
    constraint zero_copy_emit_ok == true;
  }

  outcome zk_attest_route(payload: Bytes) {
    require payload != @0;
    constraint zk_attest_route_ok == true;
  }
}
```

Map **`ingest` → `spsc_ingest`**, **`dispatch` → `bitwise_dispatch`**, **`emit_copy` → `zero_copy_emit`**. The language feature is the same: separate outcomes, separate completion flags.

---

## Example E — Compiler kernel surface (excerpt)

Purpose: see **`compile_check`** and dispatch outcomes in the real kernel module.

```mis
// Moniversive deep root — letter-hash
// misc — sole active MIS kernel compiler (foreign kernels hard-error)

module Misc {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant active_kernel_only: active_kernel == misc;
  invariant no_python_host: python3_compiler == false;
  invariant no_foreign_kernel: foreign_kernel_active == false;

  outcome kernel_dispatch(kernel_id: u32, payload: Bytes) {
    require kernel_id >= 1;
    require kernel_id <= 100;
    require payload != @0;
    constraint kernel_executed == true;
  }

  outcome letter_hash(source: Bytes) {
    require source != @0;
    constraint letter_root != @0;
  }

  outcome compile_check(path: Bytes) {
    require path != @0;
    constraint check_ok == true;
  }

  outcome emit_graph(path: Bytes) {
    require path != @0;
    constraint graph_schema == clrty_mis_ml_execution_graph_v2;
  }

  outcome reject_foreign_kernel(name: Bytes, evidence: Bytes) {
    require name != @0;
    require evidence != @0;
    constraint foreign_refused == true;
    constraint active_kernel == misc;
  }
}
```

Read **`letter_hash`** and **`compile_check`** as CLI-aligned intents. Do not memorize every invariant in kernel modules — extract the **outcome** list first.

---

## Example F — Kernel swap sample (repo)

Full policy story for file type and checker (read as language tooling, not as a product doc):

```mis
// Moniversive deep root — letter-hash
// Real MIS module: file-type + kernel swap → MIS (`misc`) only.
// Compile: bin/misc path.mis --check --compact-letters
//       or bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters

module KernelSwapToMis {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant active_kernel_only: active_kernel == misc;
  invariant no_python_host: python3_compiler == false;
  invariant no_foreign_kernel: foreign_kernel_active == false;
  invariant file_type_swapped: file_type == mis;

  outcome assert_extension_mis(path: Bytes) {
    require path != @0;
    constraint source_extension == mis;
    constraint file_type == mis;
  }

  outcome assert_kernel_misc() {
    constraint compiler_kernel == misc;
    constraint active_kernel == misc;
  }

  outcome refuse_foreign(name: Bytes) {
    require name != @0;
    constraint foreign_refused == true;
  }

  outcome letter_hash(source: Bytes) {
    require source != @0;
    constraint letter_root != @0;
  }

  outcome settle_clrty1(intent: Bytes) {
    require intent != @0;
    constraint chain_id == 1202;
    constraint settlement_network == clrty_1;
  }

  outcome swap_file_type(from_ext: Bytes, to_ext: Bytes) {
    require from_ext != @0;
    require to_ext != @0;
    constraint file_type == mis;
    constraint source_extension == mis;
  }
}
```

List outcomes and classify each `require` vs `constraint` column in a notebook.

Next: [Reading framework modules](08-reading-framework-modules.md).
