# Portfolio Website

A modern, professional portfolio website for a full-stack developer built with Next.js, React, Tailwind CSS, and PostgreSQL.

## Tech Stack

| Layer      | Technology                       |
| ---------- | -------------------------------- |
| Frontend   | Next.js 14, React 18, TypeScript |
| UI         | Tailwind CSS, Lucide Icons       |
| Animations | Framer Motion                    |
| Backend    | Node.js, Express                 |
| Database   | PostgreSQL (Supabase)            |
| Deployment | Vercel + Render + Supabase       |

## Quick Start

```bash
# Install dependencies
cd client && npm install
cd ../server && npm install

# Run locally
cd client && npm run dev      # Frontend: http://localhost:3000
cd server && npm run dev     # Backend: http://localhost:5000
```

## Project Structure

```
portfolio/
├── client/               # Next.js frontend (deploy to Vercel)
│   ├── src/
│   │   ├── app/         # App router pages
│   │   ├── components/  # React components
│   │   └── lib/         # Utilities
│   └── ...
├── server/              # Express API (deploy to Render)
│   ├── src/
│   │   ├── routes/     # API routes
│   │   └── db/         # Database connection
│   └── ...
├── database/            # PostgreSQL schema
└── DEPLOY.md           # Deployment guide
```

## Environment Variables

### Server (`.env`)

```
PORT=5000
DATABASE_URL=postgresql://...
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
```

### Client (`.env.local`)

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## License

MIT
