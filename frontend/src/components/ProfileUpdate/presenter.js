import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";

class ProfileUpdate extends Component {
  render() {
    if(!this.props.profile) {
      return (
        <div className={styles.loading}>
          <Loading />
        </div>
      )
    } else {
      return (
        <div className={styles.formComponent}>
          <form className={styles.form}>
            <div className={styles.field}>
              <span className={styles.label}>{this.context.t("Name")}</span>
                <input
                  type="text"
                  className={styles.input}
                  value={this.props.name}
                  onChange={this.props.handleInputChange}
                  name="name"
                />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>{this.context.t("Username")}</span>
              <input
                type="text"
                className={styles.input}
                value={this.props.userName}
                onChange={this.props.handleInputChange}
                name="userName"
              />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>{this.context.t("Website")}</span>
              <input
                type="url"
                className={styles.input}
                value={this.props.website}
                onChange={this.props.handleInputChange}
                name="website"
              />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>{this.context.t("Bio")}</span>
              <Textarea
                type="textarea"
                className={styles.input}
                value={this.props.bio ? this.props.bio : " "}
                onChange={this.props.handleInputChange}
                name="bio"
              />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>{this.context.t("Email")}</span>
              <input
                type="text"
                className={styles.input}
                value={this.props.email}
                onChange={this.props.handleInputChange}
                name="email"
              />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>{this.context.t("Gender")}</span>
              <select 
                name="gender"
                className={styles.input}
                defaultValue={this.props.profile.gender}>
                <option value="male">{this.context.t("Male")}</option>
                <option vale="female">{this.context.t("Female")}</option>
                <option  value={null}>{this.context.t("Null")}</option>
              </select>
            </div>
            <input 
              type="submit"
              className={styles.button}
              value={this.context.t("Submit")}
            />
          </form>
        </div>
      )
    }
  }

  static propTypes = {
    profile: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired,
      name: PropTypes.string,
      bio: PropTypes.string,
      website: PropTypes.string,
      gender: PropTypes.string
    }),
    handleInputChange: PropTypes.func.isRequired
  }
  static contextTypes = {
    t: PropTypes.func.isRequired
  }
}

export default ProfileUpdate;