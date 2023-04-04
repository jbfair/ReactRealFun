const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="row">
        <div className="links">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/movies">Movies</a>
          </div>
          <div>
            <a href="/bacon">Podcast</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
