import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { apiMiddleware } from 'redux-api-middleware';

import { reducer } from './reducers';

export function initializeStore (initial_state = {}) {

	const createStoreWithMiddleware = (createStore);

	const store = createStoreWithMiddleware(reducer, initial_state, composeWithDevTools());
	
	return store;
}