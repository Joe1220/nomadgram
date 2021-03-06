import React from "react";
// import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";
// import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
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
    <GoogleLogin
      clientId="470628051393-6l270us6mnmj6g0m5o4muu90sns2v7er.apps.googleusercontent.com"
      buttonText="Google Login"
      className={formStyles.GoogleLogin}
      onSuccess={props.handleGoogleLogin}
    />
    <Link to="/reset">
      <span 
        className={formStyles.forgotLink}>
        {context.t("Forgot password?")}
      </span>
    </Link>
  </div>
);

LoginForm.prototype = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  handleInputChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleFacebookLogin: propTypes.func.isRequire,
  handleGoogleLogin: propTypes.func.isRequired
};

LoginForm.contextTypes = {
  t: propTypes.func.isRequired
};

export default LoginForm;