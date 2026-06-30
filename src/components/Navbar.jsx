const Navbar = () => (
  <nav className="nav" id="nav">
    <div className="nav-inner">
      <a className="nav-logo" href="#home">
        <span className="logo-k">kt<em>.</em></span>
      </a>

      <div className="nav-desk-links" id="navDeskLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right" id="navLinks">
        <button className="nav-toggle" id="themeBtn" aria-label="Toggle theme">
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
        <span className="nav-sep-line"></span>
        <button className="nav-ham" id="hamDesk" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

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
        <button className="nav-ham" id="ham" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className="nav-mob" id="navMob">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
        <div className="nav-mob-card">
          <div className="nav-mob-card-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--mu)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Junior Engineer @RMSI
          </div>
          <div className="nav-mob-card-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <a href="mailto:kthakur0578@gmail.com">kthakur0578@gmail.com</a>
          </div>
          <div className="nav-mob-card-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Noida, India
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
