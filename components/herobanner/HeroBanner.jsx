import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HeroBanner.scss';

const HeroHeight = {
	FULL: 'full',
	THREE_QUATER: 'three-quater',
	HALF: 'half',
	AUTO: 'auto'
};

const TextPosition = {
	TOP: 'top',
	BOTTOM: 'bottom',
	CENTER: 'center'
}

const ButtonDirection = {
	ROW: 'row',
	COLUMN: 'column'
}

const BackgroundPosition = {
	TOP: 'top',
	BOTTOM: 'bottom',
	CENTER: 'center'
}

const Gradient = {
	TOP: 'top',
	BOTTOM: 'bottom'
}

class HeroBanner extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		title_border: PropTypes.bool,
		text_position: PropTypes.oneOf(Object.values(TextPosition)),
		buttons: PropTypes.array,
		button_border: PropTypes.bool,
		button_direction: PropTypes.string,
		image: PropTypes.object,
		background_image: PropTypes.string,
		background_position: PropTypes.oneOf(Object.values(BackgroundPosition)),
		hero_height: PropTypes.oneOf(Object.values(HeroHeight)),
		gradient: PropTypes.oneOf(Object.values(Gradient)),
	}

	static defaultProps = {
		button_direction: ButtonDirection.ROW,
		hero_height: HeroHeight.FULL
	}

	static HeroHeight = HeroHeight
	static TextPosition = TextPosition
	static ButtonDirection = ButtonDirection
	static BackgroundPosition = BackgroundPosition
	static Gradient = Gradient

	getBackground = (background_image, gradient) => {
		return `url(${background_image})`;
	}

	renderButton = (button, index) => {
		const button_container_classname = styles('button-container', {
			'border': this.props.button_border,
			'column': this.props.button_direction === 'column',
			'row': this.props.button_direction === 'row',
		});

		const button_classname = styles('button', {
			'border': this.props.button_border,
		});
		return (	
			<li className={button_container_classname}>
				{button.label && 
					<span className={styles('label')}>{button.label}</span>
				}
				<div className={button_classname}>
					<a href={button.url} target={button.target} onClick={button.onClick}>
						{button.text}
					</a>
				</div>
			</li>	
		);
	}


	render() {
		const {
			className,
			title,
			title_border,
			text_position,
			buttons,
			button_border,
			image,
			background_image,
			background_position,
			hero_height,
			gradient,
		} = this.props;

		const container_classname = styles('container', {
			'justify-top': text_position === 'top',
			'justify-bottom': text_position === 'bottom',
			'full': hero_height === 'full',
			'three-quater': hero_height === 'three-quater',
			'half': hero_height === 'half',
			'auto': hero_height === 'auto',
		});

		const background_style = {
			backgroundImage: background_image && this.getBackground(background_image, gradient),
			backgroundPosition: background_position && background_position,
		};

		const text_container_classname = styles('text-container', 'parallax-layer', 'parallax-base', {
			'border': title_border,
		});

		return (
			<div className={classnames(container_classname, className)}  style={background_style}>
				<div className={text_container_classname}>
					<h1 className={styles('title')}>{this.props.title}</h1>
				</div>
				{buttons &&
					<ul className={styles('buttons-container')}>
						{buttons.map(this.renderButton)}
					</ul>
				}
				{image &&
					<div className={styles('image-container')} onClick={image.onClick}>
						<img className={styles('image')} src={image.src} />
					</div>
				}
			</div>
		);	
	}
}

export default HeroBanner;
