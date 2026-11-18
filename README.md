# JanSahayak AI (जनसहायक AI)

**Tagline:** आपकी डिजिटल सुरक्षा, आपकी सरकारी योजनाओं का साथी।  
*Independent AI Public Information Platform for Indian Citizens*

---

## Overview

JanSahayak AI helps Indian citizens:
1. **Check Suspicious Messages & Links (`POST /api/gemini` · `action: "scam_check"`):** Inspect SMS, WhatsApp forwards, emails, or suspicious URLs for fake KYC alerts, OTP/PIN phishing, Digital Arrest threats, fake job offers, lottery scams, and malicious `.apk` traps — with clear Hindi explanations, AI risk estimates, and actionable safety steps.
2. **Discover Government Schemes (`POST /api/gemini` · `action: "scheme_find"`):** Filter by State, Age Group, Occupation, Category, Education, and Interest to discover relevant Central and State schemes grounded against official `.gov.in` portals.
3. **Learn Cyber Safety:** Bilingual educational guides covering India's 6 most common online frauds alongside National Cyber Crime Helpline **1930** (`cybercrime.gov.in`).

> **Disclaimer:** JanSahayak AI is an independent AI-powered information service and is **not** an official Government of India or State Government portal.

---

## Project Structure

```text
jansahayak-ai/
├── index.html                  # HTML5 entry with bilingual fonts & metadata
├── package.json                # Dependencies and build/start scripts
├── vercel.json                 # Vercel rewrite rules for Vite + /api/gemini
├── server.ts                   # Express server for local dev & Node hosting
├── api/
│   └── gemini.js               # Vercel Serverless Function (POST /api/gemini)
├── src/
│   ├── App.tsx                 # Root application layout & language switcher
│   ├── index.css               # Tailwind CSS v4 theme configuration
│   ├── types.ts                # TypeScript domain interfaces
│   ├── data/translations.ts    # Hindi (default) & English copy + safety guides
│   └── components/             # Modular UI sections
└── README.md
```

---

## Local Setup Instructions (Beginner-Friendly)

### 1. Prerequisites
- **Node.js 20+** and **npm** installed on your computer
- A **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/apikey)

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Edit `.env` and add your Gemini API key:
```env
GEMINI_API_KEY="your_real_gemini_api_key_here"
GEMINI_MODEL="gemini-2.5-flash"
```

> **Development-only fallback option:** For local testing only (`NODE_ENV !== "production"`), `api/gemini.js` also checks `DEV_GEMINI_API_KEY`. **Never** set or enable `DEV_GEMINI_API_KEY` in production, and **never** commit `.env` files to GitHub.

### 4. Run Locally
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## Uploading to GitHub

1. Initialize Git (if not already initialized) and verify `.env` is ignored:
   ```bash
   git status
   ```
   *(Make sure `.env` does NOT appear in `git status`.)*
2. Commit and push to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit: JanSahayak AI"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jansahayak-ai.git
   git push -u origin main
   ```

---

## Deploying to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import your `jansahayak-ai` repository.
3. Keep the detected **Vite** framework settings (`Build Command: npm run build`, `Output Directory: dist`). `vercel.json` automatically routes `/api/gemini` to `api/gemini.js`.
4. Open **Project Settings → Environment Variables** and add:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key
   - **Environment:** Production, Preview, Development
5. Click **Deploy**.

---

## Testing `POST /api/gemini`

### Scam Check Request
```bash
curl -X POST http://localhost:3000/api/gemini \
  -H "Content-Type: application/json" \
  -d '{
    "action": "scam_check",
    "inputType": "sms",
    "language": "hi",
    "content": "URGENT: Your bank KYC expired. Click http://kyc-update-xyz.com now."
  }'
```

### Scheme Finder Request
```bash
curl -X POST http://localhost:3000/api/gemini \
  -H "Content-Type: application/json" \
  -d '{
    "action": "scheme_find",
    "language": "hi",
    "profile": {
      "state": "Uttar Pradesh",
      "ageGroup": "18-25",
      "occupation": "Student",
      "category": "General",
      "education": "10th / 12th Pass",
      "interest": "Education & Scholarships"
    }
  }'
```

---

## Security & Production Rate Limiting Notes

- **Server-side API Key:** `GEMINI_API_KEY` is read strictly on the server inside `api/gemini.js` and is never sent to or bundled into client JavaScript.
- **Input Validation:** Request bodies are capped at 32 KB, text fields are sanitized and length-limited (4,000 characters), and only `POST` requests with allowed `action` types (`scam_check`, `scheme_find`) are accepted.
- **Rate Limiting:** `api/gemini.js` includes a built-in per-IP sliding-window limiter (20 requests/minute per warm serverless instance). For strict multi-instance production rate limiting across all Vercel edge regions, attach **Upstash Redis** (`@upstash/ratelimit`) or **Vercel WAF Rate Limiting Rules** in your Vercel dashboard.
