// ─── Footer Component ──────────────────────────────────────────────────────
// Simple footer with logo and copyright text.

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="f-inner">
        <a className="f-logo" href="#home">
          <span className="logo-k">kt<em>.</em></span>
        </a>
        <span className="f-copy">© {year} Kaushal Thakur. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
