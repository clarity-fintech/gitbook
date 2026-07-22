---
extract_key: "whitepaper_vol_ii"
chapter: 3
---

# Volume II — Security & Governance — Chapter 3

CI/CD Pipeline (conceptual) [dev commit] → [signed PR] → [2-reviewer approval] → [protected merge] ↓ [deterministic build container] → [bytecode hash] ↓ [release tag: signed manifest + bytecode hash + reviewer sigs] ↓ [multisig-signed deployment tx] → [on-chain verification] ↓ [FORTRESS release ledger + Explorer source verification] DESIGN RATIONALE Coupling the Git tag, compiled artifact, deploying multisig transaction, and on- chain bytecode into a single verifiable chain removes the classical "the code on GitHub is not the code on-chain" attack that has repeatedly compromised L1 and DeFi projects.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 2 — Database & Off-Chain Data Recovery While CLRTY-1 provides deterministic on-chain state, several supporting subsystems — the PRISM intelligence indexer, HELIX private-execution logs, FORTRESS incident-response records, and user-facing API caches — maintain off-chain data.

V olume II specifies the recovery protocol these systems must satisfy.

Backup Tiering Tier Contents Cadence Location Encryption Hot Live PRISM indexer replicas, HELIX telemetry Continuous streaming replication Multi-AZ within primary region TLS in transit, AES-256-GCM at rest Warm Full nightly snapshots of indexer + governance archive Every 24 hours Second geographic region AES-256-GCM, KMS- managed Cold Weekly immutable snapshots + audit exports Weekly, retained 12 months Object-lock storage (WORM) Client-side envelope encryption Archive Quarterly attestation bundles for regulators Quarterly Two independent providers AES-256-GCM + offline HSM-sealed key Recovery Objectives RPO (Recovery Point Objective): ≤ 5 minutes for hot tier; ≤ 24 hours for warm.

RTO (Recovery Time Objective): ≤ 1 hour to restore query capacity for external integrations; ≤ 15 minutes to restore internal FORTRESS observability.

Restore drills: A full cold-tier restore is performed at least once per calendar quarter into an isolated staging environment, results published to the security council.

RISK Off-chain data compromise cannot alter CLRTY-1 canonical state, but can degrade user-facing analytics and delay incident forensics.

Recovery drills exist to keep that degradation bounded and observable.

• • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 3 — Total Supply Verification & Circulating Supply Immutability The relationship between total, circulating, and maximum supply is one of the most audited properties of any token, and one of the most frequent listing-blockers at Tier-1 exchanges.

CLRTY treats supply arithmetic as an immutable invariant, provable at any block height.

Invariants maxSupply is a compile-time constant.

There is no privileged function to modify it.

totalSupply() is bounded by maxSupply at all times.

circulatingSupply() is derived as totalSupply() − Σ(locked, vesting, treasury-held, burn-address) and exposed as a view function.

All exclusion addresses (locker, vesting escrow, treasury, burn) are recorded on-chain and enumerable.

Transparency Dashboard The FORTRESS transparency dashboard publishes a live reconciliation of on-chain supply components, cross- referenced to a signed third-party attestation performed at each quarter-end.

The attestation is published as an IPFS-pinned PDF whose content hash is recorded on-chain.

Component Source Frequency Max Supply Immutable contract constant Constant Total Supply ERC20.totalSupply() Per block Locked Liquidity Third-party locker contract balance Per block Vesting Escrow Vesting contract balances Per block Treasury Treasury multisig balance Per block Burned Balance at unspendable address Per block Attestation Independent auditor Quarterly • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 4 — Vesting Schedules & Cliff Smart Contracts All allocations that are not immediately liquid at TGE are held in on-chain vesting contracts.

Every vesting contract is deployed from a common, audited factory and exposes standardized events for external monitoring.

Cliff & Linear Vesting A CLRTY vesting position is parameterized by (beneficiary, totalAmount, start, cliff, duration, revocable).

Prior to start + cliff, the beneficiary can claim zero tokens.

After the cliff, the vested amount accrues linearly to totalAmount at start + duration.

This behavior mirrors the widely-adopted OpenZeppelin-style vesting semantics and is intentionally boring: every reviewer, exchange, and legal counsel understands its release curve at a glance.

Illustrative Allocation Table Category Share Cliff Vesting Revocable Core Team 15% 12 months 36 months linear Yes (multisig only) Early Investors 18% 6 months 24 months linear No Advisors 3% 6 months 18 months linear Yes (multisig only) Ecosystem & Grants 25% 0 48 months linear (multisig-metered)Multisig-metered Community & Rewards22% 0 Emission-scheduled No Liquidity & Market Ops10% 0 Locked in third-party locker No Public Sale / TGE 7% 0 Fully liquid at TGE No Percentages above are illustrative and consistent with the tokenomics chapter of V olume I.

V olume II is concerned with the enforcement of these releases, not their allocation debate.

Audit Checklist for Vesting Contracts No owner-callable path that alters totalAmount, start, or cliff after deployment.

Revocation, where enabled, requires the primary 4-of-7 multisig and returns unvested tokens to the treasury.

Claim function is reentrancy-guarded and uses pull-based transfers.

All state transitions emit indexed events (Released, Revoked).

Recovery of accidentally-sent unrelated ERC-20s is permitted; recovery of the vesting token itself is not.

• • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 5 — Inflationary Controls & Emission Caps CLRTY's monetary policy is governed by two orthogonal constraints: a hardcoded absolute ceiling on aggregate supply, and a DAO-governed emission schedule that operates strictly beneath that ceiling.

Neither the primary multisig nor the DAO may exceed the hardcoded ceiling; the DAO may only adjust the shape of emissions within it.

Emission Curve Emissions follow a disinflationary decay: a base annual rate e₀ that halves on a defined interval, subject to a floor beyond which additional emission is disabled.

This produces a bounded convergence to maxSupply and a predictable staker-reward runway.

e(t) = e₀ · 2^(−⌊t / T_half⌋) for e(t) ≥ e_floor e(t) = 0 otherwise subject to: Σ minted ≤ maxSupply (immutable invariant) On-Chain Telemetry Emission events are indexed by epoch and reconciled against the theoretical curve nightly.

Deviation beyond a 0.01% tolerance triggers a FORTRESS alert.

DAO adjustments to e₀, T_half, or e_floor route through the primary 4-of-7 and the 24–72h timelock.

DESIGN RATIONALE Hardcoding the ceiling while permitting DAO-shaped emissions within it separates credible scarcity from monetary flexibility.

Neither property can be recovered once conflated.

• • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum

---

{% hint style="info" %}
**Source:** `CLRTY_Whitepaper_Volume_II_Security_Governance_Compliance.pdf` · Chapter 3 of 14
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
