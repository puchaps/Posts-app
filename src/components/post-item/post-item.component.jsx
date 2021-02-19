import React from "react";

import "./post-item.styles.scss";

const PostItem = ({ body, title }) => (
  <div className="post-item">
    <div className="post-item-title">
      <span className="title">Title</span>
      <span className="title-text">{`${title
        .slice(0, 1)
        .toUpperCase()}${title.slice(1)}`}</span>
    </div>
    <div className="post-item-body">
      <span className="descr">Descr</span>
      <span className="descr-text">{`${body
        .slice(0, 1)
        .toUpperCase()}${body.slice(1)}`}</span>
    </div>
  </div>
);

export default PostItem;
