import React from "react";
import propTypes from "prop-types";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={styles.logo}
            alt={context.t("Logo")}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <input
          type="text"
          placeholder={context.t("Search")}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <Ionicon icon="ios-compass-outline" fontsize="20px" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <Ionicon icon="ios-heart-outline" fontsize="20px" color="black" />
        </div>
        <div className={styles.navIcon}>
          <Link to="/profile">
            <Ionicon icon="ios-person-outline" fontsize="20px" color="black" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.contextTypes = {
  t: propTypes.func.isRequired
}

export default Navigation;