// ─── Projects Section ──────────────────────────────────────────────────────
// Just renders the section heading + an empty container (#masonryList).
// The actual project cards are injected dynamically by initMasonry() in
// portfolio.js — kept there (rather than as JSX) because each card also
// needs initSR() re-run on it for the scroll-reveal animation to pick it up.

const Projects = () => {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-hd sr" data-n="04">
          <h2>Projects<em>.</em></h2>
        </div>
        <div className="masonry-list" id="masonryList"></div>
      </div>
    </section>
  );
};

export default Projects;
