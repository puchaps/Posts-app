import { createSelector } from "reselect";

const selectorPost = state => state.post;

export const selectorChoosedQuantityPosts = createSelector(
  [selectorPost],
  (post) => post.choosedQuantityPosts
);

export const selectorLoader = createSelector(
  [selectorPost],
  (post) => post.loaded
);

export const selectorPosts = createSelector(
  [selectorPost],
  (post) => post.posts ? post.posts : []
);