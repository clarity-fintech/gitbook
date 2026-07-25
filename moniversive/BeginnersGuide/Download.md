# Download

Install the sole active MIS kernel (`misc`):

```bash
git clone https://github.com/clarity-fintech/CLRTY-MIS-Kernel.git
cd CLRTY-MIS-Kernel
bash scripts/download_misc_kernel.sh
./bin/misc path.mis --check --compact-letters
```

Or from this monorepo:

```bash
make misc-build
bin/misc path.mis --check --compact-letters
```

`path.mis` is a real MIS module (`KernelSwapToMis`) — file-type + kernel swap to `misc`. Foreign compilers are hard-refused (exit 3).
