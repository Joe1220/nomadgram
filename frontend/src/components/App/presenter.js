import React from "react";
import propTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";
import Navigation from "components/Navigation";
import Feed from "components/Feed";
import Explore from "components/Explore";
import Search from "components/Search"
import Profile from "components/Profile";
import ProfileUpdateForm from "components/ProfileUpdateForm";
import ResetPassword from "components/ResetPassword";

const App = props => [
  props.isLoggedIn ? <Navigation key={11} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={12} /> : <PublicRoutes key={2} />,
  <Footer key={13} />
];

App.propTypes = {
  isLoggedIn: propTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Feed} />,
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/search/:searchTerm" component={Search} />
    <Route exact path="/:username" component={Profile} />,
    <Route exact path="/:username/profile" component={ProfileUpdateForm} />
    <Route exact path="/:username/password" component={ProfileUpdateForm} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route path="/" component={Auth} />,
    <Route exact path="/accounts/password/reset/" component={ResetPassword} />
  </Switch>
);

export default App;
