import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container d-flex justify-content-between">
          <div id="author">tyrone oggen</div>
          <div className="login-icon">
            <img src={require("../images/svg/lock.svg")} alt={"login"} />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
