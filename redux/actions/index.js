/* import { RSAA, getJSON } from 'redux-api-middleware'; */

// ACTIONS
const Type = {
	FETCH_ARTICLE: 'FETCH_ARTICLE'
}
console.log('actions loaded');
const Action = {

	/* fetchArticle: slug => {
		console.log('FETCH ARTICLE');
		return {
			[RSAA]: {
				endpoint: `https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/${slug}.json`,
				method: 'GET',
				headers: {},
				types: [
					{
						type: `${Type.FETCH_ARTICLE}_REQUEST`,
					},
					{
						type: `${Type.FETCH_ARTICLE}_SUCCESS`,
						payload: (action, state, res) => {
							console.log('SUCCESS', res);
							return getJSON(res).then(json => json, err => undefined);
						},
					},
					{
						type: `${Type.FETCH_ARTICLE}_FAILURE`,
						meta: (action, state, res) => {
							console.log('FAIL', res);
							if (res) {
								return {
									status: res.status,
									statusText: res.statusText
								};
							}

							return {
								status: 'Network request failed'
							};
						}
					}
				]
			}
		}
	} */
}

export { Type, Action };