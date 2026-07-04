const Education = () => (
  <section id="education">
    <div className="wrap">
      <div className="sec-hd sr" data-n="05">
        <span className="sec-hd-icon" aria-hidden="true">
          <svg viewBox="1 1 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
        </span>
        <h2>Education<em>.</em></h2>
      </div>
      <div className="edu-list">
        <div className="edu-item sr" style={{ transitionDelay: '.07s' }}>
          <div className="edu-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
              <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
              <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
            </svg>
          </div>
          <div className="edu-card">
            <div className="edu-header-row">
              <div className="edu-deg">
                <div className="edu-deg-content">
                  <div className="edu-deg-title">Bachelor of Computer Application</div>
                  <div className="edu-inst">Mangalmay Institute of Management and Technology · Greater Noida</div>
                </div>
              </div>
              <span className="edu-yr">July 2019 – Aug 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
