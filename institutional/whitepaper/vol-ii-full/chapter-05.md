---
extract_key: "whitepaper_vol_ii"
chapter: 5
---

# Volume II — Security & Governance — Chapter 5

Chapter 11 — Treasury Management All protocol-owned assets are custodied under a multi-signature wallet (Gnosis Safe-class architecture) with the primary 4-of-7 threshold.

Treasury movements above defined amount tiers additionally require Emergency Guardian pre-clearance and a public notice window.

Spending Policy Tiers Tier Amount Approval Notice Operational ≤ 0.1% of treasury 4-of-7 Announced within 24h Programmatic ≤ 1% 4-of-7 + budget on record Announced ≥ 48h prior Strategic ≤ 5% 4-of-7 + timelock Announced ≥ 7 days prior Extraordinary > 5% 4-of-7 + DAO vote (Phase 2+)Announced ≥ 14 days prior Allowed Asset List The treasury holds a curated whitelist of assets: native $CLRTY , major L1 base assets, first-tier stablecoins, and short-duration on-chain treasury instruments.

Additions to the whitelist require the primary multisig and a public rationale.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 12 — Staking / Rewards APR Mathematical Validation Staker rewards are one of the most common sources of subtle accounting bugs in L1 protocols.

V olume II specifies a canonical APR/APY formalism and requires formal verification of the reward-accounting library against it.

APR / APY Definitions APR = reward_rate_per_second · seconds_per_year / total_staked APY = (1 + APR / n)^n − 1 (n = compounding periods) For continuous compounding: APY = e^APR − 1 Validation Requirements Reward-per-share accounting uses fixed-point arithmetic (Q64.64 or equivalent) to prevent rounding drift.

Reward accrual is monotonic per staker between claim events.

Sum of unclaimed rewards over all stakers ≤ contract balance at all times (safety invariant).

Formal-verification harness generates random deposit/withdraw/claim traces and asserts the safety invariant on every step.

Displayed APR/APY on user surfaces must match the on-chain computation to at least 4 significant figures.

DESIGN RATIONALE Publishing the APR formula explicitly, together with the invariant that unclaimed rewards never exceed the contract balance, converts staking safety from a marketing claim into a testable property.

• • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Part II — Superuser Key Control & Management Part II documents the origin, custody, and constraint model of the cryptographic keys that anchor privileged control of the CLRTY Protocol.

Its purpose is to demonstrate — with sufficient technical specificity to survive institutional due diligence — that no single party has, has ever had, or can obtain unilateral control over CLRTY , and that every path by which privilege is exercised is public, threshold-gated, and reversible.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 13 — Key Generation Ceremony The CLRTY superuser keys were generated in an air-gapped, secure environment using custom methods and encryption.

The generation process involved a single authorized participant from the core team acting as ceremony operator, with the resulting key material immediately moved into a multi-signature contract architecture.

Every step of the ceremony was documented and verified in a way that ensured no single party — including the operator — had access to the full key material during or after generation.

Ceremony Environment Air-gapped hardware.

Generation occurred on a hardware device never connected to any network, with wireless radios physically removed or disabled.

Custom entropy.

Entropy was collected from multiple independent sources — hardware TRNG output, environmental noise, and operator-supplied entropy — combined via a well-reviewed extractor.

Custom encryption of intermediate state.

Any temporary artifacts (e.g., derivation intermediates) that had to persist between ceremony steps were sealed with authenticated symmetric encryption whose keys were destroyed on ceremony conclusion.

Chain-of-custody video.

The physical ceremony was recorded; the recording was hashed and its hash committed to the FORTRESS release ledger.

Ceremony Diagram Fig.

2 — Key generation ceremony flow from air-gapped host to on-chain 4-of-7 multisig.

SECURITY NOTICE The ceremony is a one-time event with respect to the current key set.

Any future re-generation (e.g., a full rotation) follows the same procedure and is announced in advance.

• • • • Air-Gapped Ceremony Host custom entropy Key Material Generated 7 signer keys Shard Distribution HW wallets · SSS no plaintext exposure Multisig Contract 4-of-7 threshold on-chain root of privilege CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 14 — Who Holds the Superuser Keys Superuser keys are distributed across seven independent parties, not concentrated in a single entity.

The distribution is designed to avoid geographic, institutional, and role-based single points of failure.

Key Holder Categories Category Function Typical Count Core Protocol Engineers Maintain CLRTY-1, HELIX, and FORTRESS infrastructure2–3 Security Council Members Independent experts focused on risk management and incident response 2 Infrastructure Operators Node and DePIN contributors with aligned incentives1–2 External Trustees (optional / future) Third-party or institutional participants to increase neutrality0–1 Selection & Verification Each holder passes an identity-verification and background-review step performed by the security council.

Holders sign an operational agreement describing their availability SLA, key-handling obligations, and rotation cooperation duties.

Holders are geographically distributed across at least three jurisdictions.

No two holders share the same primary employer, immediate family, or hardware-wallet supplier.

• • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum

---

{% hint style="info" %}
**Source:** `CLRTY_Whitepaper_Volume_II_Security_Governance_Compliance.pdf` · Chapter 5 of 14
{% endhint %}


<!-- clrty-blocks:v1 -->

{% hint style="warning" %}
**L2**

Institutional whitepaper volume — private diligence tier.
{% endhint %}

```diagram-panel
svg: 09-attestation-ledger.svg
caption: Attestation ledger
```

![Attestation ledger](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/09-attestation-ledger.svg)
*Attestation ledger*
