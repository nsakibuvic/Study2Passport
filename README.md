# Study2Passport

**Your Global Education Partner** — a modern marketing and lead-generation website for Study2Passport, an international study-abroad consultancy.

Study2Passport helps ambitious students secure admissions, funding, and visas for **Master's**, **PhD**, and **undergraduate** programs at top universities worldwide. The site presents the consultancy's services, showcases real success stories, publishes funded-opportunity articles, and captures consultation requests through a contact form.

- **Website:** [study2passport.com](https://study2passport.com) *(when deployed)*
- **Email:** info@study2passport.com
- **Facebook:** [facebook.com/study2passport](https://www.facebook.com/study2passport/) — 15k+ followers

---

## About the App

This is a **Next.js** web application — not a student portal or CRM. It is a **public-facing consultancy website** designed to:

1. Explain what Study2Passport offers and how the process works
2. Build trust through stats, success stories, and blog content
3. Drive free consultation bookings via the contact page
4. Stay fast and lightweight with minimal dependencies

### Who it serves

| Audience | What they get |
|----------|---------------|
| Master's & PhD applicants | Admissions strategy, funding support, graduate visa guidance |
| Undergraduate students | Affordable degree pathways across 100+ countries |
| Students with visa challenges | First-time visas, re-applications after refusal, dependent support |
| Prospective clients | Free discovery consultation and transparent step-by-step process |

### Key numbers highlighted on the site

- **1000+** affiliated universities
- **100+** countries worldwide
- **15k+** Facebook community members
- Recent wins: funded PhD at **University of Antwerp** and **Erasmus Mundus** scholarship in Oceanography
- **5+** students currently advancing through final interview rounds

---

## Services

Study2Passport provides end-to-end support — from the first conversation to the first day on campus.

### Master's & PhD — Admissions, Funding & Visa

Specialized placement into competitive, often **fully-funded** graduate programs.

**University Admissions**
- Strategic university shortlisting from a global partner network
- Program fit assessment based on research interests or career goals
- High-impact SOPs, research proposals, and CV development
- Professor outreach and recommendation strategies

**Funding & Scholarships**
- Fully-funded PhD and Master's opportunities (stipend + tuition waiver)
- University-specific scholarships, assistantships, and grants
- External scholarships: Erasmus Mundus, DAAD, Fulbright, Chevening, and more
- Application strategy that maximizes funding chances

**Graduate Visa Support**
- Complete student visa file preparation
- Interview coaching and mock sessions
- Specialized support for visa re-applications after rejection
- Guidance for dependent visas where applicable

---

### Undergraduate Programs

Affordable, high-quality bachelor's degrees through **1000+ vetted partner universities** across **100+ countries**, with a focus on strong academics, manageable costs, and post-study work pathways.

**Example starting tuition**
- From **£12,000/year** — selected UK & European partners
- From **CA$10,000/year** — selected Canadian colleges & universities

**Strengths**
- Business, Engineering, Computer Science, Health Sciences, Social Sciences, Arts
- Direct entry and foundation / pathway programs
- Co-op and internship-integrated degrees
- Strong post-study work visa destinations
- Merit and need-based scholarship support

**Popular value destinations**
Canada · United Kingdom · Germany (low tuition) · Poland & Baltics · Australia · Malaysia branch campuses · USA (community college → transfer) · Turkey & Eastern Europe

---

### Visa Services

Expert visa support for students who already have offers — or need to recover from a refusal.

| Service | Description |
|---------|-------------|
| **First-Time Student Visas** | Documentation packages, financial proof strategy, SOP alignment with visa rules, and interview prep for US, Canada, UK, Schengen, Australia, and others |
| **Visa Re-Application After Refusal** | Refusal analysis, new evidence preparation, stronger narratives, and re-submission support |
| **Visit & Short-Term Visas** | Tourist/visitor visas, including cross-continent applications (e.g. USA to Europe) |
| **Post-Arrival & Dependent Support** | Bringing family, extending visas, changing status, and understanding work rights |

---

### The Study2Passport Process (6 Steps)

1. **Free Discovery Consultation** — 30–45 min call to assess academics, goals, budget, countries, and timeline
2. **Profile Assessment & Strategy** — Personalized roadmap with target programs, funding potential, and visa considerations
3. **Curated Shortlist** — Hand-picked universities with admission probability, cost estimates, and scholarship chances
4. **Application Excellence** — SOPs, motivation letters, research proposals, CVs, references, and portal submissions
5. **Funding & Scholarship Push** — Every relevant funding source; PhD focus on funded positions and TA/RA roles
6. **Visa & Pre-Departure** — Visa files, mock interviews, financial docs, accommodation, and arrival orientation

*Average timeline: 3–9 months depending on intake and program level. PhD funding searches may take longer.*

---

## Site Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page — hero, stats, success stories, process overview |
| `/services` | Full services breakdown and 6-step process |
| `/blog` | Funded-opportunity articles with category filters and search |
| `/blog/[slug]` | Individual blog post pages (statically generated) |
| `/contact` | Free consultation lead form |

---

## Tech Stack

Built for speed and low maintenance — no heavy UI libraries or external CMS.

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- Blog content in `lib/blogs.ts` (SSG, no MDX/CMS)
- One API route: `POST /api/contact` for form submissions

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Other commands

```bash
npm run build   # Production build
npm run start   # Run production server
npm run lint    # ESLint
```

---

## Contact Form API

Submissions from `/contact` are sent to `POST /api/contact`.

Currently the route validates fields and logs submissions to the server console. To go live, connect an email provider in `app/api/contact/route.ts`:

- **Resend** — add `RESEND_API_KEY`
- **SMTP / Hostinger mail** — use `nodemailer`
- **Formspree / Tally** — external form endpoint

---

## Project Structure

```
app/
  api/contact/       # Contact form API
  blog/
    [slug]/          # Dynamic blog posts (SSG)
    page.tsx         # Blog listing + filters
  contact/page.tsx
  services/page.tsx
  icon.tsx           # Round favicon (generated)
  apple-icon.tsx     # Apple touch icon (generated)
  layout.tsx         # Root layout, Navbar, Footer
  page.tsx           # Landing page
components/
  Navbar.tsx
  Footer.tsx
  Typewriter.tsx
lib/
  blogs.ts           # Blog posts and types
  generate-round-icon.tsx
public/
  logo.png
  favicon.jpg
  images/            # Landing and success-story photos
```

---

## Deployment

Requires **Node.js 20+**.

```bash
npm run build
npm run start
```

Works well on **Vercel** (recommended for Next.js) or a **VPS** with PM2 and a reverse proxy (e.g. Nginx). Hostinger VPS is a common choice if you need full server control.

---

## License

Built for **Study2Passport**. All rights reserved.