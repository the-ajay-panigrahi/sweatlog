import ThemeBtn from "./ThemeBtn";

const Header = () => {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <div className="brand">
          <h1 className="wordmark">SweatLog</h1>
          <div className="tagline-wrap">
            <span className="tagline">Track. Train. Transform.</span>
          </div>
        </div>
        <ThemeBtn />
      </div>
    </header>
  );
};

export default Header;
