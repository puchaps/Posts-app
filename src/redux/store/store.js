import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../rootReducer/root.reducer';

const middlewareall = [
  logger,
  thunk
]

export const STORE = createStore(rootReducer, applyMiddleware(...middlewareall));
