# Whitepaper Volume II — Security, Governance & Exchange Compliance

◈ CLARITY · $CLRTY · VOLKOV INTELLIGENCE SYSTEMS WHITEPAPER — VOLUME II CLRTY ProtocolSecurity,Governance &ExchangeComplianceAddendum A standalone technical addendum covering protocol integrity, superuser key management, multi-signature governance, decentralization trajectory, and the full 45-item exchange onboarding compliance matrix for the CLRTY-1 Layer-1 substrate, the HELIX private execution engine, and the FORTRESS security layer.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 1 of 67 VERSION 2.0 PUBLICATION 2026 PUBLISHER Volkov Intelligence Systems CLASSIFICATION Public — Institutional Grade © 2026 VOLKOV INTELLIGENCE SYSTEMS · ALL RIGHTS RESERVED CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 2 of 67 Legal Disclaimer & Forward-Looking Statements This document (the “Addendum”, or “V olume II”) is published by V olkov Intelligence Systems (“the Publisher”) as a supplementary technical whitepaper to the primary CLRTY Protocol whitepaper (“V olume I”).

V olume II is scoped exclusively to security, governance, and exchange-compliance considerations.

Nothing contained in this document constitutes an offer to sell, or a solicitation of an offer to buy, any security, token, or digital asset in any jurisdiction.

Neither this document nor any portion of it forms the basis of, or should be relied upon in connection with, any contract or investment decision.

Statements contained in this Addendum that are not statements of historical fact — including, without limitation, statements concerning the design, roadmap, decentralization trajectory, cryptographic security model, and future capabilities of the CLRTY-1 substrate, the HELIX execution engine, the FORTRESS security layer, the PRISM intelligence layer, and associated smart-contract systems — are forward-looking statements.

Forward-looking statements involve known and unknown risks, uncertainties, technological limitations, regulatory dependencies, and other factors that may cause actual outcomes to differ materially from those expressed or implied in this document.

Readers should independently evaluate the technical, legal, tax, and regulatory implications of interacting with CLRTY and should consult qualified professionals prior to any decision.

The Publisher expressly disclaims any obligation to update forward-looking statements to reflect subsequent events.

Where regional restrictions apply, users are responsible for confirming their eligibility.

Document Conventions RISK Callouts flag material risks or trust assumptions.

SECURITY NOTICE Callouts identify hardened controls or attack-surface mitigations.

DESIGN RATIONALE Callouts explain why a control was chosen.

Multi-signature thresholds are written as m-of-n (e.g., 4-of-7).

Time-lock windows are stated in clock hours from queue time.

• • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 3 of 67 Executive Summary V olume II of the CLRTY Whitepaper documents the security, governance, and exchange-compliance posture of the CLRTY Protocol as of the 2026 publication cycle.

Where V olume I established the conceptual foundation of CLRTY as a self-compressing Layer-1 substrate for deterministic execution and intelligence- native assets, V olume II answers a narrower and more operational question: how is the system defended, who holds the keys, how are those keys constrained, and what must be true for the token to be listed and cleared by Tier-1 exchanges?

The Addendum is structured across six parts.

Part I enumerates protocol-integrity controls that gate the code path from developer commit to on-chain execution: signed and tagged Git releases, redundant off-chain data recovery, immutable supply verification, automated vesting, hardcoded emission caps, verifiable burn addresses, third-party liquidity locking, atomic tax logic, resilient oracle design, configurable slippage, multi- signature treasury movement, and formally validated staking-reward mathematics.

Part II details the superuser key ceremony, the 7 independent parties who currently custody root privilege, and the 4-of-7 multi-signature architecture that binds them.

Part III describes the governance architecture layered on top of that key material, including the 3-of-5 Emergency Guardian path, time-locked upgrade authority, and the four-phase decentralization trajectory.

Part IV enumerates the five superuser roles — Root Governance, Protocol Admin, Treasury Controller, Emergency Guardian, and Upgrade Authority — and catalogs each privilege they may exercise together with the safeguards that constrain them.

