import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HamburgerButton.scss';


class HamburgerButton extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		onClick: PropTypes.func,
	}

	static defaultProps = {
		onClick: () => {},
	}

	state = {
		active: false,
	}

	handleClick = e => {
		const active = !this.state.active;

		this.setState({
			active,
		});

		this.props.onClick(e);
	}

	render() {
		const {
			className,
		} = this.props;

		const {
			active,
		} = this.state;

		return (
			<button
				className={classnames(styles('button', {
					active,
				}), className)}
				onClick={this.handleClick}
			>
				<div className={styles('hamburger')} />
			</button>
		);
	}
}

export default HamburgerButton;
