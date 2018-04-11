import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

const ConfigBox = (props, context) => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.content}>
        <span className={styles.item}>{context.t("change password")}</span>
        <span className={styles.item}>{context.t("notification")}</span>
        <span className={styles.item} onClick={props.logout}>
          {context.t("logout")}
        </span>
        <span className={styles.item}>{context.t("cancel")}</span>
      </div>
    </div>
  </div>
);

ConfigBox.propTypes = {
  logout: PropTypes.func.isRequired
}

ConfigBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default ConfigBox;