Part V expands the twenty-item Phase 1 Core Technical & Security checklist covering audit, key management, upgradeability, reentrancy, event emission, chain configuration, wallet compatibility, node stability, finality, snapshot integrity, and asset-recovery procedures.

Part VI expands the fifteen-item Phase 3 Exchange Compliance checklist — legal opinion, AML program, KYC workflow, Travel Rule, sanctions screening, disclosures, jurisdictional mapping, ToS/Privacy, tax-export tooling, DPO contact, entity registration, Proof of Reserves, SOC 2 Type 2, and periodic regulatory reporting — and consolidates all forty- five items into an exchange-onboarding matrix intended to satisfy the intake requirements of every Tier-1, Tier-2, and DEX aggregator we have engaged with.

A central design principle threads through the entire Addendum: trust in CLRTY is distributed, not eliminated.

The Protocol intentionally preserves a small set of privileged controls during early deployment because a Layer-1 substrate with deterministic finality below 400 milliseconds and an in-band AI allocation router (HELIX) cannot safely operate as an ossified system on day one.

Those privileges are held under a coordinated 4-of-7 threshold, executed through hardware-secured signing devices, and delayed by a 24- to 72-hour public time-lock.

As the network matures, privileges migrate stepwise from multisig, to hybrid multisig-plus- token voting, to DAO-controlled execution, and finally to a state where privileged roles are either eliminated or reduced to narrow break-glass powers.

The roadmap is the enforcement mechanism; this document is its published specification.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 4 of 67 SECURITY NOTICE Every privileged action described in this Addendum emits an on-chain event and is observable in the FORTRESS transparency dashboard prior to and following execution.

There are no unlogged administrative paths.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 5 of 67 Table of Contents FRONT MATTER iii v v PART I — PROTOCOL INTEGRITY & CODE ASSURANCE 1 2 3 4 5 6 7 8 9 10 11 12 PART II — SUPERUSER KEY CONTROL & MANAGEMENT 14 15 16 17 18 19 20 Legal Disclaimer & Forward-Looking Statements Executive Summary Document Conventions 1.

Version Control & Git-Tagged Production Code 2.

Database & Off-Chain Data Recovery 3.

Total Supply Verification & Circulating Supply Immutability 4.

Vesting Schedules & Cliff Smart Contracts 5.

Inflationary Controls & Emission Caps 6.

Burn Mechanism & Unspendable Address Verification 7.

Liquidity Locking 8.

Tax / Fee / Reflection Logic 9.

Oracle Reliability (HELIX + Chainlink) 10.

Slippage Tolerance & DEX Interface Safety 11.

Treasury Management 12.

Staking / Rewards APR Mathematical Validation 13.

Key Generation Ceremony 14.

Who Holds the Superuser Keys 15.

4-of-7 Multi-Signature Control Philosophy 16.

Key Management Practices 17.

Multisig Wallet Infrastructure 18.

Time-Locked Execution 19.

Emergency Guardian Key Path CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 6 of 67 21 22 22 PART III — SUPERUSER GOVERNANCE ARCHITECTURE 23 24 24 25 26 27 27 PART IV — SUPERUSER ROLES, PRIVILEGES & SAFEGUARDS 28 29 30 31 32 32 PART V — CORE TECHNICAL & SECURITY CHECKLIST (ITEMS 1–20) 33 35 37 38 PART VI — EXCHANGE COMPLIANCE (ITEMS 31–45) & ONBOARDING 40 41 42 20.

Operational Security 21.

Key Rotation & Recovery 22.

Risk Considerations 23.

Governance Architecture Overview 24.

Primary Governance Multisig (4-of-7) 25.

Emergency Guardian Multisig (3-of-5) 26.

Upgrade Authority & Time-Lock 27.

Execution Flow Examples 28.

Additional Safeguards 29.

Decentralization Trajectory 30.

Why Superuser Privileges Exist 31.

Superuser Roles & Accounts 32.

Enumerated Superuser Privileges 33.

Security Safeguards Against Abuse 34.

Decentralization Roadmap 35.

Risk Disclosure 36.

Items 1–5 — Verification, Audit, Remediation, Pen-Test, HSM 37.

