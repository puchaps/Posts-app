import { 
  CHANGE_VALUE_FROM_INPUT,
  CLEAR_INPUT_AFTER_SUBMIT,
  GET_POST_BY_QUANTITY_FAILED,
  GET_POST_BY_QUANTITY_SUCCSES,
  TOGGLE_LOADER
} from '../types/post.types';

////////////////////--INPUT_VALUE--////////////////////
export const changeVlueFromInputAC = value => ({
  type: CHANGE_VALUE_FROM_INPUT,
  payload : value
});
export const clearInputAfterSubmitAC = () => ({
  type: CLEAR_INPUT_AFTER_SUBMIT
});
////////////////////--FOT_INPUT////////////////////


////////////////////--GET_POSTS--////////////////////
export const getPostFromDBSuccsesAC = (posts) => ({
  type: GET_POST_BY_QUANTITY_SUCCSES,
  payload: posts
});
export const getPostFromDBFailedAC = (error) => ({
  type: GET_POST_BY_QUANTITY_FAILED,
  payload: error
});
////////////////////--GET_POSTS--////////////////////


////////////////////--TOGGLE--////////////////////
export const toggleLoaderAC = () => ({
  type: TOGGLE_LOADER
});
////////////////////--TOGGLE--////////////////////