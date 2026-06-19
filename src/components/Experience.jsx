// ─── Experience Section ───────────────────────────────────────────────────────
// Vertical timeline of work history.
// Each .exp-item contains:
//   .exp-node  — icon badge on the timeline line
//   .exp-card  — role details, company, period, description, and tech tags

const Experience = () => {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-hd sr" data-n="03">
          <h2>Experience<em>.</em></h2>
        </div>

        <div className="exp-list">

          {/* ── Junior Engineer @ RMSI ──────────────────────────────────── */}
          <div className="exp-item sr" style={{ transitionDelay: '.07s' }}>
            <div className="exp-node">
              {/* Building/office icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="13" height="18" rx="1"/>
                <path d="M18 8h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2"/>
                <line x1="7"  y1="8"  x2="7"  y2="8.01"/>
                <line x1="11" y1="8"  x2="11" y2="8.01"/>
                <line x1="7"  y1="12" x2="7"  y2="12.01"/>
                <line x1="11" y1="12" x2="11" y2="12.01"/>
                <line x1="7"  y1="16" x2="11" y2="16"/>
              </svg>
            </div>
            <div className="exp-card">
              <div className="exp-card-top">
                <div className="exp-card-top-left">
                  <div className="exp-card-top-text">
                    <div className="exp-role">Junior Engineer</div>
                    <div className="exp-co-row">
                      <span className="exp-co">RMSI</span>
                      <span className="exp-dot"></span>
                      <span className="exp-loc">
                        {/* Location pin icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        Noida, India
                      </span>
                    </div>
                  </div>
                </div>
                <div className="exp-right">
                  <span className="exp-period">May 2024 – Mar 2025</span>
                  <span className="exp-badge">Full-time</span>
                </div>
              </div>
              <div className="exp-divider"></div>
              <p className="exp-desc">
                Built an <strong>interactive map-based web application</strong> for geospatial
                data visualization using <strong>LeafletJS + ReactJS</strong>, with dynamic
                layers, custom markers, and real-time data overlays for GIS workflows.
                Integrated <strong>Python</strong> backend services to process and serve
                spatial datasets efficiently.
              </p>
              <div className="exp-tags">
                <span className="tag">ReactJS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">LeafletJS</span>
                <span className="tag">Python</span>
                <span className="tag">GIS</span>
              </div>
            </div>
          </div>

          {/* ── Freelance Frontend Developer ────────────────────────────── */}
          <div className="exp-item sr" style={{ transitionDelay: '.15s' }}>
            <div className="exp-node">
              {/* Monitor/screen icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="13" rx="2"/>
                <path d="M1 20h22"/>
              </svg>
            </div>
            <div className="exp-card">
              <div className="exp-card-top">
                <div className="exp-card-top-left">
                  <div className="exp-card-top-text">
                    <div className="exp-role">Freelance Frontend Developer</div>
                    <div className="exp-co-row">
                      <span className="exp-co">Self-employed</span>
                      <span className="exp-dot"></span>
                      <span className="exp-loc">
                        {/* Globe icon for remote work */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9"/>
                          <path d="M12 3c0 0-3 3-3 9s3 9 3 9"/>
                          <path d="M12 3c0 0 3 3 3 9s-3 9-3 9"/>
                          <path d="M3.5 9h17M3.5 15h17"/>
                        </svg>
                        Remote
                      </span>
                    </div>
                  </div>
                </div>
                <div className="exp-right">
                  <span className="exp-period">Jan 2023 – Present</span>
                  <span className="exp-badge">Freelance</span>
                </div>
              </div>
              <div className="exp-divider"></div>
              <p className="exp-desc">
                Delivered <strong>high-performance web applications</strong> for clients across
                multiple domains with pixel-perfect UIs and optimized Core Web Vitals. Built
                scalable frontends using <strong>Next.js, TypeScript</strong>, and TailwindCSS,
                managing scope, timelines, and deliverables end-to-end.
              </p>
              <div className="exp-tags">
                <span className="tag">ReactJS</span>
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">TailwindCSS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
