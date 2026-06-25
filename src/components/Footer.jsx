const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(255,255,255,0.07)',
    padding: '28px 0',
    textAlign: 'center',
  }}>
    <p style={{
      margin: 0,
      fontSize: '0.78rem',
      color: 'rgba(255,255,255,0.35)',
      letterSpacing: '0.04em',
      fontFamily: 'inherit',
    }}>
      © {new Date().getFullYear()} Kaushal Thakur
    </p>
  </footer>
);

export default Footer;
