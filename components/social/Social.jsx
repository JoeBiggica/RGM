import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Facebook from './facebook';
import YouTube from './youtube';
import Instagram from './instagram';
import Email from './email';

import Color from './Color';
import styles from './Social.scss';


const Platform = {
	FACEBOOK: 'facebook',
	YOUTUBE: 'youtube',
	INSTAGRAM: 'instagram',
	EMAIL: 'email',
};

class Social extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		platforms: PropTypes.array.isRequired,
		urls: PropTypes.arrayOf(PropTypes.string),
		color: PropTypes.oneOf(Object.values(Color)),
		borderless: PropTypes.bool,
	}

	static defaultProps = {
		urls: [],
		color: Color.GRAY_TO_ORIGINAL,
		borderless: false,
	}

	static Platform = Platform;
	static Color = Color;

	renderSocialButton(urls, color, borderless, platform, index) {
		const url = urls[index];

		const props = {
			key: platform,
			color,
			borderless,
			url,
		};

		switch (platform) {
			case Platform.FACEBOOK:
				return <Facebook {...props} />;

			case Platform.YOUTUBE:
				return <YouTube {...props} />;

			case Platform.INSTAGRAM:
				return <Instagram {...props} />;

			case Platform.EMAIL:
				return <Email {...props} />;

			default:
				return null;
		}
	}

	render() {
		const { urls, share, color, borderless } = this.props;

		return (
			<div className={classnames(styles['container'], this.props.className)}>
				{this.props.platforms.map(
					this.renderSocialButton.bind(null, urls, color, borderless)
				)}
			</div>
		);
	}

}

export default Social;
