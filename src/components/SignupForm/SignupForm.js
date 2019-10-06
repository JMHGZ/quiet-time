import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import style from "./SignupForm.module.css";
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
      this.props.handleSignupOrLogin();
      // Successfully signed up - show beers page
      this.props.history.push("/beers");
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
      <div className={`container ${style.flex}`}>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Confirm password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
              <small id="passwordHelp" className="form-text text-muted">
                Must match password
              </small>
            </div>
          </div>
          <div>
            <button className="btn btn-primary" disabled={this.isFormInvalid()}>
              Sign Up
            </button>
            &nbsp;&nbsp;
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
