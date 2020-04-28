import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Layout.scss';

class Layout extends PureComponent {

	static propTypes = {
		children: PropTypes.node,
		padding: PropTypes.bool
	}


	render() {
		const {
			className,
			children,
			padding
		} = this.props;

		const inner_classname = styles('inner', {
			'padding': padding
		});

		return (
			<div className={classnames(styles('container'), className)}>
				<div className={inner_classname}>
					{children}
				</div>
			</div>
		);	
	}
}

export default Layout;
