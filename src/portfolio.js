function initTheme() {
  ['themeBtn', 'themeBtnM'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () =>
      document.body.classList.toggle('light')
    );
  });
}

function initNav() {
  const sections = ['home','about','skills','experience','projects','education','contact'];
  const links    = document.querySelectorAll('.nav-desk-links a, .nav-mob a');
  if (!links.length) return;

  function mark() {
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav')) || 62;
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= navH + 60) current = id;
    });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }

  window.addEventListener('scroll', mark, { passive: true });
  mark();
}

function scrollToSection(id) {
  const el   = document.getElementById(id);
  if (!el) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav')) || 62;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      document.querySelectorAll('.nav-desk-links a, .nav-mob a').forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === '#' + id)
      );
      scrollToSection(id);
      if (window.innerWidth <= 768) {
        document.getElementById('navMob')?.classList.remove('open');
        document.getElementById('ham')?.classList.remove('open');
      }
    });
  });

  const nav = document.querySelector('.nav');
  if (!nav) return;
  let ticking = false;
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

function initHam() {
  if (document.getElementById('ham')?._init) return;

  const ham = document.getElementById('ham');
  const mob = document.getElementById('navMob');
  if (ham && mob) {
    ham._init = true;
    ham.addEventListener('click', e => {
      e.stopPropagation();
      const open = mob.classList.toggle('open');
      ham.classList.toggle('open', open);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        mob.classList.remove('open');
        ham.classList.remove('open');
      }
    });
  }

  const hamDesk = document.getElementById('hamDesk');
  const links   = document.getElementById('navDeskLinks');
  if (hamDesk && links) {
    hamDesk.addEventListener('click', e => {
      e.stopPropagation();
      const open = links.classList.toggle('open');
      hamDesk.classList.toggle('open', open);
    });
  }
}

function initSR() {
  const ob = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); ob.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.sr:not(.on)').forEach(el => ob.observe(el));
}

function initTimelineDraw() {
  const list = document.querySelector('.exp-list');
  if (!list) return;
  const ob = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setTimeout(() => list.classList.add('tl-drawn'), 120);
      ob.disconnect();
    }
  }, { threshold: 0.12 });
  ob.observe(list);
}

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
    setTimeout(() => words[prev].classList.remove('exit'), 480);
  }, 2600);
}

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
    el.innerHTML = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')} ${ampm} <em>IST</em>`;
  }
  tick();
  setInterval(tick, 1000);
}

