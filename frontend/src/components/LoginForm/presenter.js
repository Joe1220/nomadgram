import React from "react";
// import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";
import FacebookLogin from "react-facebook-login";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input
        type="submit"
        value="Log in"
        onClick={props.handleSubmit}
        className={formStyles.button}
      />
    </form>
    <span className={formStyles.divider}>or</span>
    <FacebookLogin
      appId="155702698444190"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.facebookLink}
      icon="fa-facebook-official"
      textButton={context.t("Log in with Facebook")}
    />
    <span className={formStyles.forgotLink}>
      <Link to="/accounts/password/reset/">
        {context.t("Forgot password?")}
      </Link>
    </span>
  </div>
);

LoginForm.prototype = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  handleInputChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleFacebookLogin: propTypes.func.isRequire
};

LoginForm.contextTypes = {
  t: propTypes.func.isRequired
};

export default LoginForm;