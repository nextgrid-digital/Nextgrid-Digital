# Start here – get your blog working (no coding needed)

**If http://localhost:2368/ghost doesn’t load** → Ghost isn’t running yet. Do **Part 1** below first (Docker or Node), then try that URL again.

Your Nextgrid website is already set up. To show blog posts on the **Thinking** section, we need to start a small app called **Ghost** (your blog editor) and connect it once. Here’s what **you** need to do.

---

## Part 1: Get Ghost running (choose one option)

### Option A – Easiest: use Docker (recommended)

1. **Install Docker Desktop** (if you don’t have it):
   - Go to: **https://www.docker.com/products/docker-desktop/**
   - Download **Docker Desktop for Mac**, install it, and open it. Wait until it says it’s running.

2. **Start Ghost** – open **Terminal**, go to the project folder **nextgrid-digital**, then run **one** of these:

   **Preferred (Docker Compose – keeps your posts across restarts):**
   ```bash
   docker compose up -d
   ```
   Or from the project root: **`npm run ghost:start`**

   **Alternative (single container, no volume):**
   ```bash
   docker run -d --name ghost-nextgrid -p 2368:2368 -e NODE_ENV=development ghost:latest
   ```
   Or use the script: **`./scripts/start-ghost.sh`**

   After a few seconds, Ghost is running.

3. Go to **Part 2** below.

---

### Option B – Without Docker: use Node 20

1. **Install Node 20** (Ghost doesn’t work with Node 24 yet):
   - Go to: **https://nodejs.org/**
   - Download the **LTS** version (green button), then install it (double‑click the file and follow the steps).

2. **Open Terminal** and run these lines **one by one** (copy each, paste, press Enter):

   ```bash
   mkdir -p ~/ghost-local && cd ~/ghost-local
   ```

   ```bash
   npm install -g ghost-cli@latest
   ```

   ```bash
   ghost install local
   ```

   When it finishes, Ghost is running.

3. Go to **Part 2** below.

---

## Part 2: Create your Ghost account and get the key (you do this once)

1. **Open this link in your browser:**  
   **http://localhost:2368/ghost**

2. **Create your account**
   - Enter your **email** and **password** (remember this – you’ll use it to log in to Ghost later).
   - Enter a **site title** (e.g. “Nextgrid Blog”) and click **Create account**.

3. **Get the “Content API key”**
   - In Ghost, click the **⚙️ Settings** (gear) icon at the bottom left.
   - Click **Integrations** in the left menu.
   - Click **Add custom integration**.
   - Name it e.g. **Nextgrid website**, then click **Create**.
   - Open that integration and find **Content API key**.
   - Click **Copy** next to the key (long text). You’ll use it in the next part.

---

## Part 3: Connect the website to Ghost

1. **Open the file where the key goes**
   - In Cursor, in the left sidebar, open your project folder: **Nextgrid Digital - Website** → **nextgrid-digital**.
   - Click the file **`.env`** (it might be under the list or you may need to “Show hidden files” or scroll).

2. **Paste your key**
   - Find the line: `GHOST_CONTENT_API_KEY=`
   - Click after the `=` and **paste** the key you copied (no spaces).  
   - The line should look like:  
     `GHOST_CONTENT_API_KEY=abc123def456...`  
     (your key will be much longer.)

3. **Save the file** (Cmd+S).

4. **Restart the website**
   - If the Nextgrid site is already running in a terminal, press **Ctrl+C** to stop it.
   - Then run again: **`npm run dev`** (or **`pnpm dev`** if you use that).
   - Open **http://localhost:3000** and go to **Thinking** – your Ghost posts should appear.

---

## Quick reference

| What              | URL or action                          |
|-------------------|----------------------------------------|
| Ghost admin (write posts) | http://localhost:2368/ghost        |
| Your Nextgrid site       | http://localhost:3000              |
| Where to paste the key   | In the **`.env`** file, after `GHOST_CONTENT_API_KEY=` |

If you use **Docker Compose** and restart your Mac, start Ghost again with:

```bash
docker compose up -d
```

If you used the **single-container** Docker command or `start-ghost.sh`, run:

```bash
docker start ghost-nextgrid
```

If you used **Option B** (Node), from the `~/ghost-local` folder run:

```bash
ghost start
```

If anything doesn’t work, say what you see (e.g. “page won’t load” or “Thinking is empty”) and we can fix it step by step.
