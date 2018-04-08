import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

class Profile extends Component{
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.image}>
            afd
          </div>
        </div>
      </div>
    )
  }
}

export default Profile