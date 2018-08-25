import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";
import { push } from 'react-router-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(userActions.logout())
      dispatch(push("/"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);