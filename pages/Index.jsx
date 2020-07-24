import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Head from 'next/head';
import Social from 'components/social';
import SpringImage from 'components/springimage';
import Gallery from 'component-library/lib/gallery';

import styles from './Index.scss';

class Index extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	state = {
		enter_thunder: false,
		enter_water: false,
		enter_fire: false,
		enter_a_son: false
	}

	constructor(props) {
		super(props);
	}

	// toggle = () => {
	// 	const { toggleTap } = this.props
	// 	toggleTap()
	// }

	// increment = () => {
	// 	const { incrementCount } = this.props
	// 	incrementCount()
	// }

	// decrement = () => {
	// 	const { decrementCount } = this.props
	// 	decrementCount()
	// }

	componentDidMount() {
		// WATER CODE
		this.key_value = {
			65: 'a',
			66: 'b',
			67: 'c',
			68: 'd',
			69: 'e',
			70: 'f',
			71: 'g',
			72: 'h',
			73: 'i',
			74: 'j',
			75: 'k',
			76: 'l',
			77: 'm',
			78: 'n',
			79: 'o', 
			82: 'r', 
			83: 's',
			84: 't', 
			85: 'u', 
			86: 'v',
			87: 'w',
			88: 'x'
		};
		this.thunder_key_seq = [
			't', 'h', 'u', 'n', 'd', 'e', 'r', 'g', 'e', 'n', 'e', 's', 'i', 's'
		];
		this.water_key_seq = [
			'w', 'a', 't', 'e', 'r', 'e', 'x', 'o', 'd', 'u', 's'
		];
		this.fire_key_seq = [
			'f', 'i', 'r', 'e', 'l', 'e', 'v', 'i', 't', 'i', 'c', 'u', 's'
		];
		this.key_position = 0;

		document.addEventListener('keydown', this.sonsOfTheSpectrum);
	}

	sonsOfTheSpectrum = e => {
		const key = this.key_value[e.keyCode];
		const required_thunder_key = this.thunder_key_seq[this.key_position];
		const required_water_key = this.water_key_seq[this.key_position];
		const required_fire_key = this.fire_key_seq[this.key_position];
		console.log('spectrum!!', key, required_water_key);

		// Check for Thunder Genesis
		if (key === required_thunder_key) {
			this.key_position++;

			if (this.key_position === this.thunder_key_seq.length) {
				console.log('thunder genesis!');

				this.setState({ 
					enter_thunder: true,
					enter_a_son: true
				 });

				this.key_position = 0;
			}

		// Check for Water Exodus
		} else if (key === required_water_key) {
			this.key_position++;

			if (this.key_position === this.water_key_seq.length) {
				console.log('water exodus!!');

				this.setState({ 
					enter_water: true,
					enter_a_son: true
				 });

				this.key_position = 0;
			}

		// Check for Fire Leviticus
		} else if (key === required_fire_key){
			this.key_position++;

			if (this.key_position === this.fire_key_seq.length) {
				console.log('fire leviticus!!!');

				this.setState({ 
					enter_fire: true,
					enter_a_son: true 
				});

				this.key_position = 0;
			}
		} else {
			this.key_position = 0;
		}
	}

	render() {
		const {
			router
		} = this.props;

		const {
			enter_thunder,
			enter_water,
			enter_fire
		} = this.state;

		const logo_styles = {
			background: `url(static/rgm-logo.png) center center / 100% no-repeat`
		}

		if (this.state.enter_a_son && !this.state.spectrum_styles) {
			setTimeout(() => {
				this.setState({
					spectrum_styles: {
						height: '100%',
						opacity: '1'
					}
				});
			}, 1000);
		}

		const spectrum_takeover_classnames = styles('spectrum-takeover', {
			'yellow': enter_thunder,
			'blue': enter_water,
			'red': enter_fire
		});

		const medallion_classnames = styles('medallion', {
			'yellow': enter_thunder,
			'blue': enter_water,
			'red': enter_fire
		});

		return (
			<>
				<div className={styles('wrapper')}>
					<section className={styles('main', 'container')}>
						<div className={styles('content')}>
							<h1 style={{display: 'none'}}>RGM Reliable Glass and Metal</h1>
							<div className={styles('construction')} />
							<div className={styles('logo')} style={logo_styles}/>
							<div className={styles['social-buttons']}>
								<Social
									platforms={['instagram', 'email']}
									urls={['https://instagram.com/reliableglassandmetal', 'mailto:rgm.jesse@gmail.com']}
									color={Social.Color.WHITE_TO_RED}
								/>
							</div>
						</div>
					</section>

					{this.state.enter_a_son &&
						<div className={spectrum_takeover_classnames} style={this.state.spectrum_styles}>
							<div className={medallion_classnames} />
						</div>
					}
				</div>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		tap: state.tap,
		count: state.count
	}
}

const mapDispatchToProps = dispatch => {
	return {};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Index));
