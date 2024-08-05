import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
