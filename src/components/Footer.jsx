const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()}{" "}
          <span className="emphasis">SweatLog</span>
          <span className="footer-dot">·</span>
          Built with discipline.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
