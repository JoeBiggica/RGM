import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.scss';

const Color = {
	BLACK: 'black',
	WHITE: 'white'
};


class Button extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
		url: PropTypes.string,
		color: PropTypes.string
	}

	static defaultProps = {
		color: Color.WHITE
	}


	render() {
		const {
			className,
			text,
			url,
			target,
			color
		} = this.props;

		return (
			<div className={classnames(styles('container'), className)}>
				<a href={url} target={target} className={styles('button', `${color}`)}>
					<div className={styles('text')}>{text}</div>
				</a>
			</div>
		);	
	}
}

export default Button;
