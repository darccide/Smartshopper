import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOut from "../auth/SignOut";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";

import "../../App.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  setUser(currentUser) {
    let user = currentUser;
    this.setState({ user: user });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <Link className="link" to="/">
            <span className="logo-title"> SMARTSHOPPER</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {this.state.user ? (
                <div>
                  <li className="nav-item-signedIn">
                    <Link className="link list-link" to="/Lists">
                      SMARTSHOPPER LISTS
                    </Link>
                  </li>
                  <li className="nav-item-signedIn">
                    <SignOut setUser={this.setUser.bind(this)} />
                  </li>
                </div>
              ) : (
                <div>
                  <li className="nav-item-signedOut">
                    <SignUp setUser={this.setUser.bind(this)} />
                  </li>
                  <li className="nav-item-signedOut">
                    <SignIn setUser={this.setUser.bind(this)} />
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
