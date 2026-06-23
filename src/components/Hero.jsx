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

          {/* wrapper so avail, info-box, buttons are all same width */}
          <div className="hero-block">

            <div className="hero-avail">
              Available for freelance &amp; full-time opportunities
              <span className="hero-avail-line" />
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--mu)" stroke="none">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <a href="https://github.com/kaushalt18" target="_blank" rel="noopener">github.com/kaushalt18</a>
                  </div>
                  <div className="hero-info-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <a href="https://x.com/kaushalt18" target="_blank" rel="noopener">x.com/kaushalt18</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-btns">
              <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" className="btn-o">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub <span className="arr">→</span>
              </a>
              <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" className="btn-o">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.79 53.79 0 1 1 53.79-53.79A53.79 53.79 0 0 1 53.84 108zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
                LinkedIn <span className="arr">→</span>
              </a>
              <a href="#" className="btn-s">
                Resume <span className="arr">→</span>
              </a>
            </div>

          </div>{/* end hero-block */}
        </div>

        <HeroCube />

      </div>
    </div>
  </section>
);

export default Hero;
