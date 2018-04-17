import React, { Component } from "react";
import PasswordChange from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    username: "",
    profile_image: null,
    current_password: "",
    new_password: "",
    check_password: ""
  };

  render() {
    return (
      <PasswordChange
        {...this.props}
        {...this.state}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    let result;
    const { changePassword, status } = this.props;
    const { 
      current_password, 
      new_password, 
      check_password 
    } = this.state;
    event.preventDefault();

    if (status === 400) {
      console.log("status: ", status);
      result = "fail";
      this._passwordStatus(result);
    } else if (new_password !== check_password) {
      console.log("status: ", status);
      result = "match";
      this._passwordStatus(result);
    } else {
      result = "success";
      this._passwordStatus(result);
      changePassword(current_password, new_password);
    }
  };

  _passwordStatus(result) {
    if(result === "fail") {
      this.setState({
        changeView: true,
        changeDisplay: "The current password is not correct."
      })
      setTimeout(() => {
         this.setState({
           changeView: false,
          changeDisplay: ""
         }) 
      }, 5000)
    } else if(result === "match") {
      this.setState({
        changeView: true,
        changeDisplay: "The two password fields didn't match."
      })
      setTimeout(() => {
         this.setState({
            changeView: false,
            changeDisplay: ""
         }) 
      }, 5000)
    } else {
      this.setState({
        changeView: true,
        changeDisplay: "Success!"
      })
      setTimeout(() => {
         this.setState({
            changeView: false,
            changeDisplay: ""
         }) 
      }, 5000)
    }
  }

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      this.setState({
        username: nextProps.profile.username,
        profile_image: nextProps.profile.profile_image
      });
    }
  };

  static propTypes = {
    getProfile: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired
  };
}

export default Container;