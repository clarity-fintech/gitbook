# Upload Phase 2 — Prepare .mis + .py Agents

Edit agent templates locally before syncing to Cherry bare-metal.

<div data-required-tier="dev_portal" data-section-id="consumer-phase2-prep">

## Agent templates

Your private node checkout includes starter templates:

- **MIS agents** — compile with the MIS kernel (`bin/misc`)
- **Python agents** — standard `.py` modules for PM2 daemons

## Compile MIS agent (example)

```bash
bin/misc agents/moniversive_parser.mis --check --compact-letters
```

Fix any letter-hash or settlement errors before upload. Settlement is **clrty-1 / 1202**.

## Python dependencies

```bash
pip install -r requirements.txt
```

## Environment

Copy the example env and set secrets locally (**never commit**):

```bash
cp .env.node.example .env.node
source .env.node
```

Required for upload:

- Valid JWT or deploy token from [Phase 1](./upload-phase1-auth.md)
- Cherry SSH access
- Target path `/opt/clrty/swarm-node`

## Checklist before upload

- [ ] MIS agents pass `bin/misc --check --compact-letters`
- [ ] Python agents run locally without errors
- [ ] JWT verified via `/v1/auth/verify`
- [ ] Cherry host reachable via SSH

</div>

## Next phase

→ [Phase 3 — Upload to Cherry Bare-Metal](./upload-phase3-upload.md)
