import React, { Component } from "react";
import userService from "../../utils/userService";
import { Route, Link, Redirect } from "react-router-dom";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: ""
  };

  handleChange = e => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      //let app know user has signed up
      await this.props.signIn();
      // Successfully signed up - show beers page
      // this.props.history.push("/beers");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer">Or, Sign Up!</header>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="col-sm-12">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
              <small id="passwordHelp" className="">
                Must match password
              </small>
            </div>
          </div>
          {/* <div>
            <a className="" disabled={this.isFormInvalid()}>
              Sign Up
            </a>
            &nbsp;&nbsp;
            <Link to="/">Cancel</Link>
          </div> */}

          {/* <Route
            exact
            path="http://localhost:3002/"
            render={() =>
              userService.getUser() ? (
                <Link
                  posts={this.state.posts}
                  handleUpdatePost={this.handleUpdatePost}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          /> */}

          <div className="form-group">
            <div className="col-sm-12 text-center">
              <a className="btn btn-default" href="http://localhost:3002/">
                Sign Up
              </a>
              &nbsp;&nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
