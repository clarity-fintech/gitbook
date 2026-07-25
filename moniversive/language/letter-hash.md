# Letter-hash (typed letters)

Moniversive is the **deep root** language for the CLRTY database. Every **typed letter** in a `.clrty` module is hashed.

### Algorithm (`sha256-rolling-typed-letter/v1`)

For each visible typed character `c` at absolute index `abs` and typed index `i`:

```text
h₀ = 0³²
hᵢ₊₁ = SHA256(hᵢ ‖ absᵢ ‖ i ‖ utf8(c))
letter_hash.root = hₙ
```

Control characters (`\\n`, `\\r`, `\\t`) are skipped; spaces and punctuation **are** typed letters.

`clrtyc` always emits `letter_hash` on compile. Use `--compact-letters` to keep only the rolling root in large graphs.
