# Simple examples

Minimal MIS module (`.mis` only — kernel `misc`):

```mis
module Hello {
  embed gates 3..=6 {
    context: "demo";
    ai: "resolve via code index";
    execution: "noop";
    capital: "clrty-1/1202";
  }
  invariant settlement_chain: chain_id == 1202;
}
```

Kernel swap sample (shipped):

```bash
bin/misc path.mis --check --compact-letters
bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters
```
