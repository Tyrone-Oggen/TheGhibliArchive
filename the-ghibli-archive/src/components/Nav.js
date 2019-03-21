import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-none">
        <div className="container">
          <span className="navbar-brand">
            <Link to="/">the ghibli archive</Link>
          </span>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                {isAuthenticated() ? (
                  <Link to="/private-films" className="nav-link">
                    Films
                  </Link>
                ) : (
                  <Link to="/films" className="nav-link">
                    Films
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <span className="nav-link">search</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
