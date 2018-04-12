import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import ProfileUpdate from "components/ProfileUpdate";
import PasswordChange from "components/PasswordChange";

const ProfileChange = (props, context) => (
  <div className={styles.container}>
    <div className={styles.tab}>
      <Link to={`/${props.username}/profile`}>
        <button className={props.editProfile ? styles.clicked : styles.tabButton}>
          {context.t("Edit Profile")}
        </button>
      </Link>
      <Link to={`/${props.username}/password`}>
        <button className={props.editPassword ? styles.clicked : styles.tabButton}>
          {context.t("Change Password")}
        </button>
      </Link>
    </div>
    {props.editProfile && <ProfileUpdate />}
    {props.editPassword && <PasswordChange />}
  </div>
);

ProfileChange.contextTypes = {
  t: PropTypes.func.isRequired
}

ProfileChange.propTypes = {
  editProfile: PropTypes.bool.isRequired,
  editPassword: PropTypes.bool.isRequired,
  editProfileFunc: PropTypes.func.isRequired,
  editPasswordFunc: PropTypes.func.isRequired
};

export default ProfileChange