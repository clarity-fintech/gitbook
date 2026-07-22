---
api: "gitbook-ask"
---

# GitBook Ask API — Clarity Docs

> Matches the **Developer tools → API → Get started** panel in GitBook (org **Clarity**, site **Clarity Docs**).

Use GitBook Ask to query all uploaded whitepapers, link corpus pages, and walkthrough content programmatically.

## Endpoint

```http
POST /v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask HTTP/1.1
Host: api.gitbook.com
Content-Type: application/json
Accept: */*
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "question": "How do I get started?",
  "scope": {
    "mode": "default"
  }
}
```

## cURL

```bash
curl -X POST "https://api.gitbook.com/v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "question": "How do I get started?",
    "scope": { "mode": "default" }
  }'
```

## Scope modes

{% tabs %}
{% tab title="default" %}
Search all published spaces linked to **Clarity Docs** (`${SITE_URL}`).
{% endtab %}
{% tab title="space" %}
Restrict to a single space ID (Public, Developer, Institutional, or Investor).
{% endtab %}
{% tab title="page" %}
Restrict to a specific page path within a space.
{% endtab %}
{% endtabs %}

## Example questions

{% stepper %}
{% step %}
### Whitepaper access

“Where is Volume II security governance and the 45-item exchange matrix?”
{% endstep %}
{% step %}
### Investor docs

“Summarize the PPM risk factors and token warrant terms.”
{% endstep %}
{% step %}
### Developer spec

“Explain Υ(σ,T) notation and HELIX execution in the yellowpaper.”
{% endstep %}
{% step %}
### Link corpus

“List all exchange.clarity-fintech.com URLs in the documentation index.”
{% endstep %}
{% endstepper %}

## Developer dashboard

Configure tokens at [app.gitbook.com/account/developer](https://app.gitbook.com/account/developer).

| Field | Value |
| --- | --- |
| Organization | Clarity |
| Organization ID | `6MCNfiz1cpjlR5LX4kWw` |
| Site | Clarity Docs |
| Site ID | `site_xTRE6` |
| Live site | [https://clarity-7.gitbook.io/clarity-docs/](https://clarity-7.gitbook.io/clarity-docs/) |


<!-- clrty-blocks:v1 -->

{% hint style="success" %}
**Ask API**

This page mirrors the **GitBook Developer → API → Get started** panel. Use org `6MCNfiz1cpjlR5LX4kWw` and site `site_xTRE6`.
{% endhint %}

{% tabs %}
{% tab title="HTTP" %}
POST `api.gitbook.com/v1/orgs/…/sites/…/ask` with Bearer token.
{% endtab %}
{% tab title="Scope" %}
`default` searches all linked spaces; use `space` or `page` to narrow.
{% endtab %}
{% tab title="Corpus" %}
320+ URLs + all whitepaper chapters indexed for Ask retrieval.
{% endtab %}
{% endtabs %}
