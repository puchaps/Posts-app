import React from "react";
import { connect } from "react-redux";

import { selectorLoader } from "../../redux/reducers/selectors/post.selectors";

import "./post-block.styles.scss";

import PostForm from "../post-form/post-form.component";
import PostPreview from "../post-preview/post-preview.component";
import Loader from "../loader/loader.component";

const PostBlock = ({ onLoader }) => (
  <div className="post-block">
    <div className="post-block-title">
      <h1>Posts</h1>
    </div>
    <PostForm />
    <Loader onLoader={onLoader}>
      <PostPreview />
    </Loader>
  </div>
);

const mapStateToProps = (state) => ({
  onLoader: selectorLoader(state),
});

export default connect(mapStateToProps)(PostBlock);