Items 6–10 — Multisig Admin, Circuit Breakers, Gas, Proxies, Reentrancy 38.

Items 11–15 — Events, ChainID, Timing, Arithmetic, Wallets 39.

Items 16–20 — Nodes, Explorer, Finality, Snapshots, Recovery 40.

Legal & Regulatory Foundations (31–35) 41.

Public Disclosures & Jurisdictional Posture (36–40) 42.

Corporate & Institutional Readiness (41–45) CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 7 of 67 43 BACK MATTER 45 47 48 49 50 43.

Exchange Onboarding Playbook — All Venues Appendix A — Consolidated 45-Item Checklist Appendix B — Multisig Threshold Reference Appendix C — Emission & Vesting Schedule Tables Appendix D — Glossary Appendix E — References & Version History CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 8 of 67 Part I — Protocol Integrity & Code Assurance Part I documents the twelve pillars that gate the CLRTY code path from a developer's local commit through to on-chain execution.

Each pillar is stated as an operational requirement, then expanded into (a) a threat model, (b) a design rationale specific to CLRTY-1, HELIX, and FORTRESS, and (c) implementation notes suitable for external verification.

These controls are the substrate on which every subsequent governance and compliance chapter depends.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 9 of 67 Chapter 1 — Version Control & Git-Tagged Production Code Every production artifact deployed to CLRTY-1, HELIX, or the FORTRESS control plane is required to correspond to a signed, tagged, and auditable Git commit.

No binary or bytecode may enter the production pipeline unless it can be reproduced from a specific commit hash held in the canonical monorepo.

This requirement is enforced at three layers: repository policy, CI/CD attestation, and on-chain deployment metadata.

Threat Model Unversioned or untagged production code invites four failure modes: (i) supply-chain injection through unreviewed merges, (ii) undetected divergence between deployed contracts and their published source, (iii) inability to reconstruct the historical state of the codebase during incident response, and (iv) undetectable insider modifications.

Each of these has caused catastrophic losses in prior L1 and DeFi protocols; CLRTY treats version control not as a developer convenience but as a security primitive.

CLRTY Implementation Protected branches.

