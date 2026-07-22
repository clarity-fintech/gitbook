---
extract_key: "whitepaper_vol_ii"
chapter: 6
---

# Volume II — Security & Governance — Chapter 6

Chapter 15 — 4-of-7 Multi-Signature Control Philosophy Keys are held by seven independent parties using a 4-of-7 multisig.

Any critical action — contract upgrade, treasury movement, parameter change, or node-governance decision — requires four signatures.

No individual has unilateral control.

This philosophy is not a marketing claim; it is a cryptographic property enforced by the multisig contract and observable by any external party.

DESIGN RATIONALE4-of-7 is a compromise between operational liveness (a small number of holders can be temporarily unavailable without freezing the protocol) and adversarial resistance (compromise of three keys is insufficient).

It is deliberately chosen over the more common 3-of-5 for the primary set because the added redundancy is worth the marginal coordination cost when the powers are as broad as those documented in Part IV .

Threshold Diagram Fig.

3 — Four independent signatures from seven distributed keyholders are required to execute any privileged action.

1 2 3 4 5 6 7 7 Signers Multisig Contract Threshold: 4-of-7 Privileged Action upgrade · treasury · pause CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 16 — Key Management Practices Signer keys are never stored in plain text or in hot wallets.

Signers are required to use hardware-secured storage; where the signing workflow permits it, air-gapped devices are used for the highest-value keys.

Storage Requirements Hardware wallets.

Ledger, Trezor, or equivalent devices for standard signers.

Air-gapped signing.

High-value keys sign inside a device that never connects to a network; signed transactions are transported via QR or removable media only.

Secure enclaves.

Where mobile signing is used, keys are pinned to a secure enclave with biometric attestation.

Operational Separation Primary governance keys are kept in cold storage.

Additional distinct keys exist for governance voting, emergency response, and operational execution, so that the compromise of one operational key cannot escalate into privileged action.

Key Set Storage Class Signing Mode Primary Governance (4-of-7) Cold, air-gapped preferred Batched, deliberate Emergency Guardian (3-of-5) Cold, but faster-access Break-glass, pre-drilled Governance V oting Warm hardware Per-vote Operational Execution Warm hardware Per-operation, scoped • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 17 — Multisig Wallet Infrastructure Keys are connected through a multi-signature contract of Gnosis Safe-class design.

The contract enforces threshold approvals in-protocol; no signer can move funds, upgrade contracts, or pause the system without the required additional signatures.

Contract-Enforced Guarantees Threshold parameter is not modifiable except by the multisig itself, and only above a defined floor.

Signer addition, removal, and replacement events are enumerable on-chain.

Every executed transaction is a first-class event with the full signer set attached, enabling third-party dashboards to reconstruct governance history.

Nonce management prevents replay of signed intents across contexts.

• • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 18 — Time-Locked Execution High-impact actions are routed through time-lock contracts with a delay window typically between 24 and 72 hours.

The time-lock enables public visibility, community monitoring, and — critically — intervention if a malicious or erroneous action reaches the queue.

Time-Lock Mechanics An approved multisig transaction targeting a governed contract is not executed immediately; it is queued in the time-lock, with target, calldata, and eta published on-chain.

During the queued window, any independent observer — including the security council — may review the queued action.

If a review determines the action is malicious or erroneous, the same 4-of-7 multisig can cancel the queued action; the Emergency Guardians can additionally halt affected subsystems via the 3-of-5 path.

After the delay elapses, the queued action becomes executable and may be triggered by any signer.

Fig.

4 — Time-locked upgrade path: proposal → 4-of-7 approval → 24–72h queue → execution or cancellation.

• • • • Proposal created & published 4-of-7 Approve signatures on-chain Time-Lock Queue 24–72h public window Execution or cancellation CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 19 — Emergency Guardian Key Path A separate key set exists for rapid response to security incidents.

Its threshold is lower — 3-of-5 — reflecting the need for speed, and its scope is deliberately narrow.

Guardian Scope Pause and unpause contracts.

Freeze specific accounts implicated in an active exploit.

Activate protocol circuit breakers.

Cancel a queued time-locked action.

Explicitly excluded from Guardian scope: moving funds, minting or burning tokens, altering tokenomics, upgrading contract logic, changing governance thresholds.

Those actions are reachable only through the primary 4-of-7 multisig and its time-lock.

SECURITY NOTICE The Emergency Guardian threshold is intentionally lower than the primary multisig so that a fast-moving exploit can be blunted within minutes; the scope is intentionally narrower so that a compromised Guardian set cannot escalate that speed into economic damage.

• • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum

---

{% hint style="info" %}
**Source:** `CLRTY_Whitepaper_Volume_II_Security_Governance_Compliance.pdf` · Chapter 6 of 14
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
