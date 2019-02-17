import React, { Component } from "react";

import "../../App.css";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
      user: ""
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/users/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    });
    console.log(response);

    const body = await response.json();
    console.log(body);
    if (body.error === "Validation error") {
      window.alert("Email already exists");
    } else {
      this.setState({ user: body });
      this.props.setUser(body);
    }

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="container col-md-3 offset-md-3">
        <form className="signUpForm" onSubmit={this.onSubmit}>
          <div className="form-group row">
            <div className="col-lg-8 ">
              <input
                name="email"
                value={this.state.email}
                className="sign-up-field"
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="Email Address"
              />
              <input
                name="password"
                className="sign-up-field"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Password"
              />
              <button type="submit" className="btn auth-btn">
                {" "}
                SIGN UP
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
