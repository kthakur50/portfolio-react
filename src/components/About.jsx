const About = () => (
  <section id="about">
    <div className="wrap">
      <div className="sec-hd sr" data-n="01">
        <h2>About<em>.</em></h2>
      </div>

      <div className="about-bio sr" style={{ transitionDelay: '.04s' }}>
          <p className="about-para">
            An <em>AI Software Engineer</em> with <strong>1+ year of experience</strong> building
            scalable web applications. I work with <em>React</em>, <em>Next.js</em>,{' '}
            <em>TypeScript</em>, <em>JavaScript</em>, and <em>Python</em> — crafting
            user-focused, <strong>high-performance applications</strong> that are fast and easy to maintain.
          </p>
          <p className="about-para">
            I have hands-on experience in <strong>GIS-based solutions</strong> and{' '}
            <strong>interactive mapping</strong> using <em>Leaflet.js</em>, and I'm passionate
            about <strong>clean code</strong> and <strong>thoughtful UI/UX</strong> — turning
            complex problems into simple, intuitive experiences.
          </p>
          <p className="about-para">
            Currently exploring <em>AI-integrated development</em> — building tools that combine
            modern frontend architecture with <strong>intelligent automation</strong> and{' '}
            <em>real-time data pipelines</em>. I believe the best software is the kind users
            don't have to think about.
          </p>

          <div className="about-avail sr" style={{ transitionDelay: '.10s' }}>
            — Available for freelance &amp; full-time opportunities
          </div>
      </div>

    </div>
  </section>
);

export default About;
