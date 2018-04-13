import React, { Component } from "react";
import ProfileUpdate from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    userName: "",
    name: "",
    website: "",
    bio: "",
    email: "",
    gender: null
  };

  _handleInputChange = event => {
    console.log(event.target)
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    const { getProfile, username } = this.props;
    getProfile(username);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      this.setState({
        userName: nextProps.profile.username,
        name: nextProps.profile.name,
        website: nextProps.profile.website,
        bio: nextProps.profile.bio,
        email: nextProps.profile.email
      });
    }
  };

  render() {
    return (
      <ProfileUpdate
        {...this.state}
        {...this.props}
        handleInputChange={this._handleInputChange}
        profile={this.props.profile}
      />
    );
  }
  static propTypes = {
    profile: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired,
      name: PropTypes.string,
      bio: PropTypes.string,
      website: PropTypes.string,
      gender: PropTypes.string,
      email: PropTypes.string.isRequired
    })
  };
}

export default Container;