import { Action } from 'actions';

// REDUCERS
export const reducer = (state = {}, action) => {

	const { meta, payload } = action;

	switch (action.type) {
		case 'FETCH_ARTICLE_SUCCESS': {
			console.log('ARTICLE SUCCESS!');
			console.log('PAYLOAD', payload);
			
			return {
				...state,
				article: payload.article
			};
		}

		case 'FETCH_ARTICLE_REQUEST': {
			console.log('ARTICLE REQUEST');
			return {
				...state
			};
		}

		default:
			return state
	}
}