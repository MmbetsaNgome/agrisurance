import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="head-container sticky">
        <div className="row minimal-header">
          <div className="logo col-md-4">
            <h2>
              <a href="/">Agrisuarance-Dao</a>
            </h2>
          </div>
          <div className="col-md-8">
            <nav>
              <div className="links-container">
                <ul className="links">
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
