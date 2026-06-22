import HeroCube from './HeroCube';

const Hero = () => (
  <section id="home">
    <div className="wrap">
      <div className="hero-inner">

        <div className="hero-left sr on">
          <h1 className="hero-name">
            Kaushal<br />
            <span className="ac">Thakur</span>.
          </h1>

          <div className="hero-role">
            <span className="hero-role-pre"></span>
            <span className="hero-role-txt">
              <span className="slide-words" id="slideWords">
                <span className="slide-word">Fullstack Developer</span>
                <span className="slide-word">Software Engineer</span>
              </span>
            </span>
          </div>

          <div className="hero-info sr" style={{ transitionDelay: '.08s' }}>
            <div className="hero-info-grid">
              <div className="hero-info-col">
                <div className="hero-info-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mu)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                  Junior Engineer @RMSI
                </div>
                <div className="hero-info-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Noida, India
                </div>
                <div className="hero-info-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <a href="mailto:kthakur0578@gmail.com">kthakur0578@gmail.com</a>
                </div>
              </div>
              <div className="hero-info-col">
                <div className="hero-info-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mu)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span className="hero-info-time">
                    <span id="exp-timer" style={{ fontVariantNumeric: 'tabular-nums' }}></span>
                  </span>
                </div>
                <div className="hero-info-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--a2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  <a href="https://github.com/kaushalt18" target="_blank" rel="noopener">github.com/kaushalt18</a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-btns">
            <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" className="btn-o" style={{ padding:'9px 18px', fontSize:'.8rem', borderRadius:'8px' }}>
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub <span className="arr">→</span>
            </a>
            <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" className="btn-o" style={{ padding:'9px 18px', fontSize:'.8rem', borderRadius:'8px' }}>
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H17V14.88c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 01-1.979-1.981 1.98 1.98 0 011.979-1.98 1.98 1.98 0 011.98 1.98 1.98 1.98 0 01-1.98 1.981zm1.706 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn <span className="arr">→</span>
            </a>
            <a href="#" className="btn-s" style={{ padding:'9px 18px', fontSize:'.8rem', borderRadius:'8px' }}>
              Resume <span className="arr">→</span>
            </a>
          </div>
        </div>

        <HeroCube />

      </div>
    </div>
  </section>
);

export default Hero;
