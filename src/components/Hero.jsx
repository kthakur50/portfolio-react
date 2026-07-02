import HeroCube from './HeroCube';
import TypingText from './TypingText';

const Hero = () => (
  <section id="home">
    <div className="tube-light" aria-hidden="true">
      <span className="tube-bar"></span>
    </div>
    <div className="wrap">
      <div className="hero-inner">

        <div className="hero-left sr on">
          <h1 className="hero-name">
            <span className="ac-plain">Kaushal</span><br />
            <span className="ac">Thakur</span>.
          </h1>


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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mu)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="13" rx="2"/><path d="M1 20h22"/>
                    </svg>
                    <TypingText texts={["GenAI Engineer", "Fullstack Developer"]} />
                  </div>
                  <div className="hero-info-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mu)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                    Junior Engineer @RMSI
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    Noida, India
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
                <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path fill="#fff" d="M7.116 9.5H4.41v9.586h2.706V9.5zM5.763 8.34c.945 0 1.534-.62 1.534-1.396-.017-.793-.589-1.395-1.516-1.395-.928 0-1.534.602-1.534 1.395 0 .776.589 1.396 1.499 1.396h.017zM19.59 19.086h-.001V13.59c0-2.94-1.572-4.309-3.668-4.309-1.692 0-2.45.93-2.873 1.583v-1.364h-2.706c.036.762 0 9.586 0 9.586h2.706v-5.354c0-.287.02-.573.107-.778.235-.573.768-1.167 1.665-1.167 1.176 0 1.664.882 1.664 2.175v5.124h2.706z"/>
                </svg>
                LinkedIn <span className="arr">→</span>
              </a>
              <a href="#" className="btn-o">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="10" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
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
