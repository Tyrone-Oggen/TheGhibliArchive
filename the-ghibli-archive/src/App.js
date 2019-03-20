import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Films from "./components/Films";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Auth from "./Auth/Auth";
import Callback from "./Auth/Callback";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav />
        <Route
          path="/"
          exact
          render={props => <Home auth={this.auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => <Callback auth={this.auth} {...props} />}
        />
        <Route path="/about" component={About} />
        <Route path="/films" component={Films} />
        <Route
          path="/profile"
          render={props =>
            this.auth.isAuthenticated() ? (
              <Profile auth={this.auth} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Footer auth={this.auth} />
      </>
    );
  }
}

export default App;
