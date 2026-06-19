// ─── portfolio.js ─────────────────────────────────────────────────────────────
// All vanilla-JS initialisation functions for the portfolio.
// Called once from App.jsx via initAll() after the React DOM mounts.
// ─────────────────────────────────────────────────────────────────────────────


// ── 1. Theme toggle ───────────────────────────────────────────────────────────
// Clicking either theme button adds/removes the "light" class on <body>.
// CSS uses body.light selectors to switch colour variables.
function initTheme() {
  ['themeBtn', 'themeBtnM'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => document.body.classList.toggle('light'));
  });
}


// ── 2. Active nav-link highlighting on scroll ─────────────────────────────────
// Watches scroll position and marks the nav link of the current section active.
function initNav() {
  const sections = ['home','about','skills','experience','projects','education','contact'];
  const navLinks = document.querySelectorAll('.nav-desk-links a, .nav-mob a');
  if (!navLinks.length) return;

  function onScroll() {
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav')) || 62;
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      // Section is "active" once its top edge passes the navbar bottom
      if (el && el.getBoundingClientRect().top <= navH + 60) current = id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load to set initial state
}


// ── 3. Smooth scroll for anchor links ─────────────────────────────────────────
// Intercepts all href="#..." clicks, scrolls smoothly, and closes the mobile
// menu when a link is tapped on small screens.
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav')) || 62;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  // Keep the URL clean — no hash fragment
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);

      // Immediately mark the clicked link as active without waiting for scroll event
      document.querySelectorAll('.nav-desk-links a, .nav-mob a').forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === '#' + id)
      );

      scrollToSection(id);

      // Close the mobile overlay after navigation
      if (window.innerWidth <= 768) {
        document.getElementById('navMob')?.classList.remove('open');
        document.getElementById('ham')?.classList.remove('open');
      }
    });
  });

  // Show/hide "scrolled" style on the navbar
  const nav = document.querySelector('.nav');
  if (!nav) return;
  let ticking = false;
  nav.classList.remove('hide');

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}


// ── 4. Hamburger menus ────────────────────────────────────────────────────────
// Mobile ham  → toggles .nav-mob overlay open/closed.
// Desktop hamDesk → toggles .nav-desk-links open/closed.
// Escape key closes the mobile overlay.
function initHam() {
  // Guard against React StrictMode double-invocation adding duplicate listeners
  if (document.getElementById('ham')?._hamInit) return;

  // Mobile hamburger
  const ham = document.getElementById('ham');
  const mob = document.getElementById('navMob');
  if (ham && mob) {
    ham._hamInit = true; // mark as initialised
    ham.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = mob.classList.toggle('open');
      ham.classList.toggle('open', isOpen);
    });
    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        mob.classList.remove('open');
        ham.classList.remove('open');
      }
    });
  }

  // Desktop hamburger
  const hamDesk = document.getElementById('hamDesk');
  const links   = document.getElementById('navDeskLinks');
  if (hamDesk && links) {
    hamDesk.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = links.classList.toggle('open');
      hamDesk.classList.toggle('open', isOpen);
    });
  }
}


// ── 5. Scroll-reveal ──────────────────────────────────────────────────────────
// Elements with class "sr" fade/slide in once they enter the viewport.
// After animating, the observer stops watching the element (fire-once).
function initSR() {
  const ob = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        ob.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.sr:not(.on)').forEach(el => ob.observe(el));
}


// ── 6. Experience timeline draw animation ─────────────────────────────────────
// Adds "tl-drawn" class to .exp-list when it scrolls into view, triggering
// the CSS animation that draws the vertical timeline line.
function initTimelineDraw() {
  const list = document.querySelector('.exp-list');
  if (!list) return;

  const tlObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setTimeout(() => list.classList.add('tl-drawn'), 120);
      tlObs.disconnect();
    }
  }, { threshold: 0.12 });

  tlObs.observe(list);
}


// ── 7. Hero role word slideshow ───────────────────────────────────────────────
// Cycles through #slideWords .slide-word elements every 2.6 s with a
// fade/slide transition (exit → active CSS classes).
function initHeroAnimations() {
  const words = document.querySelectorAll('#slideWords .slide-word');
  if (!words.length) return;

  let cur = 0;
  words[0].classList.add('active');

  setInterval(() => {
    const prev = cur;
    cur = (cur + 1) % words.length;
    words[prev].classList.add('exit');
    words[prev].classList.remove('active');
    words[cur].classList.add('active');
    // Clean up the exit class after the CSS transition finishes
    setTimeout(() => words[prev].classList.remove('exit'), 480);
  }, 2600);
}


