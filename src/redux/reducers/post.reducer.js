import {
  CHANGE_VALUE_FROM_INPUT,
  CLEAR_INPUT_AFTER_SUBMIT,
  GET_POST_BY_QUANTITY_FAILED,
  GET_POST_BY_QUANTITY_SUCCESS,
  TOGGLE_LOADER,
} from "./types/post.types";

import transformPosts from "./utils/post.utils";

const INITIAL_STATE = {
  posts: null,
  chosenQuantityPosts: "",
  loaded: false,
  error: null,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VALUE_FROM_INPUT:
      return {
        ...state,
        chosenQuantityPosts: action.payload,
      };
    case CLEAR_INPUT_AFTER_SUBMIT:
      return {
        ...state,
        chosenQuantityPosts: "",
      };
    case GET_POST_BY_QUANTITY_SUCCESS:
      return {
        ...state,
        posts: transformPosts(action.payload, state.chosenQuantityPosts),
        error: null,
      };
    case GET_POST_BY_QUANTITY_FAILED:
      return {
        ...state,
        posts: null,
        error: action.payload,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        loaded: !state.loaded,
      };
    default:
      return state;
  }
};

export default postReducer;
