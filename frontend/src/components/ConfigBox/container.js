import React from "react";
import PropTypes from "prop-types";
import ConfigBox from "./presenter";

const Container = props => (
  <ConfigBox 
    logout={props.logout}
    {...props} 
  />
)

Container.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Container;