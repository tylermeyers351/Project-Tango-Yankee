function Header(props) {
  return (
    <div className="row smaller-font">
      <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#"
            ><img
              id="MDB-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Arrow_Compass_Orange.png"
              alt="MDB Logo"
              draggable="false"
              height="40"
          /><h3 className="logoStyle mt-1">Tycation.com</h3></a>
          <button 
            style={{ color: '#F5793B' }}
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a style={{ color: '#f1580c' }} className="nav-link mx-2" href="#"><i className="fas fa-plus-circle pe-2"></i>Post</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#f1580c' }} className="nav-link mx-2" href="#"><i className="fas fa-bell pe-2"></i>Alerts</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#f1580c' }} className="nav-link mx-2" href="#"><i className="fas fa-heart pe-2"></i>Trips</a>
              </li>
              <li className="nav-item ms-3">
                <a style={{ color: 'white', backgroundColor: '#F5793B', fontWeight: 'bold', border: 'none' }} 
                className="btn btn-dark btn-rounded" href="#"
                >Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
