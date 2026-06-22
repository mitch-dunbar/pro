 # Hotline M.D. Jekyll Theme 🌴💊

> A high-octane, hyper-saturated modern portfolio and blog theme built for single web developers for hire. Powered by the signature **Candy Color Palette**, fluid CSS grid configurations, and modular semantic architecture.

---

## 1. Quick Start

To deploy **Hotline M.D.** directly on GitHub Pages, add the following to your site's repository:

1. Clone or copy these layout files into your repository.
2. Update your `_config.yml` with your metadata.
3. Drop your compiled stylesheets into your assets directory.

### HTML Head Requirement
Include the theme layer files in the `<head>` of your layouts:
```html
<link rel="stylesheet" href="{{ '/assets/css/colors.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/gradients.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<link rel="stylesheet" href="{{ '/assets/css/dark-style.css' | relative_url }}">
```

## 2. The Candy Color Palette System

The core framework is driven by a highly vibrant, high-contrast spectrum extracted from custom design components.

```table
Token Name	Hex Code	Intent / Purpose

--light-green	#72F7A0	Primary Success, Active Indicators
--watermelon	#ED264D	High-Alert, Primary Cancel, Accents
--baby-blue-ice	#7CB8FF	Hyperlinks, System Info Highlights
--royal-gold	#F9DD5C	Input Labels, Warning Statuses
--neon-violet	#C64DEC	Brand Accent, Hero Focal Callouts
--jet-black #282C34	Surface Containers, Card Backings
--onyx #131418	Main Canvas Base Background
```

## 3. Grid & Utility Framework

### Component Cards
Every project card uses smooth motion curves and localized glow models to display complex interactive applications beautifully.

```HTML
<div class="card">
    <h3 class="text-gradient bg-gradient-coral-sunset">Application Dashboard</h3>
    <p>Custom mobile-first single developer web app implementation.</p>
    <a href="#" class="btn btn-primary">Launch Live Deployment</a>
</div
 ```
 
## 4. Theme Toggling Implementation

The component layer includes an asynchronous storage wrapper to manage smooth state transformations.

