import React from "react";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";
import propTypes from "prop-types";

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
    <span className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Log in
      with Facebook
    </span>
    <span className={formStyles.forgotLink}>Forgot password?</span>
  </div>
);

LoginForm.prototype = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  handleInputChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired
};

LoginForm.contextTypes = {
  t: propTypes.func.isRequired
};

export default LoginForm;