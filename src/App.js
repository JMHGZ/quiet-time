import React, { Component } from "react";
// import Nav from "./Nav";
import { Route, Switch, Redirect } from "react-router-dom";
// import JournalForm from "./JournalForm/index";
// import Post from "./Post.jsx";
import NavBar from "./components/NavBar/NavBar";
import userService from "./utils/userService";
import tokenService from "./utils/tokenService";
import SignupPage from "./pages/SignupPage/SignupPage";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";

class App extends Component {
  state = {
    user: userService.getUser(),
    isShowing: true,
    posts: [],
    joke: "",
    edit: ""
  };

  handleLogout = () => {
    userService.logOut();
    this.setState({
      user: null
    });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App container">
        <div className="login">
          {" "}
          <LoginPage signIn={this.handleSignupOrLogin} />
        </div>
        <hr />
        <div className="signup">
          {" "}
          <SignupPage signIn={this.handleSignupOrLogin} />
        </div>
      </div>
    );
  }
}

export default App;
