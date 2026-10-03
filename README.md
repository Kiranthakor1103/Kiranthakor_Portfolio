# Kiran Thakor — Developer Portfolio ⚡

> Modern, interactive, and visually stunning personal portfolio web application of **Thakor Kirankumar** (Senior Full-Stack & Creative Frontend Engineer). Built with **React 19**, **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, inspired by modern creative developer showcases with sleek cyberpunk glassmorphism and smooth micro-interactions.

---

## 🌟 Live Demo & Links
- 🌐 **Live Website**: [https://resume-hub-447.preview.emergentagent.com](https://resume-hub-447.preview.emergentagent.com)
- 🐙 **GitHub Repository**: [https://github.com/Kiranthakor1103/Kiranthakor_Portfolio](https://github.com/Kiranthakor1103)
- 💼 **LinkedIn Profile**: [https://www.linkedin.com/in/kiranthakor1103](https://www.linkedin.com/in/kiranthakor1103)
- 📄 **Direct Resume/CV**: Available for download directly in the navbar and hero section (`/Kiran_Thakor_CV.pdf`).

---

## 🚀 Key Features

- **Obsidian Dark & Cyberpunk Aesthetics**: Custom-curated dark mode palette with ambient radial blur glow orbs, subtle grid lines, and noise textures.
- **Hero Monogram & Magnetic Physics**: Interactive 3D KT hexagonal shield emblem with spring-physics magnetic CTA buttons ("View Projects", "Download CV", "Contact Me") and orbiting tech stack pills (`React 19`, `Next.js`, `TypeScript`, `Node.js`, `Claude AI`, `AI Engineering`).
- **Smooth Lenis Momentum Scroll**: Native hardware-accelerated inertia scrolling with synchronized anchor navigation.
- **Categorized Skills Bento Grid**: 12-column responsive layout spanning Frontend Ecosystem, State & Architecture, Backend & Real-Time, Databases & DevOps, and AI-Assisted Engineering (with a 3× velocity acceleration badge).
- **Interactive Projects Showcase & Modal**:
  - Filterable by categories: *All*, *Enterprise HSE*, *Hospitality & Booking*, *Fintech & ERP*, *Geospatial & Telecom*.
  - Zoom-hover cards with live telemetry metric pills.
  - Interactive deep-dive modal preview displaying system architecture, key features, and GitHub/Demo links.
- **Vertical Career & Education Timeline**: Chronological interactive timeline with glowing status nodes for Cmarix Infotech, GPSTek, and B.E. in Information Technology (GEC Modasa).
- **Infinite Marquee Ticker**: Continuous dual-loop ticker highlighting core technologies with alternating solid and outlined typography.
- **Interactive Contact Form & Confetti**: Validated client-side form featuring instant feedback, canvas confetti explosion upon sending, and one-click email copying.
- **100% Responsive & Accessible**: Mobile slide-out drawer, fluid typography, and semantic HTML5 standards.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend Framework** | [React 19 / React 18](https://react.dev/), [Vite 5](https://vitejs.dev/) |
| **Languages** | [TypeScript](https://www.typescriptlang.org/), [JavaScript (ES6+)](https://developer.mozilla.org/) |
| **Styling & Design System** | [Tailwind CSS v3/v4](https://tailwindcss.com/), Glassmorphism, CSS Custom Properties |
| **Typography** | [Syne](https://fonts.google.com/specimen/Syne) (Headlines), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code/Badges) |
| **Animations & Motion** | [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **AI Workflows** | Claude AI, Antigravity Agentic Workflows, GitHub Copilot, Gemini |

---

## 📂 Project Architecture

```
Kiranthakor_Portfolio/
├── public/
│   └── Kiran_Thakor_CV.pdf           # Downloadable PDF CV/Resume
├── src/
│   ├── components/
│   │   ├── About.jsx                 # Bio, philosophy & current role card
│   │   ├── Contact.jsx               # Contact form with confetti & copyable email
│   │   ├── Experience.jsx            # Vertical interactive career & education timeline
│   │   ├── Footer.jsx                # Monogram brand footer, socials & top scroll
│   │   ├── Hero.jsx                  # Headline, magnetic buttons, monogram orbit
│   │   ├── Logo.jsx                  # Vector SVG KT hex shield monogram
│   │   ├── Marquee.jsx               # Infinite looping technology ribbon
│   │   ├── MaskedText.jsx            # Scroll reveal animations & chips
│   │   ├── Navbar.jsx                # Glassmorphic blur header & mobile drawer
│   │   ├── ProjectModal.jsx          # Interactive project deep-dive modal
│   │   ├── Projects.jsx              # Filterable project showcase grid
│   │   └── Skills.jsx                # Categorized bento grid & AI velocity card
│   ├── data/
│   │   └── portfolioData.js          # Centralized data model parsed from CV
│   ├── hooks/
│   │   └── useLenis.js               # Lenis smooth scrolling & anchor utility
│   ├── App.jsx                       # Root application view
│   ├── index.css                     # Tailwind directives, glassmorphic tokens & utilities
│   └── main.jsx                      # Vite application entry point
├── index.html                        # HTML5 template with Google Fonts & KT favicon
├── package.json                      # Dependencies and npm scripts
├── postcss.config.js                 # PostCSS setup
├── tailwind.config.js                # Custom obsidian/neon theme & keyframe animations
└── vite.config.js                    # Vite configuration with @ path alias
```

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/Kiranthakor1103/Kiranthakor_Portfolio.git
cd Kiranthakor_Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

### 4. Build for production
```bash
npm run build
```
Production assets will be generated in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 👤 Author

**Thakor Kirankumar (Kiran Thakor)**  
*Software Developer | Full-Stack & Frontend Engineer*

- 📍 **Location**: Ahmedabad, Gujarat, India
- 📧 **Email**: [thakorkiran1012003@gmail.com](mailto:thakorkiran1012003@gmail.com)
- 📞 **Phone**: [+91 9909337763](tel:+919909337763)
- 🐙 **GitHub**: [@Kiranthakor1103](https://github.com/Kiranthakor1103)
- 💼 **LinkedIn**: [Kiran Thakor](https://www.linkedin.com/in/kiranthakor1103)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
