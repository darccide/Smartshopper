import React, { Component } from "react";
import { Route } from "react-router-dom";

import Landing from "./components/layout/Landing.js";
import Nav from "./components/layout/Nav.js";
import SignUp from "./components/auth/SignUp.js";
import SignIn from "./components/auth/SignIn.js";
import Lists from "./components/list/Lists.js";
import List from "./components/list/List.js";

import "./App.css";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
    user: ""
  };

  componentDidMount() {
    this.callIndex()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callIndex = async () => {
    const response = await fetch("/");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    console.log(response);
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <main className="main-container">
          <Route exact path="/" component={Landing} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          <Route exact path="/Lists" component={Lists} />
          <Route path="/Lists/:id" component={List} />
        </main>
      </div>
    );
  }
}
export default App;
