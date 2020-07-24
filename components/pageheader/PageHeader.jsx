import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TextLabel from 'component-library/lib/textlabel';

import styles from './PageHeader.scss';


class PageHeader extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		background_color: PropTypes.string,
		background_skew: PropTypes.bool,
		underline_color: PropTypes.string
	}


	render() {
		const {
			className,
			title,
			background_color,
			background_skew,
			underline_color
		} = this.props;

		const background_classname = classnames(
			styles['background'],
			styles[background_skew && 'skew']
		);

		const background_style = {
			background: background_color
		};

		return (
			<div className={classnames(styles['container'], className)}>
				<div className={classnames(styles['inner'])}>
					<TextLabel
						className={classnames(styles['title'])}
						font={TextLabel.Font.FUTURA}
						text={title}
						tag='h2'
					/>
					{ underline_color && <div className={classnames(styles['underline'])} /> }
					{ background_color && 
						<div 
							className={background_classname} 
							style={background_style}
						/> 
					}
				</div>
			</div>
		);	
	}
}

export default PageHeader;
