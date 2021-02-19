import React from "react";
import { connect } from "react-redux";

import { changeValueFromInputAC } from "../../redux/reducers/actions/post.actions";
import { selectorChosenQuantityPosts } from "../../redux/reducers/selectors/post.selectors";
import getPostSFromDBThunk from "../../redux/reducers/thunks/post.thunks";

import "./post.form.styles.scss";

const PostForm = ({
  handleChangeValueFromInput,
  handleGetPostFromBD,
  onChosenQuantityPosts,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    handleGetPostFromBD();
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="post-form-descr">Quantity Posts:</div>
      <input
        type="number"
        onChange={(e) => handleChangeValueFromInput(e.target.value)}
        min="1"
        max="10"
        value={onChosenQuantityPosts}
      />
      <button type="submit">GENERATE</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  onChosenQuantityPosts: selectorChosenQuantityPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeValueFromInput: (value) => (
    dispatch(changeValueFromInputAC(value))
  ),
  handleGetPostFromBD: () => dispatch(getPostSFromDBThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
