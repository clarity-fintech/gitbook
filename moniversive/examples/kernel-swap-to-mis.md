# Kernel swap to MIS

Real file: [`path.mis`](../../../path.mis) · [`examples/mis/kernel_swap_to_mis.mis`](../../../examples/mis/kernel_swap_to_mis.mis)

Swaps authoring **file type** to `.mis` and **compiler kernel** to `misc` (clrty-1 / 1202).

```bash
bin/misc path.mis --check --compact-letters
```

Expect JSON with `"ok":true`, `"kernel":"misc"`, `"module":"KernelSwapToMis"`.
