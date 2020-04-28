import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './PageHeader.scss';


class PageHeader extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
	}


	render() {
		const {
			className,
			title
		} = this.props;

		return (
			<div className={classnames(styles('container'), className)}>
				<div className={styles('inner')}>
					<h2 className={styles('title')}>{title}</h2>
					<div className={styles('underline')} />
				</div>
			</div>
		);	
	}
}

export default PageHeader;
