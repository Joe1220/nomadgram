import React, { Component } from "react";
import LoginForm from "./presenter";
import propTypes from "prop-types";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: propTypes.func.isRequired,
    googleLogin: propTypes.func.isRequired,
    usernameLogin: propTypes.func.isRequired
  };
  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        handleGoogleLogin={this._handleGoogleLogin}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    usernameLogin(username, password)
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
  _handleGoogleLogin = response => {
    const { googleLogin } = this.props;
    googleLogin(response.accessToken);
  };
}

export default Container;