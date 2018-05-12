import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteComment: (commentId) => {
      const { photoId } = ownProps;
      dispatch(photoActions.deleteComment(photoId, commentId));
    }
  }
}

export default connect(null, mapDispatchToProps)(Container);