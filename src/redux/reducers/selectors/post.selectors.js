import { createSelector } from "reselect";

const selectorPost = state => state.post;

export const selectorChosenQuantityPosts = createSelector(
  [selectorPost],
  (post) => post.chosenQuantityPosts
);

export const selectorLoader = createSelector(
  [selectorPost],
  (post) => post.loaded
);

export const selectorPosts = createSelector(
  [selectorPost],
  (post) => post.posts ? post.posts : []
);