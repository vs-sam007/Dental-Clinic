# 🦷 LuminaDent — Luxury Dental Care Reimagined

[![Live Site](https://img.shields.io/badge/Live%20Demo-Netlify-4C9588?style=for-the-badge&logo=netlify&logoColor=white)](https://fluffy-tarsier-90be73.netlify.app/)
[![React Version](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Animation Library](https://img.shields.io/badge/Framer--Motion-12.0-FF00C1?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

LuminaDent is a high-end, premium web platform for a luxury dental clinic designed to deliver an unforgettable digital experience. Balancing cutting-edge clinical precision with genuine human empathy, the application's interface mirrors the tranquil, high-end atmosphere of the physical clinic.

✨ **Live Deployment:** [fluffy-tarsier-90be73.netlify.app](https://fluffy-tarsier-90be73.netlify.app/)

---

## 🎨 Design Philosophy & Visual Aesthetics

LuminaDent is crafted to wow visitors on first interaction, elevating standard web design to a premium art piece:
* **Sophisticated Palette:** Utilizes a custom-tailored, harmonious color scheme (soothing teal `#4C9588` to instill trust and calm, warm sand/gold `#d4a373` representing luxury/care, and a soft off-black `#2C3E50` for visual warmth and high legibility).
* **Elegant Typography:** Pairings of the luxury serif **Playfair Display** (for headlines) and the ultra-clean **Inter** (for high-contrast body text).
* **Premium Glassmorphism:** Custom backdrop-blur saturating elements and providing smooth transparent cards floating over gradient glows.
* **Micro-interactions:** Rich magnetic buttons, custom-crafted animated cursor, and layout fades that respond instantly to scroll and hover actions.

---

## 🚀 Key Technical Features

### 1. High-Performance Canvas Image Sequences
In the Hero section, a specialized HTML5 `<canvas>` component renders a **240-frame sequential 3D animation**.
* Frame buffering loads frames dynamically in parallel.
* Direct canvas pixel updates (`ctx.drawImage`) maintain a smooth 30 FPS playback without overloading the main thread or causing layout reflows.
* Uses custom CSS `multiply` blending to overlay beautifully on light backgrounds.

### 2. 3D Parallax & Interactive Cards
The Services section implements interactive mouse-based 3D tilt effects using `framer-motion`:
* Tracks the user's cursor relative to the card dimensions.
* Automatically maps movement coordinates to `rotateX` and `rotateY` parameters dynamically using dynamic spring values.
* Activates linear bottom-highlight borders on hover to draw the eye to core offerings.

### 3. Customized Physics-Based Cursor
* A custom pointer is injected globally to provide premium fluid tracking.
* The cursor scales and shifts from an outline with sand-gold accents to a teal glow when hovering over buttons, select fields, and links (`a`, `button`, `.hover-target`).

### 4. Alternating Scrolling Timelines
The Philosophy section uses Framer Motion scroll trackers (`useScroll` and `useTransform`) to trigger opposing vertical parallax motions as the user navigates down the page, reinforcing the concept of precision restoration.

---

## 🛠️ Technology Stack

* **Frontend Library:** [React 19.x](https://react.dev/)
* **Build System & Dev Server:** [Vite 7.x](https://vite.dev/)
* **Animations:** [Framer Motion 12.x](https://www.framer.com/motion/)
* **Routing:** [React Router DOM 7.x](https://reactrouter.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **3D Foundations:** Prepared with [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), and [@react-three/drei](https://github.com/pmndrs/drei)

---

## 📂 Repository Structure

```text
Dental-Clinic/
├── public/                 # Static assets (images, hero image sequences)
├── src/
│   ├── assets/             # Brand logos and images
│   ├── components/         # Reusable interactive components
│   │   ├── CustomCursor.jsx # Physics-based cursor
│   │   ├── Experience.jsx  # Parallax philosophy teaser
│   │   ├── Footer.jsx      # Semantic structured footer
│   │   ├── Hero.jsx        # Canvas-based sequence playback & text animations
│   │   ├── Navbar.jsx      # Glassmorphic, state-driven mobile & desktop header
│   │   └── Services.jsx    # 3D-tilt service grid
│   ├── pages/              # Routed pages
│   │   ├── ContactPage.jsx # Private booking portal and coordinates
│   │   ├── ExperiencePage.jsx # Detailed clinic beliefs, values, and sensory rooms
│   │   ├── Home.jsx        # Main landing configuration page
│   │   └── ServicesPage.jsx # Comprehensive dental treatment catalog
│   ├── App.css             # Main wrapper styling
│   ├── App.jsx             # React Router layout structure
│   ├── index.css           # Core typography, keyframes, and global style tokens
│   └── main.jsx            # Application entry point
├── vite.config.js          # Vite build optimizations
├── package.json            # Project dependencies & build scripts
└── README.md               # Project documentation
```

---

## 💻 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js (v18.x or higher)** and **npm** installed on your system.

### 📥 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/vs-sam007/Dental-Clinic.git
   cd Dental-Clinic
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### ⚙️ Development Commands
* Start the local development server (with Hot Module Replacement):
  ```bash
  npm run dev
  ```
* Lint the codebase:
  ```bash
  npm run lint
  ```
* Build the highly optimized production bundle:
  ```bash
  npm run build
  ```
* Preview the production build locally:
  ```bash
  npm run preview
  ```

---

## 🌐 Netlify Deployment
The app is configured to compile static assets upon pull requests and is continuously integrated with **Netlify**. For manual building and verification, the build files output directly to the `/dist` directory.

---

*Made with ❤️ by [vs-sam007](https://github.com/vs-sam007)*
