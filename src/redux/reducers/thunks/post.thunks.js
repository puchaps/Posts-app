import axios from "axios";

import {
  getPostFromDBSuccessAC,
  getPostFromDBFailedAC,
  toggleLoaderAC,
  clearInputAfterSubmitAC,
} from "../actions/post.actions";

const getPostSFromDBThunk = () => async (dispatch) => {
  try {
    dispatch(toggleLoaderAC());

    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((posts) => dispatch(getPostFromDBSuccessAC(posts)));

    dispatch(clearInputAfterSubmitAC());
    dispatch(toggleLoaderAC());
  } catch (error) {
    dispatch(getPostFromDBFailedAC(error));
  }
};

export default getPostSFromDBThunk;