function initMasonry() {
  const container = document.getElementById('masonryList');
  if (!container || container.children.length > 0) return;

  const projects = [
    {
      cat:   'AI · Finance',
      title: 'AI-Powered Finance Tracker',
      desc:  'An intelligent expense tracking app powered by AI to categorize, analyze and predict spending patterns with smart insights and budget recommendations.',
      tags:  ['ReactJS', 'TypeScript'],
      link:  '#',
      svg:   `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="200" fill="#0f1a14"/><line x1="0" y1="50" x2="420" y2="50" stroke="#1e3028" stroke-width="1"/><line x1="0" y1="100" x2="420" y2="100" stroke="#1e3028" stroke-width="1"/><line x1="0" y1="150" x2="420" y2="150" stroke="#1e3028" stroke-width="1"/><line x1="70" y1="0" x2="70" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="140" y1="0" x2="140" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="210" y1="0" x2="210" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="280" y1="0" x2="280" y2="200" stroke="#1e3028" stroke-width="1"/><line x1="350" y1="0" x2="350" y2="200" stroke="#1e3028" stroke-width="1"/><defs><linearGradient id="cf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#27a86e" stop-opacity=".35"/><stop offset="100%" stop-color="#27a86e" stop-opacity="0"/></linearGradient></defs><path d="M30,160 C70,140 100,80 140,90 C180,100 200,50 240,45 C280,40 310,70 360,55 L360,200 L30,200 Z" fill="url(#cf)"/><path d="M30,160 C70,140 100,80 140,90 C180,100 200,50 240,45 C280,40 310,70 360,55" fill="none" stroke="#27a86e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="140" cy="90" r="4" fill="#27a86e"/><circle cx="240" cy="45" r="4" fill="#27a86e"/><circle cx="360" cy="55" r="5" fill="#27a86e" stroke="#0f1a14" stroke-width="2"/><rect x="290" y="22" width="88" height="28" rx="6" fill="#1a2e22" stroke="#27a86e" stroke-width="1"/><text x="334" y="41" font-family="-apple-system,sans-serif" font-size="11" font-weight="700" fill="#27a86e" text-anchor="middle">up $4,280</text><rect x="20" y="14" width="80" height="34" rx="6" fill="#142010" stroke="#1e3028" stroke-width="1"/><text x="60" y="27" font-family="-apple-system,sans-serif" font-size="8" fill="#7a9087" text-anchor="middle">BALANCE</text><text x="60" y="40" font-family="-apple-system,sans-serif" font-size="11" font-weight="800" fill="#e0e8e4" text-anchor="middle">$12,450</text><rect x="114" y="14" width="76" height="34" rx="6" fill="#142010" stroke="#1e3028" stroke-width="1"/><text x="152" y="27" font-family="-apple-system,sans-serif" font-size="8" fill="#7a9087" text-anchor="middle">SAVINGS</text><text x="152" y="40" font-family="-apple-system,sans-serif" font-size="11" font-weight="800" fill="#27a86e" text-anchor="middle">+18.4%</text><rect x="344" y="10" width="58" height="20" rx="10" fill="#1F7D53"/><text x="373" y="24" font-family="-apple-system,sans-serif" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">AI Active</text></svg>`
    },
    {
      cat:   'GIS · Visualization',
      title: 'Geospatial Map Dashboard',
      desc:  'Interactive map-based web app for geospatial data visualization with dynamic layers, custom markers, and real-time data overlays using LeafletJS.',
      tags:  ['ReactJS', 'LeafletJS', 'Python'],
      link:  '#',
      svg:   `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="200" fill="#0a1a12"/><defs><linearGradient id="mbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0d2218"/><stop offset="100%" stop-color="#0a1510"/></linearGradient></defs><rect x="0" y="0" width="420" height="200" fill="url(#mbg)"/><path d="M0 120 Q60 80 120 110 Q180 140 240 90 Q300 40 360 70 Q390 85 420 60" fill="none" stroke="#1e3a28" stroke-width="18" stroke-linecap="round"/><path d="M0 120 Q60 80 120 110 Q180 140 240 90 Q300 40 360 70 Q390 85 420 60" fill="none" stroke="#27a86e" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 4"/><circle cx="120" cy="110" r="6" fill="#27a86e" opacity=".9"/><circle cx="120" cy="110" r="12" fill="#27a86e" opacity=".2"/><circle cx="240" cy="90" r="6" fill="#27a86e" opacity=".9"/><circle cx="240" cy="90" r="12" fill="#27a86e" opacity=".2"/><circle cx="360" cy="70" r="8" fill="#1F7D53" stroke="#27a86e" stroke-width="2"/><rect x="258" y="50" width="80" height="26" rx="5" fill="#1a2e22" stroke="#27a86e" stroke-width="1"/><text x="298" y="67" font-family="-apple-system,sans-serif" font-size="9" font-weight="700" fill="#27a86e" text-anchor="middle">Layer On</text><rect x="20" y="20" width="100" height="36" rx="6" fill="#0d2218" stroke="#1e3028" stroke-width="1"/><text x="70" y="33" font-family="-apple-system,sans-serif" font-size="7" fill="#7a9087" text-anchor="middle">MARKERS</text><text x="70" y="47" font-family="-apple-system,sans-serif" font-size="12" font-weight="800" fill="#e0e8e4" text-anchor="middle">1,284</text></svg>`
    },
    {
      cat:   'Web · Design',
      title: 'Developer Portfolio',
      desc:  'A clean, performant personal portfolio built with modern frontend tools — featuring smooth animations, dark/light mode, and fully responsive layout.',
      tags:  ['ReactJS', 'TailwindCSS', 'TypeScript'],
      link:  '#',
      svg:   `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="200" fill="#0f1a14"/><rect x="12" y="12" width="396" height="176" rx="8" fill="#111" stroke="#1e3028" stroke-width="1"/><rect x="12" y="12" width="396" height="28" rx="8" fill="#1a1a1a"/><circle cx="30" cy="26" r="5" fill="#ff5f57"/><circle cx="46" cy="26" r="5" fill="#febc2e"/><circle cx="62" cy="26" r="5" fill="#28c840"/><text x="210" y="31" font-family="-apple-system,sans-serif" font-size="8" fill="#555" text-anchor="middle">portfolio.dev</text><text x="40" y="72" font-family="SF Mono,monospace" font-size="13" font-weight="900" fill="#ddeae4">Kaushal</text><text x="40" y="88" font-family="SF Mono,monospace" font-size="13" font-weight="900" fill="#27a86e">Thakur.</text><text x="40" y="106" font-family="SF Mono,monospace" font-size="8" fill="#7a9087">Software Engineer</text><rect x="40" y="118" width="60" height="20" rx="5" fill="#1F7D53"/><text x="70" y="132" font-family="-apple-system,sans-serif" font-size="8" font-weight="700" fill="#fff" text-anchor="middle">Resume</text><rect x="108" y="118" width="60" height="20" rx="5" fill="none" stroke="#2a2a2a" stroke-width="1"/><text x="138" y="132" font-family="-apple-system,sans-serif" font-size="8" font-weight="700" fill="#7a9087" text-anchor="middle">GitHub</text><line x1="240" y1="50" x2="390" y2="50" stroke="#1e3028" stroke-width="1"/><line x1="240" y1="70" x2="370" y2="70" stroke="#1e3028" stroke-width="1"/><line x1="240" y1="90" x2="380" y2="90" stroke="#1e3028" stroke-width="1"/></svg>`
    },
  ];

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

  initSR();
}

