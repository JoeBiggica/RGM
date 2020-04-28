import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Color from '../Color';
import styles from '../Social.scss';



function urlClickHandler(url) {
	return () => {
		window.open(url, '_self');
	};
}

function Email({className, color, borderless, url}) {
	const composed_className = classnames(
		styles['icon'],
		styles['email'],
		styles[color],
		borderless ? styles['borderless'] : undefined,
		className,
	);
	
	return (
		<button
			className={composed_className}
			onClick={urlClickHandler(url)}
			aria-label='mail'
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.241 65.318">
				<path d="M52.768,45.627c0.642-0.646,1.69-0.646,2.331,0l16.702,16.704c0.283-0.631,0.44-1.34,0.44-2.077V26.32     c0-0.625-0.094-1.286-0.268-1.954c-0.808,1.266-1.816,2.375-3.022,3.164L41.2,46.065c-1.5,0.962-3.295,1.372-5.08,1.379     c-1.782-0.007-3.58-0.417-5.078-1.379L3.293,27.53c-1.208-0.789-2.22-1.897-3.023-3.164C0.095,25.038,0,25.696,0,26.32v33.934     c0,0.737,0.159,1.446,0.442,2.077l16.702-16.704c0.641-0.646,1.687-0.646,2.331,0c0.645,0.645,0.645,1.689,0,2.331L2.69,64.75     c0.678,0.361,1.446,0.568,2.258,0.568h62.345c0.813,0,1.58-0.207,2.259-0.568L52.768,47.958     C52.125,47.317,52.125,46.272,52.768,45.627z"></path>
				<path d="M68.056,19.222L40.309,1.115c-2.304-1.486-6.073-1.486-8.374,0L4.187,19.222c-0.768,0.491-1.744,1.316-1.506,1.757    c0.646,1.209,1.566,2.261,2.398,2.792l7.416,4.843v-5.662c0-2.736,2.216-4.954,4.95-4.954h37.354c2.731,0,4.946,2.218,4.946,4.954    v5.662l7.419-4.843c0.833-0.531,1.752-1.583,2.398-2.792C69.8,20.539,68.824,19.713,68.056,19.222z"></path>
				<path d="M25.423,28.893c-0.912,0-1.65-0.742-1.65-1.65l0,0c0-0.912,0.738-1.65,1.65-1.65l0,0h21.396c0.912,0,1.65,0.738,1.65,1.65    l0,0c0,0.909-0.738,1.65-1.65,1.65l0,0H25.423L25.423,28.893z"></path>
				<path d="M25.421,36.448c-0.91,0-1.648-0.738-1.648-1.649l0,0c0-0.912,0.738-1.65,1.648-1.65l0,0h14.141    c0.91,0,1.648,0.738,1.648,1.65l0,0c0,0.911-0.738,1.649-1.648,1.649l0,0H25.421L25.421,36.448z"></path>
			</svg>
		</button>
	);
}

Email.Color = Color;

Email.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	url: PropTypes.string,
};

Email.defaultProps = {
	color: Color.WHITE_TO_ORIGINAL,
	borderless: false,
};

export default Email;
