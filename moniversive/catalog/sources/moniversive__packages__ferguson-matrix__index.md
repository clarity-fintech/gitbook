# `moniversive/packages/ferguson-matrix/index.mis`

> Generated 2026-08-02T12:03:42Z · module **`FergusonMatrixPackage`** · 54 lines

```bash
bin/misc moniversive/packages/ferguson-matrix/index.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `package_root:`, `external_ssot:`, `export_matrix:`, `export_full_algo:`, `export_kernel_overlay:`, `controller_version`, `total_nanotask_specs`, `total_package_mis_modules` |
| Outcomes | `bind_kernel_overlay`, `bind_full_ferguson_algo` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Ferguson Matrix Universal ML Execution Layer — Moniversive Invariant Static (MIS)
// Settlement: clrty-1 / 1202 · Compiler: bin/misc --check --compact-letters
// Surface: https://monitor.clarity-fintech.com/uiquio/ferguson-matrix
// FULL ALGO bind: external/clarity-fintech/ferguson-matrix/index.mis
// Kernel overlay: external/clarity-fintech/ferguson-matrix/mis/FergusonMatrixKernelOverlay.mis

module FergusonMatrixPackage {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant package_root: package_path == "moniversive/packages/ferguson-matrix";
  invariant external_ssot: external_package == external_clarity_fintech_ferguson_matrix;
  invariant export_matrix: exports_ferguson_matrix == true;
  invariant export_full_algo: exports_full_ferguson_algo == true;
  invariant export_kernel_overlay: exports_ferguson_matrix_kernel_overlay == true;
  invariant controller_version == 223_0_0;
  invariant total_nanotask_specs == 15;
  invariant total_package_mis_modules == 124;
  invariant kernel_overlay_locked == true;

  outcome bind_kernel_overlay() {
    constraint base_kernel == misc;
    constraint ferguson_kernel_overlay == external_clarity_fintech_ferguson_matrix_mis_FergusonMatrixKernelOverlay_mis;
    constraint cdk_overlay_pack == smart_contract_dev_kit_mis_packs_ferguson_matrix_kernel_overlay_mis;
    constraint ferguson_matrix_kernel_overlay_installed == true;
    constraint ferguson_matrix_kernel_overlay_permanent == true;
    constraint ferguson_usage_registry == external_clarity_fintech_ferguson_matrix_mis_FergusonMatrixUsageRegistry_mis;
    constraint kernel_overlay_locked == true;
  }

  outcome bind_full_ferguson_algo() {
    bind_kernel_overlay();
    constraint external_algo_index == external_clarity_fintech_ferguson_matrix_index_mis;
    constraint external_full_package == external_clarity_fintech_ferguson_matrix_FergusonMatrixFullPackageBind_mis;
    constraint core_kernel == mis_kernel_FergusonMatrixKernel_mis;
    constraint swarm_kernel == swarm_FergusonSwarmKernel_mis;
    constraint x100_kernel == kernel_FMKernel_mis;
    constraint uaol_os == uaol_FergusonMatrixUAOL_mis;
    constraint col_os == cuda_FergusonMatrixCUDAOptimizationLayer_mis;
    constraint mgsl_os == mgsl_FergusonMatrixMultiGPUScalingLayer_mis;
    constraint product_manifest == uaol_UAOLProductManifest_mis;
    constraint compression_os == compression_FergusonMatrixCompressionLayers_mis;
    constraint speed_os == speed_FergusonMatrixSpeedAttributes_mis;
    constraint adjustable_os == adjustable_FergusonMatrixAdjustableEngine_mis;
    constraint total_nanotask_specs == 15;
    constraint uaol_col_mgsl_nano_trilogy_complete == true;
    constraint full_ferguson_algo_bound == COMPLETE;
    constraint chain_id == 1202;
  }

  signal PackageReady(version: Bytes);
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
