import { 
  CHANGE_VALUE_FROM_INPUT,
  CLEAR_INPUT_AFTER_SUBMIT,
  GET_POST_BY_QUANTITY_FAILED,
  GET_POST_BY_QUANTITY_SUCCSES,
  TOGGLE_LOADER
} from "./types/post.types";
import { convertGetedPosts } from "./utils/post.utils";

const INITIAL_STATE = {
  posts: null,
  choosedQuantityPosts: '',
  loaded: false,
  error: null
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_VALUE_FROM_INPUT:
      return {
        ...state,
        choosedQuantityPosts: action.payload
      };
    case CLEAR_INPUT_AFTER_SUBMIT:
      return {
        ...state,
        choosedQuantityPosts: ''
      };
    case GET_POST_BY_QUANTITY_SUCCSES:
      return {
        ...state,
        posts: convertGetedPosts(action.payload, state.choosedQuantityPosts),
        error: null,
      };
    case GET_POST_BY_QUANTITY_FAILED:
      return {
        ...state,
        posts: null,
        error: action.payload
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        loaded: !state.loaded
      }
    default:
      return state;
  };
};

export default postReducer;