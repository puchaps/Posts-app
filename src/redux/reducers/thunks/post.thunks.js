import axios from "axios"

import { 
  getPostFromDBSuccsesAC,
  getPostFromDBFailedAC, 
  toggleLoaderAC,
  clearInputAfterSubmitAC
} from "../actions/post.actions";

export const getPostSFromDBthunk= () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoaderAC());
      
      await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(posts => dispatch(getPostFromDBSuccsesAC(posts))
      );

      dispatch(clearInputAfterSubmitAC());
      dispatch(toggleLoaderAC());
    } catch(error) {
      dispatch(getPostFromDBFailedAC(error))
    };
  };
};

