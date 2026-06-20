const Footer = () => (
  <footer>
    <div className="f-inner">
      <a className="f-logo" href="#home">
        <span className="logo-k">kt<em>.</em></span>
      </a>
      <span className="f-copy">© {new Date().getFullYear()} Kaushal Thakur. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
