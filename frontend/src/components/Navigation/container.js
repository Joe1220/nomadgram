import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: "",
    notification: false
  }
  static propTypes = {
    goToSearch: PropTypes.func.isRequired
  }
  render() {
    return <Navigation 
      {...this.state} 
      onInputChange={this._onInputChange}
      onSubmit={this._onSubmit} 
      handleNotification={this._handleNotification}
      value={this.state.term}/>
  }
  _onInputChange = event => {
    const { target: { value }} = event;
    this.setState({
      term: value
    })
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault()
    goToSearch(term)
    this.setState({
      term: ""
    })
  }
  _handleNotification = () => {
    const { notification } = this.state;
    if(notification) {
      this.setState({
        notification: false
      })
    } else {
      this.setState({
        notification: true
      })
    }
  }
}

export default Container;