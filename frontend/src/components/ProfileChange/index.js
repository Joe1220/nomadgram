import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username
  }
}

export default connect(mapStateToProps)(Container);