```JavaScript
// Example Activation Code
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-version');
}
""" 
colors_content = 
""" 

/* ==========================================================================
CANDY COLOR PALETTE CORE LIBRARY (colors.css)
========================================================================== */

:root {
/* --- Original Core Candy Palette --- */
--light-green: #72F7A0;
--watermelon: #ED264D;
--baby-blue-ice: #7CB8FF;
--royal-gold: #F9DD5C;
--neon-violet: #C64DEC;
--jet-black: #282C34;
--onyx: #131418;
--black: #05060A;
--alabaster-grey: #DEDFE3;
--pale-slate: #C4C8D2;
/* --- Sweet UI Theme Extensions --- */
--sweet-lime: #71f79f;
--sweet-orange: #ff6a00;
--sweet-cyan: #00c1e4;
--sweet-teal: #00e8c6;
--sweet-mint: #43d6b5;
--sweet-indigo: #2a4dc1;

/* --- Saturated Palette Accents (Sweet SCSS Extract) --- */
--strawberry-300: #ed5353;
--strawberry-500: #c6262e;
--orange-300: #ffa154;
--orange-500: #f37329;
--banana-300: #ffe16b;
--banana-500: #f9c440;
--lime-300: #9bdb4d;
--lime-500: #68b723;
--mint-300: #43d6b5;
--mint-500: #28bca3;
--blueberry-300: #64baff;
--blueberry-500: #3689e6;
--bubblegum-300: #f4679d;
--bubblegum-500: #de3e80;
--grape-300: #cd9ef7;
--grape-500: #a56de2;

/* --- System Grays & Surfacings --- */
--silver-100: #fafafa;
--silver-500: #abacae;
--slate-300: #667885;
--slate-500: #485a6c;
--slate-700: #273445;
--slate-900: #0e141f;
}
""" 
gradients_content = """

/* ==========================================================================
CANDY PALETTE - GRADIENT EXTENSION LIBRARY (gradients.css)
========================================================================== */
@import url('colors.css');
:root {
/* --- Row 1: Soft Pastels & Warm Radiance --- */
--cg-r1c1-mint-cream: linear-gradient(135deg, #73d1d3 0%, #badcc3 50%, #dba380 100%);
--cg-r1c2-coral-sunset: linear-gradient(135deg, #dd528d 0%, #ff8c79 50%, #fbae52 100%);
--cg-r1c3-teal-sand: linear-gradient(135deg, #1e7883 0%, #a9bdbb 50%, #ee7256 100%);
--cg-r1c4-crimson-dusk: linear-gradient(135deg, #3d156b 0%, #df3562 50%, #feb97e 100%);
--cg-r1c5-neon-orchid: linear-gradient(135deg, #560ea2 0%, #c78dc7 50%, #f496a6 100%);
--cg-r1c6-burning-amber: linear-gradient(135deg, #383f75 0%, #ff723a 50%, #ee2e21 100%);
/* --- Row 2: Deep Contrast & Vivid Fusions --- */
--cg-r2c1-forest-gold: linear-gradient(135deg, #113035 0%, #a7cb8e 50%, #f3a332 100%);
--cg-r2c2-velvet-marigold: linear-gradient(135deg, #f8bf54 0%, #ec5544 50%, #9120a6 100%);
--cg-r2c3-berry-burst: linear-gradient(135deg, #fd475e 0%, #c4659f 50%, #7d8afa 100%);
--cg-r2c4-electric-lime: linear-gradient(135deg, #40ffca 0%, #9a76a4 50%, #da0e7f 100%);
--cg-r2c5-midnight-amethyst: linear-gradient(135deg, #580c4a 0%, #e68caf 50%, #6a47c7 100%);
--cg-r2c6-cyber-cyan: linear-gradient(135deg, #383f75 0%, #a686f7 50%, #f1796c 100%);

/* --- Row 3: Cosmic Hues & Vibrant Auroras --- */
--cg-r3c1-bubblegum-ice: linear-gradient(135deg, #4abdfb 0%, #ad5adc 50%, #f1b5e7 100%);
--cg-r3c2-royal-indigo: linear-gradient(135deg, #2a4dc1 0%, #5698e2 50%, #935bca 100%);
--cg-r3c3-magenta-haze: linear-gradient(135deg, #f47595 0%, #b15a9a 50%, #643ba2 100%);
--cg-r3c4-ocean-neon: linear-gradient(135deg, #47c3fd 0%, #40ffca 50%, #950ece 100%);
--cg-r3c5-sky-violet: linear-gradient(135deg, #5ee0d3 0%, #a686f7 50%, #6a47c7 100%);
--cg-r3c6-golden-purple: linear-gradient(135deg, #fccd18 0%, #eb7195 50%, #8c1bab 100%);

/* --- Sweet UI Theme Special High-Glow Tab Gradients --- */
--cg-sweet-neon: linear-gradient(90deg, #00f17d 0%, #00f7d2 100%);
--cg-sweet-fiery: linear-gradient(90deg, var(--sweet-orange) 0%, var(--watermelon) 100%);
--cg-sweet-cosmic: linear-gradient(135deg, var(--neon-violet) 0%, var(--sweet-cyan) 100%);
}
.bg-sweet-neon { background: var(--cg-sweet-neon); }
.bg-sweet-fiery { background: var(--cg-sweet-fiery); }
.bg-sweet-cosmic { background: var(--cg-sweet-cosmic); }
.text-gradient {
-webkit-background-clip: text !important;
-webkit-text-fill-color: transparent !important;
}
"""
style_content = """/* ==========================================================================
PRODUCTION WEBSITE ROOT PLATFORM THEME (style.css)
========================================================================== */
@import url('colors.css');
@import url('gradients.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');
:root {
--font-heading: 'Poppins', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--radius-md: 8px;
--radius-lg: 14px;
--transition-fast: 0.2s ease;
--transition-smooth: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
body {
background-color: var(--silver-100);
color: var(--slate-900);
font-family: var(--font-body);
margin: 0;
padding: 0;
line-height: 1.6;
}
h1, h2, h3, h4 {
font-family: var(--font-heading);
color: var(--slate-900);
font-weight: 700;
}
.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 2rem;
}
.navbar {
background-color: rgba(250, 250, 250, 0.85);
backdrop-filter: blur(10px);
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
position: sticky;
top: 0;
z-index: 100;
padding: 1rem 0;
}
.nav-links {
display: flex;
gap: 2rem;
list-style: none;
}
.nav-link {
color: var(--slate-500);
font-weight: 500;
text-decoration: none;
transition: color var(--transition-fast);
}
.nav-link:hover, .nav-link.active {
color: var(--sweet-orange);
}
.btn {
display: inline-flex;
align-items: center;
justify-content: center;
padding: 0.75rem 1.5rem;
border-radius: var(--radius-md);
font-family: var(--font-heading);
font-weight: 600;
cursor: pointer;
text-decoration: none;
transition: all var(--transition-fast);
}
.btn-primary {
background: var(--cg-sweet-neon);
color: var(--slate-900);
border: none;
}
.btn-primary:hover {
transform: translateY(-2px);
box-shadow: 0 5px 15px rgba(0, 247, 210, 0.3);
}
.card {
background: #ffffff;
border: 1px solid rgba(0, 0, 0, 0.05);
border-radius: var(--radius-lg);
padding: 2rem;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}
"""
dark_style_content = """/* ==========================================================================
DARK-STYLE OVERRIDE CONFIGURATION (dark-style.css)
========================================================================== */
@import url('style.css');
body {
background-color: var(--black);
color: var(--alabaster-grey);
}
h1, h2, h3, h4 {
color: #ffffff;
}
.navbar {
background-color: rgba(5, 6, 10, 0.85);
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.nav-link {
color: var(--pale-slate);
}
.nav-link:hover, .nav-link.active {
color: var(--sweet-lime);
}
.card {
background: var(--onyx);
border: 1px solid rgba(255, 255, 255, 0.05);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
.card:hover {
border-color: var(--sweet-cyan);
box-shadow: 0 0 15px rgba(0, 193, 228, 0.2);
}

"""
js_content= 
"""
```

## 5. Theme Switcher Controller

### JavaScript Controller
Persistence Controller (theme-switcher.js)

```javascript
/* ==========================================================================
THEME SWITCHER PERSISTENCE CONTROLLER (theme-switcher.js)
========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
const toggleBtn = document.querySelector('.theme-toggle');
if(toggleBtn) {
toggleBtn.addEventListener('click', () => {
document.body.classList.toggle('dark-version');
const mode = document.body.classList.contains('dark-version') ? 'dark' : 'light';
localStorage.setItem('theme', mode);
});
}
});
```