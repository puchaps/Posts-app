/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";

import { selectorPosts } from "../../redux/reducers/selectors/post.selectors";

import PostItem from "../post-item/post-item.component";

const PostPreview = ({ onPosts }) => (
  <>
    {onPosts.map(({ id, ...otherProps }) => (
      <PostItem key={id} {...otherProps} />
    ))}
  </>
);

const mapStateToProps = (state) => ({
  onPosts: selectorPosts(state),
});

export default connect(mapStateToProps)(PostPreview);