The main and release/* branches of every core repository (clrty-node, helix-engine, fortress-controls, prism-indexer) are protected against direct pushes.

Signed commits.

Every merge to a release branch must be GPG- or SSH-signed by a keyholder listed in the repository CODEOWNERS manifest.

Unsigned commits are automatically rejected by pre-receive hook.

Mandatory two-reviewer policy.

Pull requests require at least two independent reviewer approvals from the security council or protocol-engineering rotation, with the author explicitly excluded from self- approval.

Semantic versioning.

Releases follow MAJOR.MINOR.PATCH.

Breaking on-chain behavior increments MAJOR.

Every release tag is cryptographically signed and published to the FORTRESS release ledger.

Reproducible builds.

Contracts are compiled inside deterministic build containers pinned to a specific compiler commit; the resulting bytecode hash is committed to the release tag and later matched against the on-chain deployment bytecode by the Etherscan/CLRTY-Explorer verification step.

Release audit trail.

Every tag carries a JSON manifest enumerating: (a) the source commit hash, (b) the compiler and dependency lockfile hashes, (c) the deployer's multisig transaction hash, and (d) the signatures of the two approving reviewers.

SECURITY NOTICE Any deployed contract whose runtime bytecode cannot be reproduced from its published tag is treated as unverified and automatically flagged in the FORTRESS transparency dashboard, regardless of prior audit status.

• • • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 10 of 67 CI/CD Pipeline (conceptual) [dev commit] → [signed PR] → [2-reviewer approval] → [protected merge] ↓ [deterministic build container] → [bytecode hash] ↓ [release tag: signed manifest + bytecode hash + reviewer sigs] ↓ [multisig-signed deployment tx] → [on-chain verification] ↓ [FORTRESS release ledger + Explorer source verification] DESIGN RATIONALE Coupling the Git tag, compiled artifact, deploying multisig transaction, and on- chain bytecode into a single verifiable chain removes the classical "the code on GitHub is not the code on-chain" attack that has repeatedly compromised L1 and DeFi projects.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 11 of 67 Chapter 2 — Database & Off-Chain Data Recovery While CLRTY-1 provides deterministic on-chain state, several supporting subsystems — the PRISM intelligence indexer, HELIX private-execution logs, FORTRESS incident-response records, and user-facing API caches — maintain off-chain data.

V olume II specifies the recovery protocol these systems must satisfy.

Backup Tiering Tier Contents Cadence Location Encryption Hot Live PRISM indexer replicas, HELIX telemetry Continuous streaming replication Multi-AZ within primary region TLS in transit, AES-256-GCM at rest Warm Full nightly snapshots of indexer + governance archive Every 24 hours Second geographic region AES-256-GCM, KMS- managed Cold Weekly immutable snapshots + audit exports Weekly, retained 12 months Object-lock storage (WORM) Client-side envelope encryption Archive Quarterly attestation bundles for regulators Quarterly Two independent providers AES-256-GCM + offline HSM-sealed key Recovery Objectives RPO (Recovery Point Objective): ≤ 5 minutes for hot tier; ≤ 24 hours for warm.

RTO (Recovery Time Objective): ≤ 1 hour to restore query capacity for external integrations; ≤ 15 minutes to restore internal FORTRESS observability.

Restore drills: A full cold-tier restore is performed at least once per calendar quarter into an isolated staging environment, results published to the security council.

RISK Off-chain data compromise cannot alter CLRTY-1 canonical state, but can degrade user-fac

_…continued in source PDF._


<!-- clrty-blocks:v1 -->

{% hint style="info" %}
**Whitepaper source**

**Source:** `whitepaper_vol_ii` · 67 pp pages

◈ CLARITY · $CLRTY · VOLKOV INTELLIGENCE SYSTEMS WHITEPAPER — VOLUME II CLRTY ProtocolSecurity,Governance &ExchangeComplianceAddendum A standalone technical addendum covering protocol integrity, superuser key management, multi-signature governance, decentralization trajectory, and the full 45-item exchange onboarding compliance matrix for the CLRTY-1 Layer-1 substrate, the HELIX private execution engine, and the FORTRESS security layer. CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 1 of 67 VERSION 2.0 PUBLICATION 2026 PUBLISHER Volkov Intelligence Systems CLASSIFICATION Public — Institutional Grade © 2026 VOLKOV INTELLIGENCE SYSTEMS · ALL RIGHTS RESERVED CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 2 of 67 Legal D…
{% endhint %}

{% expandable title="Volume II — opening excerpt" %}
◈ CLARITY · $CLRTY · VOLKOV INTELLIGENCE SYSTEMS WHITEPAPER — VOLUME II CLRTY ProtocolSecurity,Governance &ExchangeComplianceAddendum A standalone technical addendum covering protocol integrity, superuser key management, multi-signature governance, decentralization trajectory, and the full 45-item exchange onboarding compliance matrix for the CLRTY-1 Layer-1 substrate, the HELIX private execution engine, and the FORTRESS security layer. CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 1 of 67 VERSION 2.0 PUBLICATION 2026 PUBLISHER Volkov Intelligence Systems CLASSIFICATION Public — Institutional Grade © 2026 VOLKOV INTELLIGENCE SYSTEMS · ALL RIGHTS RESERVED CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 2 of 67 Legal Disclaimer & Forward-Looking Statements This document (the “Addendum”, or “V olume II”) is published by V olkov Intelligence Systems (“the Publisher”) as a supplementary technical whitepaper to the primary CLRTY Protocol whitepaper (“V olume I”). V olume II is scoped exclusively to security, governance, and exchange-compliance considerations. Nothing contained in this document constitutes an offer to sell, or a solicitation of an offer to buy, any security, token, or digital asset in any jurisdiction. Neither this document nor any portion of it forms the basis of, or should be relied upon in connection with, any contract or investment decision. Statements contained in this Addendum that are not statements of historical fact — including, without limitation, statements concerning the design, roadmap, decentralization trajectory, cryptographic security model, and future capabilities of the CLRTY-1 substrate, the HELIX execution engine, the FORTRESS security layer, the PRISM intelligence layer, and associated smart-contract systems — are forward-looking statements. Forward-looking statements involve known and unknown risks, uncertainties, technological limitations, regulatory dependencies, and other factors that may cause actual outcomes to differ materially from those expressed or implied in this document. Readers should independently evaluate the technical, legal, tax, and regulatory implications of interacting with CLRTY and should consult qualified professionals prior to any decision. The Publisher expressly disclaims any obligation to update forward-looking statements to reflect subsequent events. Where regional restrictions apply, users are responsible for confirming their eligibility. Document Conventions RISK Callouts flag material risks or trust assumptions. SECURITY NOTICE Callouts identify hardened controls or attack-surface mitigations. DESIGN RATIONALE Callouts explain why a control was chosen. Multi-signature thresholds are written as m-of-n (e.g., 4-of-7). Time-lock windows are stated in clock hours from queue time. • • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 3 of 67 Executive Summary V olume II of the CLRTY Whitepaper documents the security, governance, and exchange-compliance posture of the CLRTY Protocol as of the 2026 publication cycle. Where V olume I established the conceptual foundation of CLRTY as a self-compressing Layer-1 substrate for deterministic execution and intelligence- native assets, V olume II answers a narrower and more operational question: how is the system defended, who holds the keys, how are those keys constrained, and what must be true for the token to be listed and cleared by Tier-1 exchanges? The Addendum is structured across six parts. Part I enumerates protocol-integrity controls that gate the code path from developer commit to on-chain execution: signed and tagged Git releases, redundant off-chain data recovery, immutable supply verification, automated vesting, hardcoded emission caps, verifiable burn addresses, third-party liquidity locking, atomic tax logic, resilient oracle design, configurable slippage, multi- signature treasury movement, and formally validated staking-reward mathematics. Part II details the superuser key ceremony, the 7 independent parties who currently custody root privilege, and the 4-of-7 multi-signature architecture that binds them. Part III describes the governance architecture layered on top of that key material, including the 3-of-5 Emergency Guardian path, time-locked upgrade authority, and the four-phase decentralization trajectory. Part IV enumerates the five superuser roles — Root Governance, Protocol Admin, Treasury Controller, Emergency Guardian, and Upgrade Authority — and catalogs each privilege they may exercise together with the safeguards that constrain them. Part V expands the twenty-item Phase 1 Core Technical & Security checklist covering audit, key management, upgradeability, reentrancy, event emission, chain configuration, wallet compatibility, node stability, finality, snapshot integrity, and asset-recovery procedures. Part VI expands the fifteen-item Phase 3 Exchange Compliance checklist — legal opinion, AML program, KYC workflow, Travel Rule, sanctions screening, disclosures, jurisdictional mapping, ToS/Privacy, tax-export tooling, DPO contact, entity registration, Proof of Reserves, SOC 2 Type 2, and periodic regulatory reporting — and consolidates all forty- five items into an exchange-onboarding matrix intended to satisfy the intake requirements of every Tier-1, Tier-2, and DEX aggregator we have engaged with. A central design principle threads through the entire Addendum: trust in CLRTY is distributed, not eliminated. The Protocol intentionally preserves a small set of privileged controls during early deployment because a Layer-1 substrate with deterministic finality below 400 milliseconds and an in-band AI allocation router (HELIX) cannot safely operate as an ossified system on day one. Those privileges are held under a coordinated 4-of-7 threshold, executed through hardware-secured signing devices, and delayed by a 24- to 72-hour public time-lock. As the networ…
{% endexpandable %}

```diagram-panel
svg: 14-regulatory-compliance-middleware.svg
caption: Regulatory compliance middleware
```

![Regulatory compliance middleware](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/14-regulatory-compliance-middleware.svg)
*Regulatory compliance middleware*

```diagram-panel
svg: 27-hsm-rooted-security-fortress.svg
caption: HSM-rooted security fortress
```

![HSM-rooted security fortress](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/27-hsm-rooted-security-fortress.svg)
*HSM-rooted security fortress*
