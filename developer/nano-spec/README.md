---
nano: 100
---

# CLRTY-1 Nano Spec 100 — full index

> Source: `docs/chain/CLRTY1_NANO_SPEC_100.md` · Notion: [Nano Spec 100](https://app.notion.com/p/3a15f7f81f9e81f6bd5bd7574ed8123d)

Canonical **100-detail** ledger / account / tx / staking / HELIX / security nano-spec. Each chapter includes **status**, **code path**, and **terminal verification commands**.

## Chapters

- [1. Core ledger structure (1–15)](chapter-01.md) — items 1–15 (15 details)
- [2. State tree (16–25)](chapter-02.md) — items 16–25 (10 details)
- [3. Account data structure (26–40)](chapter-03.md) — items 26–40 (15 details)
- [4. Transaction structure (41–55)](chapter-04.md) — items 41–55 (15 details)
- [5. RPC internal flow (56–65)](chapter-05.md) — items 56–65 (10 details)
- [6. CCR engine (66–72)](chapter-06.md) — items 66–72 (7 details)
- [7. Staking data structures (73–80)](chapter-07.md) — items 73–80 (8 details)
- [8. HELIX (internal routing) (81–88)](chapter-08.md) — items 81–88 (8 details)
- [9. Cross-chain routing (89–95)](chapter-09.md) — items 89–95 (7 details)
- [10. Security + safety (96–100)](chapter-10.md) — items 96–100 (5 details)

## Final system view

```text
USER TX → RPC (CCR + compliance) → Simulation → HELIX / Pathfinding
  → Validator PoC quorum → State tree → Rewards + CCR
```

## E2E audit

{% hint style="success" %}
**Audit status**

Nano suite: **100/100 passed** · Branding: clrtynet ≡ clrty ≡ clarity
{% endhint %}

[CLI verification guide](cli-verification.md) · [Master CLI](../cli/master-command-reference.md)
