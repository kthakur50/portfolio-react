// ─── Navbar Component ─────────────────────────────────────────────────────────
// Renders the sticky top navigation bar with:
//  - Logo linking to #home
//  - Desktop nav links (shown/hidden via hamDesk toggle)
//  - Theme toggle button (moon/sun icons) for dark ↔ light mode
//  - Mobile hamburger menu (ham) that opens the mobile nav overlay

const Navbar = () => {
  return (
    <nav className="nav" id="nav">
      <div className="nav-inner">

        {/* Logo */}
        <a className="nav-logo" href="#home">
          <span className="logo-k">kt<em>.</em></span>
        </a>

        {/* Desktop nav links — toggled open/closed by hamDesk button */}
        <div className="nav-desk-links" id="navDeskLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop right controls: theme toggle + hamburger */}
        <div className="nav-right" id="navLinks">
          <button className="nav-toggle" id="themeBtn" aria-label="Toggle theme">
            {/* Moon icon — visible in light mode */}
            <svg className="i-moon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010 9.79z"/>
            </svg>
            {/* Sun icon — visible in dark mode */}
            <svg className="i-sun" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1"  x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1"  y1="12" x2="3"  y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
            </svg>
          </button>
          <span className="nav-sep-line"></span>
          {/* Desktop hamburger — toggles navDeskLinks visibility */}
          <button className="nav-ham" id="hamDesk" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Mobile controls: theme toggle + hamburger (opens navMob overlay) */}
        <div className="nav-mob-ctrl" id="navMobCtrl">
          <button className="nav-toggle" id="themeBtnM" aria-label="Toggle theme">
            <svg className="i-moon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010 9.79z"/>
            </svg>
            <svg className="i-sun" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1"  x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1"  y1="12" x2="3"  y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
            </svg>
          </button>
          {/* Mobile hamburger — opens .nav-mob overlay */}
          <button className="nav-ham" id="ham" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Mobile nav overlay — opened/closed by #ham via initHam() in portfolio.js.
            BUGFIX: this element was missing entirely, so the mobile hamburger
            button had nothing to toggle and effectively did nothing on click. */}
        <div className="nav-mob" id="navMob">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
