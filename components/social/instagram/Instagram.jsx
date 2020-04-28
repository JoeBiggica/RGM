import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Color from '../Color';
import styles from '../Social.scss';


function urlClickHandler(url) {
	return () => {
		window.open(url, '_blank');
	};
}

function Instagram({className, color, borderless, url}) {
	const composed_className = classnames(
		styles['icon'],
		styles['instagram'],
		styles[color],
		borderless ? styles['borderless'] : undefined,
		className,
	);

	return (
		<button
			type='button'
			className={composed_className}
			onClick={urlClickHandler(url)}
			aria-label='Instagram'
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'>
				<path d='M7 4.7c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3z'/>
				<path d='M14 4.1c0-.6-.1-1.2-.3-1.7-.4-.9-1.1-1.7-2-2C11 .2 10.5.1 9.9 0H4.1C3.5.1 3 .2 2.4.4c-.9.4-1.7 1.1-2 2C.2 3 .1 3.5 0 4.1v5.8c0 .6.1 1.2.3 1.7.4.9 1.1 1.7 2 2 .7.2 1.2.3 1.8.4h5.8c.6 0 1.2-.1 1.7-.3.9-.4 1.7-1.1 2-2 .2-.5.3-1.1.3-1.7V7.1c0-1.9.1-2.2.1-3zM10.6 7c0 2-1.6 3.6-3.6 3.6S3.4 9 3.4 7 5 3.4 7 3.4 10.6 5 10.6 7zm1-3.7c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8.4-.1.8.3.8.8z'/>
			</svg>
		</button>
	);
}

Instagram.Color = Color;

Instagram.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	url: PropTypes.string,
};

Instagram.defaultProps = {
	color: Color.WHITE_TO_ORIGINAL,
	borderless: false,
};

export default Instagram;
