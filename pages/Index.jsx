import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Head from 'next/head';
import Button from 'components/button';
import Social from 'components/social';
import SpringImage from 'components/springimage';

import styles from './Index.scss';

class Index extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
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

	render() {
		const {
			router
		} = this.props;

		const text_logo_styles = {
			background: `url(static/leakybarrel-text-logo.png) center center / 100% no-repeat`
		}

		return (
			<>
				<section className={styles('main', 'container')}>
					<div className={styles('content')}>
						<h1 style={{display: 'none'}}>The Leaky Barrel</h1>
						{/*<div className={styles('text-logo')} style={text_logo_styles}/>*/}
						<SpringImage 
							className={styles('logo')}
							image_url='static/leakybarrel-full-logo.png' 
						/>
						{/*<p className={styles('description')}>I promise, the water's fine.</p>*/}
						<Button
							className={styles('buy-button')}
							text='SHOP NOW'
							url='https://theleakybarrel.shopsettings.com/'
						/>
						<div className={styles['social-buttons']}>
							<Social
								platforms={['facebook', 'instagram', 'email']}
								urls={['https://facebook.com/theleakybarrel', 'https://instagram.com/theleakybarrel', 'mailto:leakybarrel@gmail.com']}
								color={Social.Color.WHITE_TO_PURPLE}
							/>
						</div>
					</div>
				</section>
				<section className={styles('container', 'info')}>
					<div className={styles('content')}>
						<h2>Store Hours</h2>
						<div className={styles('info-line')}>Monday - Saturday 10AM - 9PM</div>
						<div className={styles('info-line')}>Sunday 12PM - 6PM</div>
					</div>
					<div className={styles('line')} />
					<div className={styles('content')}>
						<h2>Contact</h2>
						<div className={styles('info-line')}>
							<div>
								<span className={styles('label')}>Phone:</span>
								<a href='tel:7182560346'>(718) 256-0346</a>
							</div>
							<div>
								<span className={styles('label')}>Email:</span>
								<a href='tel:mailto:leakybarrel@gmail.com'>leakybarrel@gmail.com</a>
							</div>
						</div>
					</div>
					<div className={styles('line')} />
					<div className={styles('content')}>
						<h2>Location</h2>
						<div className={styles('info-line')}>
							<a href='https://g.page/leakybarrel?share' target='_blank'>
							<div>7611 New Utrecht Ave</div>
							<div>Brooklyn NY 11214</div>
							</a>
						</div>
						<iframe 
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48458.66210363597!2d-74.07336944307528!3d40.61518381154548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245e47c504e13%3A0x770482d822d7a8ac!2sLeaky%20Barrel%20Wine%20And%20Spirits!5e0!3m2!1sen!2sus!4v1588207365588!5m2!1sen!2sus' 
							width='600' 
							height='450' 
							frameBorder='0' 
							allowFullscreen=''
							tabIndex='0'
						/>
					</div>
				</section>
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
