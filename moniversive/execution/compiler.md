# Compiler (`misc` — sole active MIS kernel)

Only **`misc`** may compile/check `.mis`. Any other kernel is a **hard error (exit 3)**.

```bash
bin/misc path/to/Module.mis --check --compact-letters
make misc-build
python3 scripts/mis-ml/verify_misc_kernel_only.py
```

| Artifact | Path |
|----------|------|
| Kernel binary | `bin/misc` |
| Active-only policy | `CLRTY_SUBSTRATE/boot/mis_kernel_active_only.json` |
| Kernel module | `moniversive/framework/misc.mis` |
| Forbidden | python3-clrtyc, solc, forge, hardhat, llvm, solidity |

Foreign `MIS_KERNEL` / `CLRTY_COMPILER_KERNEL` env values ≠ `misc` → exit 3.  
Source containing `python3 … clrtyc.py`, `pragma solidity`, `forge create`, or `kernel: "solc"` → exit 3.
