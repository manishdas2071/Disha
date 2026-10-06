# Disha (Direction) 🧭 — AI Precision Vocational & Career Guidance Platform

> **Disha (Direction): Discover your true trajectory with AI-precision guidance.**  
> Built for **Smart India Hackathon (SIH 2026)** to address the parental perception gap in vocational training by engaging students and families jointly with verified outcome data, multilingual conversational AI, and NSQF progression pathways.

📄 Full documentation & testing steps: See [CHANGES_AND_TESTING_GUIDE.md](./CHANGES_AND_TESTING_GUIDE.md)

---

## ✨ Core SIH 2026 Features

- **Joint Family AI Conversational Counselling (`/family-counselling`)** – Dual-perspective dialogue (Joint, Parent, Learner) in regional languages (English, Hindi, Assamese, Bengali, Tamil), with Text-to-Speech audio and voice input.
- **Verified Vocational Outcome Registry (`/outcomes`)** – Audited post-training earnings, placement rates (86%-92%), certified institutes (ITIs, NSTIs, PMKVYs), and NSQF progression ladders.
- **Family Context Explainer & Financial ROI (`/explainer`)** – Contextual calculator tailored to household income and location, comparing vocational pathways vs 3-4 year general degrees.
- **Scheme Administrator Intelligence Dashboard (`/admin`)** – Real-time tracking of family resistance drivers, district resistance hotspots, sentiment shifts, and live human escalation tickets.
- **Human Counsellor Escalation Gateway (`/contactus`)** – 1-click booking to connect with certified regional counsellors, backed by Skill India Helpline (1800-123-9626).
- **Stream & Trade Exploration** – Science, Arts, Commerce, and Vocational & Technical Trades.
- **Secure Authentication** – Email/Password, Google Sign-in, plus instant Demo Family / Guest access.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, React Router, Font Awesome |
| Authentication | Firebase Authentication (Email/Password + Google) |
| Hosting | Vercel |
| Academic MERN version | Node.js, Express, MongoDB (Mongoose), JWT, Bcrypt, Nodemailer — kept in [`local-mern-backend/`](./local-mern-backend) |

> **Two ways to run Marg**
> - **Deployed / main version (`frontend/`)** – no database or server needed. Authentication is handled by Firebase, so there are no database credentials to protect.
> - **Academic MERN version (`local-mern-backend/`)** – the original Express + MongoDB + JWT backend described in the project report. It is kept for reference and local experiments and is **not** used by the deployed site.

## 📁 Project Structure

```
Marg/
├── frontend/                 # React + Vite app (this is what gets deployed)
│   ├── src/
│   │   ├── components/       # Navbar, Footer, ProtectedRoute, Alert
│   │   ├── context/          # AuthContext (Firebase session state)
│   │   ├── pages/            # Home, Careers, CareerDetails, Jobs, Sign, ...
│   │   └── firebase.js       # Firebase initialisation (reads env variables)
│   ├── vercel.json           # SPA rewrite so deep links work
│   └── .env.example          # Names of the required environment variables
├── local-mern-backend/       # Original Express + MongoDB backend (optional)
└── README.md
```

## 🚀 Run Locally

**Prerequisites:** Node.js 18+ and a free [Firebase](https://console.firebase.google.com) project.

```bash
git clone https://github.com/manishdas2071/Marg.git
cd Marg/frontend
npm install
cp .env.example .env        # Windows: copy .env.example .env
# fill in the VITE_FIREBASE_* values in .env
npm run dev
```

Open http://localhost:5173.

### Firebase setup (one time)
1. Firebase Console → **Add project** → add a **Web app** and copy its config into `.env`.
2. **Authentication → Sign-in method** → enable **Email/Password** and **Google**.
3. **Authentication → Settings → Authorized domains** → add `localhost` and your Vercel domain.

## ☁️ Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full step-by-step Vercel guide.

## 🔒 Security Notes

- No secrets are committed; all configuration is read from environment variables (`.env` is git-ignored).
- Passwords are never stored by the app — Firebase handles hashing and sessions.
- Private pages are guarded on the client by `<ProtectedRoute>`. The career and job data is public-by-design static content bundled with the app, so the guard is a sign-in prompt for user experience, not a data-security boundary.

## 🔭 Future Scope

- Move job listings to a database with an admin dashboard.
- Visual step-by-step learning roadmaps for each career.
- Quiz-based career assessment, mentor connect and AI-based course recommendations.
- Working contact form (email or database backed).

## 👥 Team

| Name | Roll No. |
|---|---|
| Manjit Kumar Das | 2481105744 |
| Royel Nath | 2481105763 |
| Suraj Saikia | 2481105774 |
| Manash Pratim Borah | 2481105758 |

**Guide:** Dhrubajyoti Malakar · **Department:** Computer Science & Engineering, Dhemaji Engineering College

## 📜 License

Released under the MIT License — see [LICENSE](./LICENSE) (add the file on GitHub via *Add file → Create new file → LICENSE → Choose a license template → MIT*).
