const Projects = () => (
  <section id="projects">
    <div className="wrap">
      <div className="sec-hd sr" data-n="04">
        <span className="sec-hd-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
        </span>
        <h2>Projects<em>.</em></h2>
      </div>
      <div className="masonry-list" id="masonryList"></div>
    </div>
  </section>
);

export default Projects;
