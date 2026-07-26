# `moniversive/migrated/scripts/website/write_blog_posts.mis`

> Generated 2026-07-26T17:24:53Z · module **`ScriptsWebsiteWriteBlogPosts`** · 30 lines

```bash
bin/misc moniversive/migrated/scripts/website/write_blog_posts.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `embed_gates_present:`, `deep_root_moniversive:`, `settlement_chain:`, `extension_mis:`, `no_python_authoring:` |
| Outcomes | `assert_migrated`, `run_surface` |
| fn | — |
| EMBED 3..=6 | yes |

## Source (excerpt)

```mis
// Moniversive deep root — letter-hash + EMBED gates 3..=6
// Migrated from scripts/website/write_blog_posts.py → .mis (CLRTY-1 MIS cutover)
// Kind: clrty1_surface

module ScriptsWebsiteWriteBlogPosts {

  embed gates 3..=6 {
    context: "MIS cutover of scripts/website/write_blog_posts.py on clrty-1";
    ai: "Index via mis_code_index; do not revive .py authoring";
    execution: "assert_migrated; run_surface";
    capital: "Settlement clrty-1 / chain 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant no_python_authoring: python_package_code == false;

  outcome assert_migrated(path: Bytes) {
    require path != @0;
    constraint migrated_ok == true;
  }

  outcome run_surface(payload: Bytes) {
    require payload != @0;
    constraint surface_ok == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
