const About = () => (
  <section id="about">
    <div className="wrap">
      <div className="sec-hd sr" data-n="01">
        <h2>About<em>.</em></h2>
      </div>

      <div className="about-s sr" style={{ transitionDelay: '.04s' }}>

        <p className="about-s-text">
          Fullstack developer with <strong>1+ year</strong> at RMSI —
          building with <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> &amp; <strong>Python</strong>.
          Focused on <strong>GIS</strong>, clean UI, and <strong>AI-integrated</strong> systems.
        </p>

        <div className="about-s-stats">
          <div className="about-s-stat">
            <span>1<em>+</em></span>
            <small>Years Exp.</small>
          </div>
          <div className="about-s-divider" />
          <div className="about-s-stat">
            <span>12<em>+</em></span>
            <small>Projects</small>
          </div>
          <div className="about-s-divider" />
          <div className="about-s-stat">
            <span>8<em>+</em></span>
            <small>Tech Stack</small>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
