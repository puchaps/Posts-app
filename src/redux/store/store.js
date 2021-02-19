/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../rootReducer/root.reducer";

const middlewareAll = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewareAll));

export default store;
