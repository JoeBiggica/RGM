import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';
import styles from './SpringImage.scss';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function SpringImage(props) {
	const {
		className,
		image_url
	} = props;

	const [dimensions, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

	const image_styles = {
		backgroundImage: `url(${image_url})`,
		transform: dimensions.xys.interpolate(trans)
	}
	return (
		<div className={classnames(styles('container'), props.className)}>
			<animated.div
				className={styles('card')}
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [0, 0, 1] })}
				style={image_styles}
		    />
		</div>
	);	
}

SpringImage.propTypes = {
	className: PropTypes.string,
	image_url: PropTypes.string
};

export default SpringImage;
