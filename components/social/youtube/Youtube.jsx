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

function YouTube({className, color, borderless, url}) {
	const composed_className = classnames(
		styles['icon'],
		styles['youtube'],
		styles[color],
		borderless ? styles['borderless'] : undefined,
		className,
	);

	return (
		<button
			type='button'
			className={composed_className}
			onClick={urlClickHandler(url)}
			aria-label='YouTube'
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.01 11.94'>
				<path d='M12 6L6.11 9.27V2.69zm5.5 3V2.92A2.94 2.94 0 0 0 14.4 0H2.6S-.5 0-.5 2.92V9a2.93 2.93 0 0 0 3.1 3h11.8s3.1 0 3.1-3'/>
			</svg>
		</button>
	);
}

YouTube.Color = Color;

YouTube.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	url: PropTypes.string,
};

YouTube.defaultProps = {
	color: Color.WHITE_TO_ORIGINAL,
	borderless: false,
};

export default YouTube;
