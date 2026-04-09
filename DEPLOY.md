# Deployment Guide

## Full Stack: Vercel + Render + Supabase

This guide walks you through deploying your portfolio completely free.

---

## Step 1: Supabase (Database)

### Create Project

1. Go to [supabase.com](https://supabase.com) → "Start your project"
2. Sign up with GitHub (no credit card needed)
3. Create new project:
    - **Name:** portfolio-db
    - **Database Password:** Create a strong password (save it!)
    - **Region:** Choose closest to you

### Import Schema

1. In Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Copy contents of `database/schema.sql`
3. Click **Run** to execute
4. Verify tables created: **Table Editor** → should see `projects`, `skills`, `contact_messages`

### Get Connection String

1. Go to **Project Settings** → **Database**
2. Find **Connection String** (or URI)
3. Copy it - format: `postgresql://postgres:[PASSWORD]@db.[REF].supabase.co:5432/postgres`

---

## Step 2: Render (API Server)

### Create Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub (free)

### Deploy Backend

1. Click **New** → **Web Service**
2. Connect your GitHub repository
3. Configure:
    - **Name:** portfolio-api
    - **Environment:** Node
    - **Build Command:** `npm install`
    - **Start Command:** `npm run build && npm start`
    - **Plan:** Free

4. Add Environment Variables:
    - `DATABASE_URL` = your Supabase connection string
    - `NODE_ENV` = `production`
    - `PORT` = `5000`

5. Click **Create Web Service**

**Wait for deployment** (~2-3 minutes)

### Get API URL

After deploy, you'll get a URL like: `https://portfolio-api-xxx.onrender.com`

---

## Step 3: Vercel (Frontend)

### Connect Frontend

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Select `client/` folder as root (or configure in vercel.json)

### Configure Environment

Add this variable in Vercel:

- `NEXT_PUBLIC_API_URL` = `https://your-render-api.onrender.com/api`

### Deploy

Click **Deploy** - done!

---

## Architecture Diagram

```
┌─────────────────┐     HTTPS      ┌─────────────────┐
│   Vercel        │  ──────────►   │   Render        │
│   (Frontend)    │   API Calls    │   (Backend)     │
└────────┬────────┘                └────────┬────────┘
         │                                  │
         │                                  │ PostgreSQL
         │                                  ▼
         │                          ┌─────────────────┐
         │                          │   Supabase      │
         │                          │   (Database)    │
         │                          └─────────────────┘
         │
         │ Static Assets
         ▼
    [User Browser]
```

---

## URLs After Deployment

| Service  | URL                                      | Purpose                 |
| -------- | ---------------------------------------- | ----------------------- |
| Frontend | `https://yourname.vercel.app`            | Portfolio website       |
| API      | `https://portfolio-api.onrender.com/api` | REST endpoints          |
| Database | Internal                                 | PostgreSQL via Supabase |

---

## Troubleshooting

### Cold Starts

- **Render:** Free tier sleeps after 15min. First request takes ~10-30s.
- **Fix:** Use a uptime monitor or upgrade to $7/mo for always-on

### Database Connection

- Verify `DATABASE_URL` is correct (check password has no special chars or URL-encode them)
- In Supabase: **Settings** → **API** → ensure "Allow connections from anywhere" is enabled

### CORS Issues

- Update CORS in `server/src/index.ts` to allow your Vercel domain

---

## Update Frontend API URL

After Render deploys, update client:

```bash
# In Vercel dashboard, add:
NEXT_PUBLIC_API_URL=https://your-render-api.onrender.com/api
```

Or update locally in `client/.env.local` and redeploy.
