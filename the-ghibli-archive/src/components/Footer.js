import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <footer className="footer">
        <div id="footer-container" className="">
          <div className="container d-flex justify-content-between ">
            <span id="author">tyrone oggen</span>
            <div className="user-profile">
              {isAuthenticated() ? (
                <Link to="/profile">View profile</Link>
              ) : (
                <Link to="/profile" className="btn btn-login" onClick={login}>
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="login-icon ">
            <button
              className="btn btn-auth "
              onClick={isAuthenticated() ? logout : login}
            >
              <img
                src={
                  isAuthenticated()
                    ? require("../images/svg/unlock.svg")
                    : require("../images/svg/lock.svg")
                }
                alt="login"
              />
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
