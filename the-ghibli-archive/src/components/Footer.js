import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <footer className="footer">
        <div className="d-flex justify-content-between">
          <div className="container">
            <div id="author">tyrone oggen</div>
          </div>
          <div className="login-icon">
            <button onClick={isAuthenticated() ? logout : login}>
              <img
                src={
                  isAuthenticated()
                    ? require("../images/svg/unlock.svg")
                    : require("../images/svg/lock.svg")
                }
                alt={"login"}
              />
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
