---
extract_key: "whitepaper_vol_ii"
chapter: 12
---

# Volume II — Security & Governance — Chapter 12

Chapter 41 — Public Disclosures & Jurisdictional Posture (Items 36–40) 36.

Risk Disclosure Clear, public risk statements are maintained for the $CLRTY token and the CLRTY Protocol.

Disclosures cover smart-contract risk, oracle risk, governance risk, market risk, and regulatory risk.

V olume II itself (see Chapter 35) is part of the disclosure record.

37.

Jurisdictional Mapping CLRTY publishes and maintains a list of jurisdictions from which access to certain functionality is restricted.

Restrictions are implemented via geo-IP controls at platform surfaces and communicated in the Terms of Service.

38.

Privacy Policy The privacy policy documents the categories of personal data collected, the purposes for which they are processed, the retention periods, the cookie usage, and the mechanisms for data-subject rights.

It is updated on any material change to processing activities.

39.

Terms of Service Legally vetted Terms of Service are publicly hosted, versioned, and made available to every user prior to platform interaction.

Material amendments trigger a re-acceptance requirement where applicable.

40.

Tax Reporting Tools Users may export their transaction history in CSV format and, at institutional tiers, through authenticated API endpoints.

Exports include timestamps, counterparty addresses, asset amounts, and category tags sufficient to feed into standard crypto tax software.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 42 — Corporate & Institutional Readiness (Items 41–45) 41.

Contact Information (DPO) A verified Data Protection Officer contact is maintained and published on the CLRTY website and in the privacy policy.

Where a jurisdictional representative is required (e.g., under GDPR), the representative is designated and disclosed.

42.

Entity Registration The operating entity's Certificate of Incorporation and equivalent registration documents are held on file and can be shared with regulated counterparties under standard due-diligence procedures.

43.

Proof of Reserves Where CLRTY or a related product acts as a custodian, a Proof of Reserves methodology is defined and executed on a recurring cadence.

The methodology combines on-chain balance verification with third-party attestation and Merkle-tree user-inclusion proofs.

44.

SOC 2 Compliance For any CLRTY entity acting as a custodian or handling sensitive customer data at scale, SOC 2 Type II readiness is pursued, covering Security, Availability, and Confidentiality trust-service criteria.

Progress is tracked and disclosed to institutional counterparties under NDA.

45.

Regulatory Updates A defined process exists for periodic regulatory reporting and for tracking regulatory change relevant to CLRTY operations.

Ownership of this process is assigned to the compliance function and reviewed by the security council.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 43 — Exchange Onboarding Playbook — All Venues The forty-five items collected across Parts I–VI form the complete exchange onboarding dossier that CLRTY submits to any listing venue.

Chapter 43 maps those items to the typical intake requirements of Tier-1 centralized exchanges, Tier-2 exchanges, and DEX aggregators.

Venue Requirement Matrix Item Group Tier-1 CEX Tier-2 CEX DEX Aggregator Items 1–5 (Verification, Audit, Remediation, Pen-Test, HSM) Required Required Required Items 6–10 (Multisig admin, breakers, gas, proxy, reentrancy) Required Required Required Items 11–15 (Events, chainID, timing, arithmetic, wallets) Required Required Recommended Items 16–20 (Nodes, explorer, finality, snapshots, recovery) Required Required Recommended Items 21–30 (Tokenomics safety — Part I) Required Required Required Items 31–35 (Legal opinion, AML, KYC, Travel Rule, sanctions) Required Required Partial (venue- dependent) Items 36–40 (Risk disclosure, jurisdictional, privacy, ToS, tax exports) Required Required Required Items 41–45 (DPO, entity, PoR, SOC 2, reg reporting)Required RecommendedOptional DESIGN RATIONALE Publishing the same forty-five-item dossier to every venue removes ambiguity, prevents the divergence-of-representations problem that arises when different intake teams receive different narratives, and lets any external party independently verify that the story on-chain matches the story on the listing form.

Submission Package V olume II (this document) — technical, governance, compliance narrative.• CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Latest third-party audit report(s), full text.

Legal opinion — under NDA.

AML policy, KYC workflow diagram, sanctions-screening runbook.

Privacy Policy and Terms of Service links (public).

DPO contact card.

Entity registration documents — under NDA.

Proof-of-Reserves methodology (where applicable).

SOC 2 Type II status letter (where applicable).

Multisig addresses, time-lock address, Guardian multisig address — public.

Emission and vesting schedule tables (Appendix C).

• • • • • • • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Appendix A — Consolidated 45-Item Checklist Appendix A consolidates the forty-five items covered across V olume II into a single reference dossier.

Items 1– 20 constitute the Phase 1 Core Technical & Security checklist.

Items 21–30 are the Phase 2 Tokenomics & Contract Safety checklist, corresponding to Chapters 1–12 of Part I.

Items 31–45 are the Phase 3 Exchange Compliance checklist covered in Part VI.

Phase 1 — Core Technical & Security (1–20) # Item Reference 1 Source Code Verification Ch.

36 2 Third-Party Security Audit Ch.

36 3 Audit Remediation Ch.

36 4 Penetration Testing Ch.

36 5 Private Key Management (HSM / Multisig) Ch.

36, Part II 6 Admin / Governance Access Multisig Ch.

37, Part III 7 Circuit Breakers (Pause) Ch.

37, Ch.

19 8 Gas Optimization Ch.

37 9 Upgradeability Path (Proxy-Admin) Ch.

37, Ch.

26 10 Reentrancy Guards Ch.

37, Ch.

8 11 Event Emission Ch.

38 12 ChainID / Network Config Ch.

38 13 Timestamp / Block Dependencies Ch.

38 14 Overflow / Underflow Protection Ch.

38 15 Wallet Compatibility Ch.

38 16 Node Stability Ch.

39 CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum

---

{% hint style="info" %}
**Source:** `CLRTY_Whitepaper_Volume_II_Security_Governance_Compliance.pdf` · Chapter 12 of 14
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
