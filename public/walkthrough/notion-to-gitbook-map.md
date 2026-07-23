# Notion → GitBook section map

> Canonical Notion hub: [Clarity Documentation](https://app.notion.com/p/clrty-1/Clarity-Documentation-39e5f7f81f9e80f69925c59cf6b07173)

Every Notion section from the hub is mapped to a GitBook walkthrough with **multi-tab code menus** and **copy-paste terminal blocks**.

## Full section map

| # | GitBook walkthrough | Notion source |
| --- | --- | --- |
| 1 | [Home / CLRTY-1 Documentation](code-walkthrough-hub.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e8122bdc9df99d197f2c1) |
| 2 | [Introduction](code-walkthrough-hub.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e81f9bd0eca06f7144840) |
| 3 | [Getting Started](getting-started-walkthrough.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e81b896a4ef9c6b8d5be6) |
| 4 | [Core Concepts](code-walkthrough-hub.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e81b3a547fa0847ee8ffb) |
| 5 | [Tokens on CLRTY](code-walkthrough-hub.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e8117ab53c6cf3150a4a4) |
| 6 | [Developing Programs](developer-console.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e8148b0eec964787a0370) |
| 7 | [Frontend & SDKs](developer-console.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e8110bb03e27aa98bef64) |
| 8 | [Architecture](helix-mirra-integration.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e8160885edd156e369c02) |
| 9 | [Validators / Systems](validators-and-nodes.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e8122b92ef819bd781d55) |
| 10 | [Command Line Tools](cli-reference-walkthrough.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e81f4ae21c994fad820df) |
| 11 | [PRISM Operational Framework](helix-mirra-integration.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e81708388d1b45b177935) |
| 12 | [References](code-walkthrough-hub.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e815b8141d38d03f488fe) |
| 13 | [Moniversive Network Builds](rpc-setup-guide.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e81c49797e0089ed72a97) |
| 14 | [RPC, Staking & Network Integration](rpc-setup-guide.md) | [Notion](https://app.notion.com/p/3a15f7f81f9e817eadeffc2b2785fd82) |
| 15 | [Service Repos & Skill Plugs](developer-console.md) | [Notion](https://app.notion.com/p/3a15f7f81f9e81b09744c5347821b12b) |
| 16 | [Full Staking Blueprint](staking-network-guide.md) | [Notion](https://app.notion.com/p/3a15f7f81f9e81cb8cc1e458812d936a) |
| 17 | [Where Validators Exist](validators-and-nodes.md) | [Notion](https://app.notion.com/p/3a15f7f81f9e812f93dce3bddcd1bfbb) |
| 18 | [Nano Spec 100](cli-reference-walkthrough.md) | [Notion](https://app.notion.com/p/3a15f7f81f9e81f6bd5bd7574ed8123d) |
| 19 | [Pathfinding Engine](helix-mirra-integration.md) | [Notion](https://app.notion.com/p/3a15f7f81f9e810cb43fe03a4a0fe6c7) |
| 20 | [Wallet Integration](wallet-installation-guide.md) | [Notion](https://app.notion.com/p/39e5f7f81f9e81598df6d4314d5cf7a8) |
| 21 | [Chrome Extension](chrome-extension-guide.md) | [Notion](https://app.notion.com/p/wallet-extension) |
| 22 | [Whitepaper & Access](whitepaper-and-access.md) | [Notion](https://app.notion.com/p/whitepapers) |

## Moniversive clusters (from Notion)

| Cluster | URL |
| --- | --- |
| Devnet | https://api.devnet.clarity-fintech.com |
| Testnet | https://api.testnet.clarity-fintech.com |
| Mainnet | https://rpc.clarity-fintech.com |
| Local | http://127.0.0.1:8545 |

## Whitepaper PDF sources (Downloads pack)

All PDFs/HTML from the CLRTY Downloads pack are extracted to full chapter pages:

| Tier | Location |
| --- | --- |
| Public | [Whitepapers](../whitepapers/) · [AI Overview](../ai-overview/) |
| Developer | [Yellowpaper](../../developer/yellowpaper/) · [Investor edition](../../developer/whitepaper/) |
| Institutional | [Vol II/III](../../institutional/whitepaper/) · [Compliance](../../institutional/compliance/) |
| Investor | [PPM / Term sheet / Warrant](../../investor-private/offering/) |

## Link corpus (398+ URLs)

{% hint style="success" %}
**320+ indexed URLs**

This guide is indexed in the **398+ URL link corpus**. Browse all Clarity surfaces: [Link corpus index](../reference/link-corpus/README.md). Query programmatically via [GitBook Ask API](../reference/gitbook-ask-api.md).
{% endhint %}

## GitBook Ask

```bash
curl -X POST "https://api.gitbook.com/v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"question":"Map Notion RPC guide to GitBook","scope":{"mode":"default"}}'
```
