# Showcase — canonical `.mis` examples

> Generated 2026-07-26T17:42:35Z

## Kernel swap to `misc`

Path: `examples/mis/kernel_swap_to_mis.mis`

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
```
## Compiler kernel module

Path: `moniversive/framework/misc.mis`

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
## Recursion taxonomy

Path: `moniversive/framework/MisRecursion.mis`

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
## Routing taxonomy

Path: `moniversive/framework/MisRouter.mis`

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
## Superdynamic taxonomy

Path: `moniversive/framework/MisSuperdynamic.mis`

```mis
// Moniversive deep root — letter-hash
// Superdynamic MIS — dynamic values inside static bounds

module MisSuperdynamic {

  

  invariant letter_hash_bound: letter_hash_root != @0;
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