function initWin3DCube() {
  if (!document.getElementById('win3dScene')) return;

  // ── Skills data ───────────────────────────────────────────────
  const skills = [
    { name:'React.js',     grad:['#0d6e96','#0a3f5a'], svg:`<svg viewBox="0 0 630 630" width="38" height="38"><circle cx="315" cy="315" r="50" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" stroke-width="30"><ellipse cx="315" cy="315" rx="260" ry="95"/><ellipse cx="315" cy="315" rx="260" ry="95" transform="rotate(60 315 315)"/><ellipse cx="315" cy="315" rx="260" ry="95" transform="rotate(120 315 315)"/></g></svg>` },
    { name:'Next.js',      grad:['#3a3a3a','#555555'], svg:`<svg viewBox="0 0 630 630" width="38" height="38"><circle cx="315" cy="315" r="315" fill="#000"/><mask id="nm2" style="mask-type:alpha"><circle cx="315" cy="315" r="315" fill="#000"/></mask><g mask="url(#nm2)"><path d="M513.3 552.8L235.6 189H189V440.9h46.9V247.4L481.3 577C492.1 570.5 502.8 563.5 513.3 552.8Z" fill="url(#ng3)"/><rect x="395" y="189" width="47" height="252" fill="url(#ng4)"/></g><defs><linearGradient id="ng3" x1="374" y1="408" x2="496" y2="561" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="ng4" x1="418" y1="189" x2="417" y2="374" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>` },
    { name:'TypeScript',   grad:['#1e5ea8','#0f3870'], svg:`<svg viewBox="0 0 100 100" width="38" height="38"><rect width="100" height="100" rx="12" fill="#3178C6"/><text x="94" y="90" text-anchor="end" font-family="'Arial Black',Arial,sans-serif" font-weight="700" font-size="48" fill="#fff">TS</text></svg>` },
    { name:'Tailwind CSS', grad:['#084055','#042838'], svg:`<svg viewBox="0 0 40 40" width="38" height="38"><path fill="#06B6D4" d="M20 7c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.6 3.8 2.8C22.8 17 25.1 19 30 19c5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.6-3.8-2.8C27.2 9 24.9 7 20 7zM10 19c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.6 3.8 2.8C12.8 29 15.1 31 20 31c5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.6-3.8-2.8C17.2 21 14.9 19 10 19z"/></svg>` },
    { name:'JavaScript',   grad:['#5c4c00','#3a3000'], svg:`<svg viewBox="0 0 100 100" width="38" height="38"><rect width="100" height="100" rx="12" fill="#F7DF1E"/><text x="94" y="90" text-anchor="end" font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="48" fill="#000">JS</text></svg>` },
    { name:'Python',       grad:['#1a3d5c','#0e2438'], svg:`<svg viewBox="0 0 40 40" width="38" height="38"><defs><linearGradient id="pyb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="pyy" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs><path fill="url(#pyb)" d="M20 4c-2.8 0-5 .3-6.6 1-.5.2-.9.7-1.1 1.2-.2.5-.3 1.2-.3 2v2.8h8v1H8.7C7 12 5.7 13 5 14.5c-.7 1.5-1 3.4-1 5.5s.3 3.8 1 5.3c.7 1.4 1.9 2.2 3.4 2.2H11v-4.8c0-1.7 1.5-3.2 4-3.2h8.5c1.2 0 2.2-.4 2.9-1.1.7-.7 1.1-1.7 1.1-2.9V8.2c0-1.2-.4-2.2-1.1-2.9C25.7 4.6 24.3 4 22.5 4H20zm-2.5 3.5c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"/><path fill="url(#pyy)" d="M30 14h-2.5v4.8c0 1.7-1.5 3.2-4 3.2H15c-1.2 0-2.2.4-2.9 1.1-.7.7-1.1 1.7-1.1 2.9v5.8c0 1.2.5 2.2 1.4 2.7C13.5 35.5 16 36 20 36s6.5-.5 8.1-1.2c.8-.4 1.2-1.1 1.4-1.9.2-.8.3-1.7.3-2.7V28h-8v-1h8.7c1.6 0 3-.9 3.7-2.5.7-1.5 1-3.4 1-5.5s-.3-3.8-1-5.3c-.7-1.4-2-2-3.2-2v2.3zm-7.5 16c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"/></svg>` },
    { name:'Node.js',      grad:['#0e3d1a','#07220e'], svg:`<svg viewBox="0 0 40 40" width="38" height="38"><path fill="#5FA04E" d="M20 3.5a1.5 1.5 0 00-.75.2L5.5 11.6a1.5 1.5 0 00-.75 1.3v13.6c0 .54.29 1.03.75 1.3l13.75 7.9a1.5 1.5 0 001.5 0l13.75-7.9a1.5 1.5 0 00.75-1.3V12.9a1.5 1.5 0 00-.75-1.3L20.75 3.7a1.5 1.5 0 00-.75-.2zm0 3l10.5 6.07v12.14L20 30.7 9.5 24.71V12.57z"/></svg>` },
    { name:'MongoDB',      grad:['#083818','#04200e'], svg:`<svg viewBox="0 0 40 40" width="38" height="38"><path fill="#00ED64" d="M20 3S10 14.5 10 22.5c0 5.5 4.5 9.5 10 9.5s10-4 10-9.5C30 14.5 20 3 20 3z"/></svg>` },
    { name:'Docker',       grad:['#083258','#041e38'], svg:`<svg viewBox="0 0 40 40" width="38" height="38"><path fill="#2496ED" d="M37.3 18c-.6-3.2-2.8-6-5.9-7.4l-.9-.4-.5 1c-.5 1.3-.6 2.7-.3 4-1.5-.9-3.2-1.4-5-1.2H2.8l-.2.8c-.8 3.3-.1 7.2 2.1 10.1C7 27.7 10.8 29.5 15.5 29.5c8 0 14.6-5 16.6-12.7.2 0 .4-.1.6-.1 2.2 0 4.2-.9 5.7-2.3l.7-.7-.6-.4c-.5-.4-1-.7-1.3-.8z"/><rect x="5" y="15.5" width="5" height="3.5" rx="1" fill="#fff"/><rect x="11" y="15.5" width="5" height="3.5" rx="1" fill="#fff"/><rect x="17" y="15.5" width="5" height="3.5" rx="1" fill="#fff"/><rect x="11" y="10" width="5" height="3.5" rx="1" fill="#fff"/><rect x="17" y="10" width="5" height="3.5" rx="1" fill="#fff"/><rect x="17" y="4.5" width="5" height="3.5" rx="1" fill="#fff"/></svg>` },
    { name:'HTML5',        grad:['#4a1e00','#2e1200'], svg:`<svg viewBox="0 0 40 40" width="38" height="38"><path fill="#E44D26" d="M5 3l3 33L20 40l12-4 3-33z"/><path fill="#F16529" d="M20 37.3V6.6l10.4.3-2.6 23.6z"/><path fill="#EBEBEB" d="M20 18H15l-.4-4H20V10H9.8l1 12H20zm0 8.5l-.1.1-4-1.1-.3-3H12l.6 6.8 7.4 2z"/><path fill="#fff" d="M20 18v3.7h4.3l-.4 4.7-3.9 1.1V31l7.3-2 .6-7.8.6-8.2H20zm0-7.4v3.9h7.8l.3-3.9H20z"/></svg>` },
    { name:'Git',          grad:['#4a1e0c','#2e1208'], svg:`<svg viewBox="0 0 40 40" width="38" height="38"><path fill="#F05032" d="M38.1 18.1L21.9 1.9a3.1 3.1 0 00-4.4 0l-3.3 3.3 4.2 4.2c1-.4 2.2-.2 3 .6.8.8 1 2 .6 3L26 17a3.1 3.1 0 11-1.9 1.9l-4.1-4V28a3.1 3.1 0 11-2.5 0V14.8a3.1 3.1 0 01-1.6-4.1L11.5 6.3 1.9 15.9a3.1 3.1 0 000 4.4l16.2 16.2a3.1 3.1 0 004.4 0L38.1 22.5a3.1 3.1 0 000-4.4z"/></svg>` },
    { name:'Redux',        grad:['#2e1252','#1c0a32'], svg:`<svg viewBox="0 0 40 40" fill="none" width="38" height="38"><path fill="#764ABC" d="M27.5 10.2c.5-.1 1.1-.1 1.6.1a3.7 3.7 0 012.4 3.5 3.7 3.7 0 01-.7 2.2 11.5 11.5 0 011.9 5.7c.2 2.9-.5 5.8-2.2 8.1a9.7 9.7 0 01-8.5 4.2 9.2 9.2 0 01-7.8-4.3 9.2 9.2 0 01-1-8.4h.2a3.5 3.5 0 01-.4-1.7 3.7 3.7 0 013.7-3.7c.4 0 .8.1 1.2.2A11.5 11.5 0 0121 14c.9-.1 1.8-.1 2.7 0a11 11 0 013 .8c.2-.4.4-.8.8-1.1a3.6 3.6 0 010 0zm-4.2 2.3c-.8 0-1.5.1-2.3.3a9.6 9.6 0 00-4.2 2.2 8.2 8.2 0 00-2.4 4 8.1 8.1 0 00.7 5.7 7.2 7.2 0 006.2 3.4 7.7 7.7 0 006.8-3.4c1.4-2 1.9-4.5 1.6-7a9.7 9.7 0 00-1.5-4.1 8.5 8.5 0 00-4.9-1.1z"/><circle cx="20" cy="6.5" r="3" fill="#764ABC"/></svg>` },
  ];

  // which skill index each face shows: flat=2x2 grid, cube=single tile
  const faceSkills = {
    wFront:  { flat:[0,1,4,3], cube:0, ice:'linear-gradient(135deg,rgba(180,230,255,0.10) 0%,rgba(140,210,245,0.06) 100%)' },
    wRight:  { flat:[0,1,4,3], cube:1, ice:'linear-gradient(135deg,rgba(150,215,250,0.08) 0%,rgba(100,190,240,0.04) 100%)' },
    wBack:   { flat:[0,1,4,3], cube:2, ice:'linear-gradient(135deg,rgba(200,240,255,0.09) 0%,rgba(160,220,248,0.05) 100%)' },
    wLeft:   { flat:[0,1,4,3], cube:6, ice:'linear-gradient(135deg,rgba(130,205,248,0.07) 0%,rgba(90,180,238,0.04) 100%)' },
    wTop:    { flat:[0,1,4,3], cube:4, ice:'linear-gradient(135deg,rgba(220,248,255,0.12) 0%,rgba(185,235,255,0.07) 100%)' },
    wBottom: { flat:[0,1,4,3], cube:5, ice:'linear-gradient(135deg,rgba(110,190,235,0.06) 0%,rgba(70,160,220,0.03) 100%)' },
  };

  const glowMap = {
    'React.js':'#61DAFB','Next.js':'#ffffff','TypeScript':'#3178C6',
    'Tailwind CSS':'#06B6D4','JavaScript':'#F7DF1E','Python':'#FFE052',
    'Node.js':'#5FA04E','MongoDB':'#00ED64','Docker':'#2496ED',
    'HTML5':'#E44D26','Git':'#F05032','Redux':'#764ABC',
  };

  // corner radii for 2x2 grid tiles
  const RADII = ['14px 0 0 0','0 14px 0 0','0 0 0 14px','0 0 14px 0'];

  // ── Tile factory ──────────────────────────────────────────────
  function makeTile(skill, isCube) {
    const d = document.createElement('div');
    if (isCube) {
      const brandColor = glowMap[skill.name] || '#aaaaaa';
      d.className = 'wt wt-cube-single';
      // Subtle brand colour background + matching glow
      d.style.setProperty('background', hexToRgba(brandColor, 0.10), 'important');
      d.style.setProperty('--tile-glow', brandColor + '44');
      const svg = skill.svg.replace(/width="38" height="38"/g, 'width="56" height="56"');
      d.innerHTML = `<div class="wt-inner">${svg}<span class="wt-name">${skill.name}</span></div>`;
    } else {
      d.className = 'wt';
      d.style.background = `linear-gradient(135deg,${skill.grad[0]},${skill.grad[1]})`;
      d.style.setProperty('--tile-glow', (glowMap[skill.name] || '#fff') + '99');
      d.innerHTML = `<div class="wt-inner">${skill.svg}<span class="wt-name">${skill.name}</span></div>`;
    }
    return d;
  }

  // Convert hex colour to rgba string
  function hexToRgba(hex, alpha) {
    const h = hex.replace('#','');
    const r = parseInt(h.slice(0,2),16);
    const g = parseInt(h.slice(2,4),16);
    const b = parseInt(h.slice(4,6),16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  // ── Build all 6 faces ─────────────────────────────────────────
  function buildFaces(mode) {
    const isCube = mode === 'cube';
    Object.entries(faceSkills).forEach(([faceId, cfg]) => {
      const face = document.getElementById(faceId);
      if (!face) return;
      face.innerHTML = '';
      if (isCube) {
        const tile = makeTile(skills[cfg.cube % skills.length], true);
        tile.style.borderRadius = '16px';
        tile.style.width = '100%';
        tile.style.height = '100%';
        // Ice color per face
        if (cfg.ice) {
          tile.style.setProperty('background', cfg.ice, 'important');
        }
        face.appendChild(tile);
      } else {
        cfg.flat.forEach((idx, i) => {
          const tile = makeTile(skills[idx % skills.length], false);
          tile.style.borderRadius = RADII[i] || '0';
          face.appendChild(tile);
        });
      }
    });
  }

  buildFaces('flat');

  // ── State ─────────────────────────────────────────────────────
  let spinning = false, rotX = 0, rotY = 0;
  let dragging = false, lastX = 0, lastY = 0, velX = 0, velY = 0;
  let spinRAF = null, inertiaRAF = null, bounceTimer = null;

  const cube  = document.getElementById('win3dCube');
  const scene = document.getElementById('win3dScene');

  function applyRot() {
    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  function snapBack() {
    cancelAnimationFrame(inertiaRAF); inertiaRAF = null;
    const startX = rotX, startY = rotY;
    // Normalise rotY so we always take the short arc back to nearest 0°
    let normY = ((startY % 360) + 360) % 360;
    if (normY > 180) normY -= 360;
    const duration = 700;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const e = 1 - Math.pow(1 - t, 3);
      rotX = startX * (1 - e);
      rotY = normY * (1 - e);
      applyRot();
      if (t < 1) { inertiaRAF = requestAnimationFrame(tick); }
      else { rotX = 0; rotY = 0; applyRot(); cube.style.transition = 'none'; inertiaRAF = null; }
    }
    cube.style.transition = 'none';
    inertiaRAF = requestAnimationFrame(tick);
  }

  // ── Rubik slide animation (flat mode) ────────────────────────
  // Tiles: [0]=top-left [1]=top-right [2]=bottom-left [3]=bottom-right
  // Moves: row0-left, row0-right, row1-left, row1-right,
  //        col0-up, col0-down, col1-up, col1-down
  const MOVES = [
    { tiles:[0,1], dir:'left'  },
    { tiles:[0,1], dir:'right' },
    { tiles:[2,3], dir:'left'  },
    { tiles:[2,3], dir:'right' },
    { tiles:[0,2], dir:'up'    },
    { tiles:[0,2], dir:'down'  },
    { tiles:[1,3], dir:'up'    },
    { tiles:[1,3], dir:'down'  },
  ];
  let moveIdx = 0;
  const SLIDE = 38; // px to slide

  function startBounce() {
    let busy = false;
    function next() {
      if (spinning || busy) return;
      busy = true;
      const face = document.getElementById('wFront');
      const allTiles = face ? [...face.querySelectorAll('.wt')] : [];
      if (allTiles.length < 4) { busy = false; return; }

      const move = MOVES[moveIdx % MOVES.length];
      moveIdx++;

      const targets = move.tiles.map(i => allTiles[i]).filter(Boolean);
      const axis = (move.dir === 'left' || move.dir === 'right') ? 'X' : 'Y';
      const sign = (move.dir === 'left' || move.dir === 'up') ? -1 : 1;
      const dist = sign * SLIDE;

      // Slide out
      targets.forEach(t => {
        t.style.transition = 'transform 0.32s cubic-bezier(.4,0,.6,1), opacity 0.32s ease';
        t.style.transform = `translate${axis}(${dist}px)`;
        t.style.opacity = '0.3';
      });

      bounceTimer = setTimeout(() => {
        // Instant reset to opposite side (no transition)
        targets.forEach(t => {
          t.style.transition = 'none';
          t.style.transform = `translate${axis}(${-dist}px)`;
          t.style.opacity = '0.3';
        });
        // Force reflow
        targets.forEach(t => void t.offsetWidth);

        // Slide back in
        targets.forEach(t => {
          t.style.transition = 'transform 0.32s cubic-bezier(.4,0,.6,1), opacity 0.32s ease';
          t.style.transform = '';
          t.style.opacity = '';
        });

        bounceTimer = setTimeout(() => {
          busy = false;
          bounceTimer = setTimeout(next, 420);
        }, 340);
      }, 340);
    }
    next();
  }

  function stopBounce() {
    clearTimeout(bounceTimer); bounceTimer = null;
    const face = document.getElementById('wFront');
    if (face) face.querySelectorAll('.wt').forEach(t => {
      t.style.transition = 'none';
      t.style.transform = '';
      t.style.opacity = '';
    });
  }

  startBounce();

  // ── Spin loop ─────────────────────────────────────────────────
  function startSpin() {
    cancelAnimationFrame(spinRAF);
    function loop() {
      if (!spinning || dragging) { spinRAF = null; return; }
      rotY += 0.7;
      applyRot();
      spinRAF = requestAnimationFrame(loop);
    }
    spinRAF = requestAnimationFrame(loop);
  }

  // ── Inertia after drag ────────────────────────────────────────
  function startInertia() {
    cancelAnimationFrame(inertiaRAF);
    rotX = 0; // lock X flat
    function loop() {
      if (dragging || spinning) { inertiaRAF = null; return; }
      velY *= 0.92;
      // Once velocity is low, smoothly snap rotY to nearest 0° then start clockwise spin
      if (Math.abs(velY) < 0.3) {
        inertiaRAF = null;
        startClockwiseSpin();
        return;
      }
      rotY += velY; applyRot();
      inertiaRAF = requestAnimationFrame(loop);
    }
    inertiaRAF = requestAnimationFrame(loop);
  }

  // Smoothly snap rotY to nearest multiple of 90°, then spin clockwise from front
  function startClockwiseSpin() {
    cancelAnimationFrame(inertiaRAF);
    const startY = rotY;
    const startX = rotX;
    const targetY = Math.round(rotY / 360) * 360; // snap to nearest full rotation
    const duration = 500;
    const t0 = performance.now();
    function snapTick(now) {
      const t = Math.min((now - t0) / duration, 1);
      const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
      rotX = startX * (1 - e);
      rotY = startY + (targetY - startY) * e;
      applyRot();
      if (t < 1) {
        inertiaRAF = requestAnimationFrame(snapTick);
      } else {
        rotX = 0; rotY = targetY % 360;
        applyRot();
        inertiaRAF = null;
        // Now start continuous clockwise rotation from front
        spinning = true;
        startSpin();
      }
    }
    inertiaRAF = requestAnimationFrame(snapTick);
  }

  // ── Mouse events ──────────────────────────────────────────────
  scene.addEventListener('mouseleave', () => { if (!dragging && !spinning) snapBack(); });

  scene.addEventListener('mousedown', e => {
    e.preventDefault();
    dragging = true; cube.classList.add('dragging');
    lastX = e.clientX; lastY = e.clientY;
    velX = 0; velY = 0;
    cube.style.transition = 'none';
    cancelAnimationFrame(spinRAF); spinRAF = null;
    cancelAnimationFrame(inertiaRAF); inertiaRAF = null;
    if (!scene.classList.contains('mode-3d')) {
      scene.classList.add('mode-3d');
      buildFaces('cube');
    }
  });

  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    rotY += dx * 0.4;
    velY = velY * 0.6 + dx * 0.16;
    lastX = e.clientX; lastY = e.clientY; applyRot();
  });

  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false; cube.classList.remove('dragging');
    if (spinning) startSpin(); else startInertia();
  });

  // ── Touch events ──────────────────────────────────────────────
  scene.addEventListener('touchstart', e => {
    e.stopPropagation();
    cancelAnimationFrame(inertiaRAF); inertiaRAF = null;
    cancelAnimationFrame(spinRAF); spinRAF = null;
    dragging = true; velX = 0; velY = 0;
    lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
    cube.style.transition = 'none';
    if (!scene.classList.contains('mode-3d')) {
      scene.classList.add('mode-3d');
      buildFaces('cube');
    }
  }, { passive: true });

  scene.addEventListener('touchmove', e => {
    if (!dragging) return;
    e.preventDefault();
    const dx = e.touches[0].clientX - lastX, dy = e.touches[0].clientY - lastY;
    rotY += dx * 0.30;
    velY = velY * 0.7 + dx * 0.09;
    lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; applyRot();
  }, { passive: false });

  scene.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    if (spinning) startSpin(); else startInertia();
  });

  // ── Face shading based on camera angle ───────────────────────
  const faceNormals = {
    wFront:[ 0, 0, 1], wBack:[ 0, 0,-1],
    wRight:[ 1, 0, 0], wLeft:[-1, 0, 0],
    wTop:  [ 0, 1, 0], wBottom:[ 0,-1, 0],
  };

  function rotateNormal(nx, ny, nz, rx, ry) {
    const rxR = -rx * Math.PI / 180, ryR = ry * Math.PI / 180;
    const z = -nx * Math.sin(ryR) + nz * Math.cos(ryR);
    return ny * Math.sin(rxR) + z * Math.cos(rxR);
  }

  function updateFaceBlur() {
    if (!spinning) {
      Object.keys(faceNormals).forEach(id => {
        const f = document.getElementById(id);
        if (f) { f.style.filter = ''; f.style.opacity = ''; }
      });
      requestAnimationFrame(updateFaceBlur);
      return;
    }
    const isTB = new Set(['wTop','wBottom']);
    Object.entries(faceNormals).forEach(([id, [nx, ny, nz]]) => {
      const face = document.getElementById(id);
      if (!face) return;
      const dot = rotateNormal(nx, ny, nz, rotX, rotY);
      const t   = (dot + 1) / 2;
      let opacity;
      if (t > 0.85)      opacity = 0.95;
      else if (t > 0.2)  opacity = isTB.has(id) ? 0.95 - (0.85-t)/0.65*0.10 : 0.95 - (0.85-t)/0.65*0.30;
      else               opacity = isTB.has(id) ? 0.85 - (0.2-t)/0.2*0.15   : 0.65 - (0.2-t)/0.2*0.45;
      face.style.opacity = opacity;
    });
    requestAnimationFrame(updateFaceBlur);
  }

  updateFaceBlur();

  // ── Toggle spin / flat mode ───────────────────────────────────
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
      cancelAnimationFrame(spinRAF); spinRAF = null;
      Object.keys(faceNormals).forEach(id => {
        const f = document.getElementById(id);
        if (f) { f.style.opacity = ''; }
      });
      buildFaces('flat');
      snapBack();
      setTimeout(startBounce, 900);
    }
  };
}

function initHL() {
  const section = document.getElementById('about');
  if (!section) return;
  const targets = Array.from(section.querySelectorAll('.about-para em, .about-para strong'));
  if (!targets.length) return;
  let timers = [];

  function activateAll() {
    timers.forEach(t => clearTimeout(t)); timers = [];
    targets.forEach(el => el.classList.remove('hl-active'));
    timers.push(setTimeout(() => {
      targets.forEach((el, i) => {
        timers.push(setTimeout(() => el.classList.add('hl-active'), i * 120));
      });
    }, 60));
  }

  function deactivateAll() {
    timers.forEach(t => clearTimeout(t)); timers = [];
    targets.forEach(el => el.classList.remove('hl-active'));
  }

  new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? activateAll() : deactivateAll());
  }, { threshold: 0.25 }).observe(section);
}

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
