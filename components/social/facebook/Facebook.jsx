import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import windowPopUp from '../windowPopUp';
import Color from '../Color';
import styles from '../Social.scss';


function shareClickHandler(share) {
	const encoded_url = encodeURIComponent(share.url);
	const encoded_title = encodeURIComponent(share.title);
	const url = `https://www.facebook.com/sharer/sharer.php?u=${encoded_url}&t=${encoded_title}`;
	return windowPopUp.bind(null, url, 600, 400);
}

function urlClickHandler(url) {
	return () => {
		window.open(url, '_blank');
	};
}

function Facebook({className, color, borderless, share, url}) {
	const composed_className = classnames(
		styles['icon'],
		styles['facebook'],
		styles[color],
		borderless ? styles['borderless'] : undefined,
		className,
	);

	const click_handler = share ? shareClickHandler(share) : urlClickHandler(url);

	return (
		<button
			type='button'
			className={composed_className}
			onClick={click_handler}
			aria-label='Facebook'
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'>
				<path d='M5.8 16V8.7h2.7l.4-2.8H5.8V4c0-.8.2-1.4 1.5-1.4H9V.1C8.7.1 7.8 0 6.6 0c-2.3 0-4 1.3-4 3.8v2.1H0v2.8h2.7V16h3.1z'/>
			</svg>
		</button>
	);
}

Facebook.Color = Color;

Facebook.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(Color)),
	borderless: PropTypes.bool,
	share: PropTypes.shape({
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}),
	url: PropTypes.string,
};

Facebook.defaultProps = {
	color: Color.WHITE_TO_ORIGINAL,
	borderless: false,
};

export default Facebook;
