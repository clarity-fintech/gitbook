# Operational rulebook — Static ML (`.clrty` / `.mis`)

> Generated 2026-07-29T03:15:30Z · Sections I–VI

## I. Structural invariants

- **Monotonicity:** gradients bounded (`fn_monotonic_gradient_clamp` catalog).
- **Spectral cap:** $\sigma_{max} \le 1.0$ (`fn_spectral_norm_lock`).
- **Phase-locked latents:** no drift across train/infer boundaries.

## II. Non-market kernel isolation

- Branchless execution via bitwise selection (`dev_zero_branch_select_mask`).
- **HugePage** alignment for hot tensors.
- Hardware queue dispatch where applicable.

## III. `clrty::fn::*` & `clrty::call::*`

- Zero-copy contracts · atomic barriers before state commit.
- Symbol lookup via **MIS code index** + `clrty_getMisCodeIndex`.

## IV. `clrty::embed::*`

- Orthogonal sub-space routing · MoE gating · cross-modal fusion (see band 876–975).

## V. `clrty::method::*`

- Monadic errors · type-state builders · zero-allocation slabs.

## VI. Verification checklist

- [ ] Gradient clamp catalog entry present
- [ ] Spectral norm lock verified
- [ ] No heap alloc in hot loops (slab policy)
- [ ] Branchless or mask-select patterns
- [ ] `bin/misc … --check --compact-letters` clean

Commands: [catalog/commands-and-make-targets.md](../catalog/commands-and-make-targets.md)
