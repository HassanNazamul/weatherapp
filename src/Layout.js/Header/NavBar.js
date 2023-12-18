function NavBar() {
  return (
    <nav className="navbar navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Weather app</a>

        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="submit"
            className="btn btn-outline-secondary"
            id="search-addon"
          >
            {/* Adding Search Icon */}
            <i className="fa fa-search"></i>
          </button>
        </form>
        
      </div>
    </nav>
  );
}

export default NavBar;
