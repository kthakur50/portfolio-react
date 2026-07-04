const Education = () => (
  <section id="education">
    <div className="wrap">
      <div className="sec-hd sr" data-n="05">
        <span className="sec-hd-icon" aria-hidden="true">
          <svg viewBox="1 4 22 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
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
