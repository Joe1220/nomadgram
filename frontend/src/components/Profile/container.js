import React, { Component } from "react";
import PropTypes from "prop-types"
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getProfile: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { getProfile, username } = this.props;
    getProfile(username);
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.profile) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    return <Profile {...this.props} {...this.state} />;
  }
}

export default Container;