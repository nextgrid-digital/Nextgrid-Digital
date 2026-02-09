# Self-host Ghost locally

This project reads blog content from Ghost via the Content API. To run Ghost on your machine and connect it to this app, follow one of the options below.

## Option A: Docker Compose (recommended)

From the **nextgrid-digital** project folder:

```bash
docker compose up -d
```

Or use the npm script: **`npm run ghost:start`**

- Ghost runs at **http://localhost:2368**; admin at **http://localhost:2368/ghost**
- Content is stored in a Docker volume (`ghost_data`) so posts survive restarts
- To stop: `docker compose down`

Alternatively, run **`./scripts/start-ghost.sh`** for a single container without Compose (no persistent volume).

Then go to [Create admin user and get Content API key](#3-create-admin-user-and-get-content-api-key) (section 3) below.

## Option B: Ghost CLI (Node 18 or 20)

### 1. Install the official Ghost CLI

Ghost CLI requires **Node 18 or 20** LTS (it does not support Node 24+). If you use nvm:

```bash
nvm install 20
nvm use 20
```

Then install the TryGhost Ghost CLI (v1.x):

```bash
npm install -g ghost-cli@latest
```

Verify: `ghost --version` should show 1.x.

### 2. Create a directory and install Ghost

```bash
mkdir -p ~/ghost-local
cd ~/ghost-local
ghost install local
```

Ghost will install and start. Default URL: **http://localhost:2368**.

- Start later: `ghost start` (from `~/ghost-local`)
- Stop: `ghost stop`

## 3. Create admin user and get Content API key

1. Open **http://localhost:2368/ghost** in a browser.
2. Create your owner account (email, password, site title).
3. Go to **Settings** (gear) → **Integrations** → **Add custom integration**.
4. Name it (e.g. "Nextgrid website"), save, then open it and **copy the Content API key** (you won’t see it again).

## 4. Connect this app to Ghost

1. In this project root, edit **`.env`**.
2. Set:
   - `GHOST_URL=http://localhost:2368` (already set for local)
   - `GHOST_CONTENT_API_KEY=<paste the key you copied>`
3. Restart the dev server: `npm run dev` or `pnpm dev`.

The Thinking section (`/thinking`) and post pages (`/thinking/<slug>`) will then load content from your local Ghost.

## 5. Optional: tags for Thinking sections

In Ghost admin: **Tags** → create tags with slugs:

- `execution` → shows on `/thinking/execution`
- `systems` → shows on `/thinking/systems`
- `learning-in-public` → shows on `/thinking/learning-in-public`

Create posts and assign these tags so they appear on the corresponding pages.
