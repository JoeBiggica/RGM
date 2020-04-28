import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Feature.scss';


class Feature extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		color: PropTypes.string,
		background_image: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		text_position: PropTypes.string,
		title_border: PropTypes.bool,
	}

	static defaultProps = {
		color: '#ffffff',
		text_position: 'right',
	}


	render() {
		const {
			className,
			title,
			description,
			color,
			background_image,
			image,
			url,
			text_position,
			title_border,
		} = this.props;

		const content_container_classname = styles('content-container', {
			'left': text_position === 'left',
			'right': text_position === 'right',
		});

		const title_description_classname = styles('title-description', {
			'left': text_position === 'left',
			'right': text_position === 'right',
		});

		const container_style = {
			backgroundImage: background_image && `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background_image})`
		};

		const image_style = {
			backgroundImage: image && `url(${image})`,
			border: image && `3px solid ${color}`,
		};

		const title_style = {
			border: title_border && `2px solid ${color}`,
			padding: '12px 14px',
		};

		const hover_background_style = {
			boxShadow: `0 0 10px 10px ${color}`,
		}

		return (
			<div 
				className={classnames(styles('container'), className)} 
				style={container_style}
			>
				<div className={styles('inner-container')}>
					<div className={content_container_classname}>
						<div className={title_description_classname}>
							<h3 
								className={styles('title')} 
								style={title_style}
							>
								{title}
							</h3>
							<p className={styles('description')}>
								{description}
							</p>
						</div>
						<div className={styles('image-container')}>
							{url ? 
								<a 
									href={url} 
									target='_blank'
									className={styles('image')}
									style={image_style} 
								>
									<div 
										className={styles('hover-background')} 
										style={hover_background_style}
									/>
								</a>
								: 
								<div 
									className={styles('image')} 
									style={image_style} 
								/>
							}
						</div>
					</div>
				</div>
			</div>
		);	
	}
}

export default Feature;
