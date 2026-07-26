# Showcase — canonical `.mis` examples

> Generated 2026-07-26T17:14:13Z

## Kernel swap to `misc`

Path: `examples/mis/kernel_swap_to_mis.mis`

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// Real MIS module: file-type + kernel swap → MIS (`misc`) only.
// Compile: bin/misc path.mis --check --compact-letters
//       or bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters

module KernelSwapToMis {

  embed gates 3..=6 {
    context: "Swap authoring surface from foreign hosts to MIS .mis on clrty-1";
    ai: "Rewrite outcomes around EMBED + invariants; invoke bin/misc only";
    execution: "assert_extension_mis; assert_kernel_misc; refuse_foreign; letter_hash; settle_clrty1";
    capital: "Settlement clrty-1 / chain 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
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
```
## Compiler kernel module

Path: `moniversive/framework/misc.mis`

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// misc — sole active MIS kernel compiler (foreign kernels hard-error)

module Misc {

  embed gates 3..=6 {
    context: "Sole active MIS kernel misc — prove invariants, letter-hash, emit graph on clrty-1";
    ai: "Invoke bin/misc only; refuse python clrtyc, solc, forge, hardhat, or any other kernel";
    execution: "kernel_dispatch; letter_hash; embed_gates; compile_check; emit_graph; reject_foreign_kernel";
    capital: "Settlement clrty-1 / chain 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
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

  outcome embed_gates(block: Bytes) {
    require block != @0;
    constraint embed_root != @0;
  }

  outcome compile_check(path: Bytes) {
    require path != @0;
    constraint check_ok == true;
  }

  outcome emit_graph(path: Bytes) {
```
## Recursion taxonomy

Path: `moniversive/framework/MisRecursion.mis`

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// Moniversive Recursion — static tail-fold + ZK-IVC

module MisRecursion {

  embed gates 3..=6 {
    context: "Moniversive Recursion — static tail-fold + ZK-IVC";
    ai: "Push all new work into MIS taxonomy; no dynamic Python packages";
    execution: "ivc_recurse_step ; bounded_recurse_fold ; assert_max_depth";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
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
## Routing taxonomy

Path: `moniversive/framework/MisRouter.mis`

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// MIS inbound/outbound zero-allocation routing

module MisRouter {

  embed gates 3..=6 {
    context: "MIS inbound/outbound zero-allocation routing";
    ai: "Push all new work into MIS taxonomy; no dynamic Python packages";
    execution: "spsc_ingest ; bitwise_dispatch ; zero_copy_emit ; zk_attest_route";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
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
## Superdynamic taxonomy

Path: `moniversive/framework/MisSuperdynamic.mis`

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// Superdynamic MIS — dynamic values inside static bounds

module MisSuperdynamic {

  embed gates 3..=6 {
    context: "Superdynamic MIS — dynamic values inside static bounds";
    ai: "Push all new work into MIS taxonomy; no dynamic Python packages";
    execution: "morph_kernel ; ring_swap ; ivc_accumulate ; select_mode";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;

  outcome morph_kernel(payload: Bytes) {
    require payload != @0;
    constraint morph_kernel_ok == true;
  }

  outcome ring_swap(payload: Bytes) {
    require payload != @0;
    constraint ring_swap_ok == true;
  }

  outcome ivc_accumulate(payload: Bytes) {
    require payload != @0;
    constraint ivc_accumulate_ok == true;
  }

  outcome select_mode(payload: Bytes) {
    require payload != @0;
    constraint select_mode_ok == true;
  }
}
```