// ── 8. Live IST clock in the hero section ─────────────────────────────────────
// Updates #exp-timer every second with the current India Standard Time (IST).
function initClock() {
  const el = document.getElementById('exp-timer');
  if (!el) return;

  function tick() {
    const ist  = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    let h      = ist.getHours();
    const m    = ist.getMinutes();
    const s    = ist.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')} ${ampm}`;
  }

  tick();
  setInterval(tick, 1000);
}


// ── 9. Projects masonry grid ──────────────────────────────────────────────────
// Dynamically renders project cards into #masonryList.
// Each card has an inline SVG preview, category, title, description,
// tech tags, and a "View Project" link.
// After rendering, initSR() is called again so new .sr elements animate in.
function initMasonry() {
  const container = document.getElementById('masonryList');
  if (!container) return;

  // Guard: already rendered — don't duplicate cards
  if (container.children.length > 0) return;

  const projects = [
    {
      id: '1',
      cat: 'AI · Finance',
      title: 'AI-Powered Finance Tracker',
      desc: 'An intelligent expense tracking app powered by AI to categorize, analyze and predict spending patterns with smart insights and budget recommendations.',
      tags: ['ReactJS', 'TypeScript'],
      link: '#',
      svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="200" fill="#0f1a14"/><line x1="0" y1="50" x2="420" y2="50" stroke="#1e3028" stroke-width="1"/><line x1="0" y1="100" x2="420" y2="100" stroke="#1e3028" stroke-width="1"/><line x1="0" y1="150" x2="420" y2="150" stroke="#1e3028" stroke-width="1"/><line x1="70" y1="0" x2="70" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="140" y1="0" x2="140" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="210" y1="0" x2="210" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="280" y1="0" x2="280" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="350" y1="0" x2="350" y2="200" stroke="#1e3028" stroke-width="1"/><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#27a86e" stop-opacity=".35"/><stop offset="100%" stop-color="#27a86e" stop-opacity="0"/></linearGradient></defs><path d="M30,160 C70,140 100,80 140,90 C180,100 200,50 240,45 C280,40 310,70 360,55 L360,200 L30,200 Z" fill="url(#chart-fill)"/><path d="M30,160 C70,140 100,80 140,90 C180,100 200,50 240,45 C280,40 310,70 360,55" fill="none" stroke="#27a86e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="140" cy="90" r="4" fill="#27a86e"/><circle cx="240" cy="45" r="4" fill="#27a86e"/><circle cx="360" cy="55" r="5" fill="#27a86e" stroke="#0f1a14" stroke-width="2"/><rect x="290" y="22" width="88" height="28" rx="6" fill="#1a2e22" stroke="#27a86e" stroke-width="1"/><text x="334" y="41" font-family="-apple-system,sans-serif" font-size="11" font-weight="700" fill="#27a86e" text-anchor="middle">up $4,280</text><rect x="20" y="14" width="80" height="34" rx="6" fill="#142010" stroke="#1e3028" stroke-width="1"/><text x="60" y="27" font-family="-apple-system,sans-serif" font-size="8" fill="#7a9087" text-anchor="middle">BALANCE</text><text x="60" y="40" font-family="-apple-system,sans-serif" font-size="11" font-weight="800" fill="#e0e8e4" text-anchor="middle">$12,450</text><rect x="114" y="14" width="76" height="34" rx="6" fill="#142010" stroke="#1e3028" stroke-width="1"/><text x="152" y="27" font-family="-apple-system,sans-serif" font-size="8" fill="#7a9087" text-anchor="middle">SAVINGS</text><text x="152" y="40" font-family="-apple-system,sans-serif" font-size="11" font-weight="800" fill="#27a86e" text-anchor="middle">+18.4%</text><rect x="344" y="10" width="58" height="20" rx="10" fill="#1F7D53"/><text x="373" y="24" font-family="-apple-system,sans-serif" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">AI Active</text></svg>`
    },
    {
      id: '2',
      cat: 'GIS · Visualization',
      title: 'Geospatial Map Dashboard',
      desc: 'Interactive map-based web app for geospatial data visualization with dynamic layers, custom markers, and real-time data overlays using LeafletJS.',
      tags: ['ReactJS', 'LeafletJS', 'Python'],
      link: '#',
      svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="200" fill="#0a1a12"/><defs><linearGradient id="mapbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0d2218"/><stop offset="100%" stop-color="#0a1510"/></linearGradient></defs><rect x="0" y="0" width="420" height="200" fill="url(#mapbg)"/><path d="M0 120 Q60 80 120 110 Q180 140 240 90 Q300 40 360 70 Q390 85 420 60" fill="none" stroke="#1e3a28" stroke-width="18" stroke-linecap="round"/><path d="M0 120 Q60 80 120 110 Q180 140 240 90 Q300 40 360 70 Q390 85 420 60" fill="none" stroke="#27a86e" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 4"/><circle cx="120" cy="110" r="6" fill="#27a86e" opacity=".9"/><circle cx="120" cy="110" r="12" fill="#27a86e" opacity=".2"/><circle cx="240" cy="90" r="6" fill="#27a86e" opacity=".9"/><circle cx="240" cy="90" r="12" fill="#27a86e" opacity=".2"/><circle cx="360" cy="70" r="8" fill="#1F7D53" stroke="#27a86e" stroke-width="2"/><rect x="258" y="50" width="80" height="26" rx="5" fill="#1a2e22" stroke="#27a86e" stroke-width="1"/><text x="298" y="67" font-family="-apple-system,sans-serif" font-size="9" font-weight="700" fill="#27a86e" text-anchor="middle">Layer On</text><rect x="20" y="20" width="100" height="36" rx="6" fill="#0d2218" stroke="#1e3028" stroke-width="1"/><text x="70" y="33" font-family="-apple-system,sans-serif" font-size="7" fill="#7a9087" text-anchor="middle">MARKERS</text><text x="70" y="47" font-family="-apple-system,sans-serif" font-size="12" font-weight="800" fill="#e0e8e4" text-anchor="middle">1,284</text></svg>`
    },
    {
      id: '3',
      cat: 'Web · Design',
      title: 'Developer Portfolio',
      desc: 'A clean, performant personal portfolio built with modern frontend tools — featuring smooth animations, dark/light mode, and fully responsive layout.',
      tags: ['ReactJS', 'TailwindCSS', 'TypeScript'],
      link: '#',
      svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="200" fill="#0f1a14"/><rect x="12" y="12" width="396" height="176" rx="8" fill="#111" stroke="#1e3028" stroke-width="1"/><rect x="12" y="12" width="396" height="28" rx="8" fill="#1a1a1a"/><circle cx="30" cy="26" r="5" fill="#ff5f57"/><circle cx="46" cy="26" r="5" fill="#febc2e"/><circle cx="62" cy="26" r="5" fill="#28c840"/><text x="210" y="31" font-family="-apple-system,sans-serif" font-size="8" fill="#555" text-anchor="middle">portfolio.dev</text><text x="40" y="72" font-family="SF Mono,monospace" font-size="13" font-weight="900" fill="#ddeae4">Kaushal</text><text x="40" y="88" font-family="SF Mono,monospace" font-size="13" font-weight="900" fill="#27a86e">Thakur.</text><text x="40" y="106" font-family="SF Mono,monospace" font-size="8" fill="#7a9087">Software Engineer</text><rect x="40" y="118" width="60" height="20" rx="5" fill="#1F7D53"/><text x="70" y="132" font-family="-apple-system,sans-serif" font-size="8" font-weight="700" fill="#fff" text-anchor="middle">Resume</text><rect x="108" y="118" width="60" height="20" rx="5" fill="none" stroke="#2a2a2a" stroke-width="1"/><text x="138" y="132" font-family="-apple-system,sans-serif" font-size="8" font-weight="700" fill="#7a9087" text-anchor="middle">GitHub</text><line x1="240" y1="50" x2="390" y2="50" stroke="#1e3028" stroke-width="1"/><line x1="240" y1="70" x2="370" y2="70" stroke="#1e3028" stroke-width="1"/><line x1="240" y1="90" x2="380" y2="90" stroke="#1e3028" stroke-width="1"/></svg>`
    },
  ];

  // Render each project as a masonry card
  projects.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'masonry-item sr';
    el.style.transitionDelay = (i * 0.07) + 's';
    el.innerHTML = `
      <div class="masonry-item-inner">
        <div class="masonry-img">${p.svg}</div>
        <div class="masonry-bar"></div>
        <div class="masonry-body">
          <div class="masonry-cat">${p.cat}</div>
          <div class="masonry-title">${p.title}</div>
          <div class="masonry-desc">${p.desc}</div>
          <div class="masonry-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <a href="${p.link}" class="masonry-link">View Project <span class="arr">→</span></a>
        </div>
      </div>`;
    container.appendChild(el);
  });

  // Re-run scroll-reveal so newly injected cards animate in
  initSR();
}


// ── 10. Hero 3-D skill cube ───────────────────────────────────────────────────
// Builds an interactive cube in #win3dScene displaying tech skill tiles.
//
// Modes:
//   "flat"  (default) — shows the front face as a 2×2 grid; tiles bounce gently
//   "cube"  (Rotate button) — switches to full 3-D; user can drag to spin
//
// Key concepts:
//   buildFaces(mode) — fills each cube face with skill tiles
//   makeTile(skill)  — creates a single .wt tile element
//   startSpin()      — rAF loop that auto-rotates the cube
//   startBounce()    — sequential bounce animation on flat-mode tiles
//   updateFaceBlur() — blurs back-facing faces in cube mode for depth cue
//   wToggleSpin()    — exposed to HTML onClick via window.wToggleSpin
function initWin3DCube() {
  if (!document.getElementById('win3dScene')) return;

  // Skill data: name, gradient colours, and inline SVG icon
  const skills = [
    { name:'React.js',     grad:['#1a3a4a','#0d2233'], svg:`<svg viewBox="0 0 630 630" width="38" height="38" xmlns="http://www.w3.org/2000/svg"><circle cx="315" cy="315" r="50" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" stroke-width="30"><ellipse cx="315" cy="315" rx="260" ry="95"/><ellipse cx="315" cy="315" rx="260" ry="95" transform="rotate(60 315 315)"/><ellipse cx="315" cy="315" rx="260" ry="95" transform="rotate(120 315 315)"/></g></svg>` },
    { name:'Next.js',      grad:['#1a1a1a','#2a2a2a'], svg:`<svg viewBox="0 0 630 630" width="38" height="38" xmlns="http://www.w3.org/2000/svg"><circle cx="315" cy="315" r="315" fill="#000"/><mask id="nm2" style="mask-type:alpha"><circle cx="315" cy="315" r="315" fill="#000"/></mask><g mask="url(#nm2)"><path d="M513.3 552.8L235.6 189H189V440.9h46.9V247.4L481.3 577C492.1 570.5 502.8 563.5 513.3 552.8Z" fill="url(#ng3)"/><rect x="395" y="189" width="47" height="252" fill="url(#ng4)"/></g><defs><linearGradient id="ng3" x1="374" y1="408" x2="496" y2="561" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="ng4" x1="418" y1="189" x2="417" y2="374" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>` },
    { name:'TypeScript',   grad:['#1a3050','#0d1e35'], svg:`<svg viewBox="0 0 100 100" width="38" height="38" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="12" fill="#3178C6"/><text x="94" y="90" text-anchor="end" font-family="'Arial Black',Arial,sans-serif" font-weight="700" font-size="48" fill="#fff">TS</text></svg>` },
    { name:'Tailwind CSS', grad:['#0a2a33','#052030'], svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#06B6D4" d="M20 7c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.6 3.8 2.8C22.8 17 25.1 19 30 19c5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.6-3.8-2.8C27.2 9 24.9 7 20 7zM10 19c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.6 3.8 2.8C12.8 29 15.1 31 20 31c5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.6-3.8-2.8C17.2 21 14.9 19 10 19z"/></svg>` },
    { name:'JavaScript',   grad:['#2a2500','#1a1800'], svg:`<svg viewBox="0 0 100 100" width="38" height="38" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="12" fill="#F7DF1E"/><text x="94" y="90" text-anchor="end" font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="48" fill="#000">JS</text></svg>` },
    { name:'Python',       grad:['#1a2a3a','#0d1a28'], svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="pyb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="pyy" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs><path fill="url(#pyb)" d="M20 4c-2.8 0-5 .3-6.6 1-.5.2-.9.7-1.1 1.2-.2.5-.3 1.2-.3 2v2.8h8v1H8.7C7 12 5.7 13 5 14.5c-.7 1.5-1 3.4-1 5.5s.3 3.8 1 5.3c.7 1.4 1.9 2.2 3.4 2.2H11v-4.8c0-1.7 1.5-3.2 4-3.2h8.5c1.2 0 2.2-.4 2.9-1.1.7-.7 1.1-1.7 1.1-2.9V8.2c0-1.2-.4-2.2-1.1-2.9C25.7 4.6 24.3 4 22.5 4H20zm-2.5 3.5c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"/><path fill="url(#pyy)" d="M30 14h-2.5v4.8c0 1.7-1.5 3.2-4 3.2H15c-1.2 0-2.2.4-2.9 1.1-.7.7-1.1 1.7-1.1 2.9v5.8c0 1.2.5 2.2 1.4 2.7C13.5 35.5 16 36 20 36s6.5-.5 8.1-1.2c.8-.4 1.2-1.1 1.4-1.9.2-.8.3-1.7.3-2.7V28h-8v-1h8.7c1.6 0 3-.9 3.7-2.5.7-1.5 1-3.4 1-5.5s-.3-3.8-1-5.3c-.7-1.4-2-2-3.2-2v2.3zm-7.5 16c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"/></svg>` },
    { name:'Node.js',      grad:['#0d2210','#071508'], svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#5FA04E" d="M20 3.5a1.5 1.5 0 00-.75.2L5.5 11.6a1.5 1.5 0 00-.75 1.3v13.6c0 .54.29 1.03.75 1.3l13.75 7.9a1.5 1.5 0 001.5 0l13.75-7.9a1.5 1.5 0 00.75-1.3V12.9a1.5 1.5 0 00-.75-1.3L20.75 3.7a1.5 1.5 0 00-.75-.2zm0 3l10.5 6.07v12.14L20 30.7 9.5 24.71V12.57z"/><path fill="#5FA04E" d="M20 10.5l-6.5 3.75v7.5L20 25.5l6.5-3.75v-7.5zm0 2.5 4 2.3v4.6L20 22.2l-4-2.3v-4.6z"/></svg>` },
    { name:'MongoDB',      grad:['#0a2010','#051508'], svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#00ED64" d="M20 3S10 14.5 10 22.5c0 5.5 4.5 9.5 10 9.5s10-4 10-9.5C30 14.5 20 3 20 3z"/><path fill="#001E2B" d="M21 32.5v5h-2v-5c-5-.5-9-4.5-9-10 0-8 10-19.5 10-19.5S30 14.5 30 22.5c0 5.5-4 9.5-9 10z" opacity=".3"/><rect x="19" y="32" width="38" height="38" fill="#00684A"/></svg>` },
    { name:'Docker',       grad:['#0a1e35','#061422'], svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#2496ED" d="M37.3 18c-.6-3.2-2.8-6-5.9-7.4l-.9-.4-.5 1c-.5 1.3-.6 2.7-.3 4-1.5-.9-3.2-1.4-5-1.2H2.8l-.2.8c-.8 3.3-.1 7.2 2.1 10.1C7 27.7 10.8 29.5 15.5 29.5c8 0 14.6-5 16.6-12.7.2 0 .4-.1.6-.1 2.2 0 4.2-.9 5.7-2.3l.7-.7-.6-.4c-.5-.4-1-.7-1.3-.8z"/><rect x="5" y="15.5" width="38" height="3.5" rx="1" fill="#fff"/><rect x="11" y="15.5" width="4" height="3.5" rx="1" fill="#fff"/><rect x="17" y="15.5" width="4" height="3.5" rx="1" fill="#fff"/><rect x="11" y="10" width="4" height="3.5" rx="1" fill="#fff"/><rect x="17" y="10" width="4" height="3.5" rx="1" fill="#fff"/><rect x="17" y="4.5" width="4" height="3.5" rx="1" fill="#fff"/></svg>` },
    { name:'HTML5',        grad:['#2a1000','#1a0a00'], svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#E44D26" d="M5 3l3 33L20 40l12-4 3-33z"/><path fill="#F16529" d="M20 37.3V6.6l10.4.3-2.6 23.6z"/><path fill="#EBEBEB" d="M20 18H15l-.4-4H20V10H9.8l1 12H20zm0 8.5l-.1.1-4-1.1-.3-3H12l.6 6.8 7.4 2z"/><path fill="#fff" d="M20 18v3.7h4.3l-.4 4.7-3.9 1.1V31l7.3-2 .6-7.8.6-8.2H20zm0-7.4v3.9h7.8l.3-3.9H20z"/></svg>` },
    { name:'Git',          grad:['#2a1008','#1a0804'], svg:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#F05032" d="M38.1 18.1L21.9 1.9a3.1 3.1 0 00-4.4 0l-3.3 3.3 4.2 4.2c1-.4 2.2-.2 3 .6.8.8 1 2 .6 3L26 17a3.1 3.1 0 11-1.9 1.9l-4.1-4V28a3.1 3.1 0 11-2.5 0V14.8a3.1 3.1 0 01-1.6-4.1L11.5 6.3 1.9 15.9a3.1 3.1 0 000 4.4l16.2 16.2a3.1 3.1 0 004.4 0L38.1 22.5a3.1 3.1 0 000-4.4z"/></svg>` },
    { name:'Redux',        grad:['#1a0a2a','#100618'], svg:`<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#764ABC" d="M27.5 10.2c.5-.1 1.1-.1 1.6.1a3.7 3.7 0 012.4 3.5 3.7 3.7 0 01-.7 2.2 11.5 11.5 0 011.9 5.7c.2 2.9-.5 5.8-2.2 8.1a9.7 9.7 0 01-8.5 4.2 9.2 9.2 0 01-7.8-4.3 9.2 9.2 0 01-1-8.4h.2a3.5 3.5 0 01-.4-1.7 3.7 3.7 0 013.7-3.7c.4 0 .8.1 1.2.2A11.5 11.5 0 0121 14c.9-.1 1.8-.1 2.7 0a11 11 0 013 .8c.2-.4.4-.8.8-1.1a3.6 3.6 0 010 0zm-4.2 2.3c-.8 0-1.5.1-2.3.3a9.6 9.6 0 00-4.2 2.2 8.2 8.2 0 00-2.4 4 8.1 8.1 0 00.7 5.7 7.2 7.2 0 006.2 3.4 7.7 7.7 0 006.8-3.4c1.4-2 1.9-4.5 1.6-7a9.7 9.7 0 00-1.5-4.1 8.5 8.5 0 00-4.9-1.1z"/><circle cx="20" cy="6.5" r="3" fill="#764ABC"/></svg>` },
  ];

  // Maps each cube face ID → which skill indices to show (flat vs cube mode)
  const faceSkills = {
    wFront:  { flat: [0, 1, 4, 3],  cube: [0, 1, 4, 3]  }, // React / Next / JS / Tailwind
    wRight:  { flat: [0, 1, 4, 3],  cube: [1, 2, 7, 8]  }, // Next / TS / MongoDB / Docker
    wBack:   { flat: [0, 1, 4, 3],  cube: [2, 5, 6, 9]  }, // TS / Python / Node / HTML5
    wLeft:   { flat: [0, 1, 4, 3],  cube: [4, 9, 10, 11] }, // JS / HTML5 / Git / Redux
    wTop:    { flat: [0, 1, 4, 3],  cube: [5, 6, 7, 8]  }, // Python / Node / MongoDB / Docker
    wBottom: { flat: [0, 1, 4, 3],  cube: [10, 11, 0, 3] }, // Git / Redux / React / Tailwind
  };

  // Build (or rebuild) each face with the correct skill tiles
  function buildFaces(mode) {
    // Border-radius for the four corners of each 2×2 grid
    const radii = ['14px 0 0 0', '0 14px 0 0', '0 0 0 14px', '0 0 14px 0'];

    Object.entries(faceSkills).forEach(([faceId, cfg]) => {
      const face = document.getElementById(faceId);
      if (!face) return;
      face.innerHTML = '';
      const indices = mode === 'cube' ? cfg.cube : cfg.flat;
      indices.forEach(idx => face.appendChild(makeTile(skills[idx % skills.length])));
      face.querySelectorAll('.wt').forEach((t, i) => { t.style.borderRadius = radii[i] || '0'; });
    });
  }

  // Create a single skill tile element
  function makeTile(skill) {
    const glowMap = {
      'React.js':'#61DAFB', 'Next.js':'#ffffff',   'TypeScript':'#3178C6',
      'Tailwind CSS':'#06B6D4', 'JavaScript':'#F7DF1E', 'Python':'#FFE052',
      'Node.js':'#5FA04E', 'MongoDB':'#00ED64',    'Docker':'#2496ED',
      'HTML5':'#E44D26',   'Git':'#F05032',         'Redux':'#764ABC',
    };
    const d = document.createElement('div');
    d.className = 'wt';
    d.style.setProperty('background', `linear-gradient(135deg, ${skill.grad[0]}dd, ${skill.grad[1]}cc)`, 'important');
    d.style.setProperty('--tile-glow', (glowMap[skill.name] || '#ffffff') + '99');
    d.innerHTML = `<div class="wt-inner">${skill.svg}<span class="wt-name">${skill.name}</span></div>`;
    return d;
  }

  buildFaces('flat');

  // ── State variables ──────────────────────────────────────────────────────
  let spinning  = false;
  let rotX = 0, rotY = 0;
  let dragging  = false;
  let lastX = 0, lastY = 0;
  let velX  = 0, velY  = 0;
  let spinRAF    = null;
  let inertiaRAF = null;
  let bounceRAF  = null;

  const cube      = document.getElementById('win3dCube');
  const scene     = document.getElementById('win3dScene');

  // Apply current rotX/rotY to the cube element
  function applyRot() {
    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  // Smoothly spring the cube back to 0,0 (used when leaving flat mode)
  function snapBack() {
    cube.style.transition = 'transform 0.8s cubic-bezier(.34,1.2,.64,1)';
    rotX = 0; rotY = 0;
    cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    setTimeout(() => { cube.style.transition = 'none'; }, 850);
  }

  // ── Bounce animation (flat mode only) ───────────────────────────────────
  // Tiles on the front face bounce one by one in a loop
  function startBounce() {
    const tiles = document.querySelectorAll('#wFront .wt');
    let i = 0, busy = false;
    function next() {
      if (spinning || busy) return;
      busy = true;
      const tile = tiles[i % tiles.length];
      tile.classList.remove('wt-bounce');
      void tile.offsetWidth; // force reflow to restart animation
      tile.classList.add('wt-bounce');
      function onEnd() {
        tile.removeEventListener('animationend', onEnd);
        tile.classList.remove('wt-bounce');
        i++;
        busy = false;
        bounceRAF = setTimeout(next, 300);
      }
      tile.addEventListener('animationend', onEnd);
    }
    next();
  }

  function stopBounce() {
    if (bounceRAF) { clearTimeout(bounceRAF); bounceRAF = null; }
    document.querySelectorAll('#wFront .wt').forEach(t => t.classList.remove('wt-bounce'));
  }

  startBounce();

  // ── Auto-spin loop (cube mode) ───────────────────────────────────────────
  function startSpin() {
    if (spinRAF) cancelAnimationFrame(spinRAF);
    function loop() {
      if (!spinning || dragging) { spinRAF = null; return; }
      rotY += 0.8;
      cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      spinRAF = requestAnimationFrame(loop);
    }
    spinRAF = requestAnimationFrame(loop);
  }

  // ── Inertia after drag release ───────────────────────────────────────────
  function stopInertia() {
    if (inertiaRAF) { cancelAnimationFrame(inertiaRAF); inertiaRAF = null; }
  }

  function startInertia() {
    stopInertia();
    function loop() {
      if (dragging || spinning) { inertiaRAF = null; return; }
      velX *= 0.92;
      velY *= 0.92;
      if (Math.abs(velX) < 0.02 && Math.abs(velY) < 0.02) { inertiaRAF = null; return; }
      rotX += velX;
      rotY += velY;
      applyRot();
      inertiaRAF = requestAnimationFrame(loop);
    }
    inertiaRAF = requestAnimationFrame(loop);
  }

  // ── Mouse drag events ────────────────────────────────────────────────────
  scene.addEventListener('mouseleave', () => {
    if (!dragging && !spinning) snapBack();
  });

  scene.addEventListener('mousedown', e => {
    if (!spinning) return; // drag only available in 3-D mode
    e.preventDefault();
    dragging = true;
    cube.classList.add('dragging');
    lastX = e.clientX; lastY = e.clientY;
    cube.style.transition = 'none';
    if (spinRAF) { cancelAnimationFrame(spinRAF); spinRAF = null; }
  });

  window.addEventListener('mousemove', e => {
    if (!spinning || !dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    rotY += dx * 0.4;
    rotX -= dy * 0.4;
    velY = dx * 0.4;
    velX = -dy * 0.4;
    lastX = e.clientX; lastY = e.clientY;
    applyRot();
  });

  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    cube.classList.remove('dragging');
    spinning ? startSpin() : startInertia();
  });

  // ── Touch drag events ────────────────────────────────────────────────────
  scene.addEventListener('touchstart', e => {
    if (!spinning) return;
    stopInertia();
    dragging = true;
    velX = 0; velY = 0;
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
    cube.style.transition = 'none';
    if (spinRAF) { cancelAnimationFrame(spinRAF); spinRAF = null; }
  }, { passive: true });

  window.addEventListener('touchmove', e => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - lastX;
    const dy = e.touches[0].clientY - lastY;
    rotY += dx * 0.4;
    rotX -= dy * 0.4;
    velY = dx * 0.4;
    velX = -dy * 0.4;
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
    applyRot();
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    spinning ? startSpin() : startInertia();
  });

  // ── Face blur (depth cue in cube mode) ──────────────────────────────────
  // Faces pointing away from the viewer are blurred to simulate depth.
  const faceNormals = {
    wFront:  [ 0,  0,  1],
    wBack:   [ 0,  0, -1],
    wRight:  [ 1,  0,  0],
    wLeft:   [-1,  0,  0],
    wTop:    [ 0,  1,  0],
    wBottom: [ 0, -1,  0],
  };

  // Rotate the face normal by the current rotX/rotY and return the Z component
  // (dot product with viewer direction [0,0,1]) — positive = facing viewer.
  // NOTE: only the rotated y/z components are needed for the final formula,
  // since rotating around the X axis never changes the rotated x value —
  // so that intermediate value is intentionally not computed (was dead code).
  function rotateNormal(nx, ny, nz, rx, ry) {
    const rxR = -rx * Math.PI / 180;
    const ryR =  ry * Math.PI / 180;
    const y  =  ny;
    const z  = -nx * Math.sin(ryR) + nz * Math.cos(ryR);
    return y * Math.sin(rxR) + z * Math.cos(rxR);
  }

  function updateFaceBlur() {
    if (!spinning) {
      // Clear any lingering blur when returning to flat mode
      Object.keys(faceNormals).forEach(id => {
        const face = document.getElementById(id);
        if (face) { face.style.filter = ''; face.style.opacity = ''; }
      });
      requestAnimationFrame(updateFaceBlur);
      return;
    }
    Object.entries(faceNormals).forEach(([id, [nx, ny, nz]]) => {
      const face = document.getElementById(id);
      if (!face) return;
      const dot = rotateNormal(nx, ny, nz, rotX, rotY);
      const t   = (dot + 1) / 2; // 1 = facing viewer, 0 = facing away
      const isTopBottom = (id === 'wTop' || id === 'wBottom');
      let blur, opacity;
      if (t > 0.85) {
        blur = 0; opacity = 0.92; // directly facing — fully clear
      } else if (t > 0.2) {
        const f = (0.85 - t) / 0.65;
        blur    = isTopBottom ? f * 5  : f * 14;
        opacity = isTopBottom ? 0.92 - f * 0.10 : 0.92 - f * 0.25;
      } else {
        const f = (0.2 - t) / 0.2;
        blur    = isTopBottom ? 5  + f * 3  : 14  + f * 8;
        opacity = isTopBottom ? 0.82 - f * 0.20 : 0.67 - f * 0.30;
      }
      face.style.filter  = blur > 0.1 ? `blur(${blur.toFixed(1)}px)` : '';
      face.style.opacity = opacity;
    });
    requestAnimationFrame(updateFaceBlur);
  }

  updateFaceBlur();

  // ── Public toggle exposed to Hero.jsx onClick ────────────────────────────
  window.wToggleSpin = function () {
    spinning = !spinning;
    const btn = document.getElementById('wBtnSpin');
    if (spinning) {
      btn.classList.add('active');
      scene.classList.add('mode-3d');
      buildFaces('cube');
      stopBounce();
      cube.style.transition = 'none';
      startSpin();
    } else {
      btn.classList.remove('active');
      scene.classList.remove('mode-3d');
      if (spinRAF) { cancelAnimationFrame(spinRAF); spinRAF = null; }
      // Clear face blur before rebuilding flat view
      Object.keys(faceNormals).forEach(id => {
        const face = document.getElementById(id);
        if (face) { face.style.filter = ''; face.style.opacity = ''; }
      });
      buildFaces('flat');
      snapBack();
      setTimeout(startBounce, 900); // restart bounce after snap-back finishes
    }
  };
}


// ── 11. About section highlight effect ───────────────────────────────────────
// When #about enters the viewport, each <em>/<strong> inside .about-para
// gets .hl-active added one-by-one (staggered), making them turn green with
// a left→right underline sweep.  When the section leaves, all highlights
// reset so the animation replays next time the user scrolls back up.
function initHL() {
  const section = document.getElementById('about');
  if (!section) return;
  const targets = Array.from(
    section.querySelectorAll('.about-para em, .about-para strong')
  );
  if (!targets.length) return;

  let timers = [];

  function activateAll() {
    // Clear any pending timers from a previous run
    timers.forEach(t => clearTimeout(t));
    timers = [];
    // Remove active class first so ::after width resets to 0 instantly
    targets.forEach(el => {
      el.classList.remove('hl-active');
    });
    // Small pause so browser resets the transition before we add it back
    timers.push(setTimeout(() => {
      targets.forEach((el, i) => {
        timers.push(setTimeout(() => {
          el.classList.add('hl-active');
        }, i * 120));
      });
    }, 60));
  }

  function deactivateAll() {
    timers.forEach(t => clearTimeout(t));
    timers = [];
    targets.forEach(el => el.classList.remove('hl-active'));
  }

  const ob = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateAll();
      } else {
        deactivateAll();
      }
    });
  }, { threshold: 0.25 });

  ob.observe(section);
}


// ── Entry point ───────────────────────────────────────────────────────────────
// Called once from App.jsx useEffect after React renders the DOM.
// The _initialized guard prevents React StrictMode's double-invocation from
// registering duplicate event listeners.
export function initAll() {
  if (window.__portfolioInit) return;
  window.__portfolioInit = true;

  initTheme();
  initNav();
  initScroll();
  initHam();
  initSR();
  initHL();
  initTimelineDraw();
  initHeroAnimations();
  initClock();
  initMasonry();
  initWin3DCube();
}
