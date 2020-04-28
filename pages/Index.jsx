import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Head from 'next/head';
import Button from 'components/button';
import Social from 'components/social';


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

		const logo_styles = {
			background: `url(static/leakybarrel-logo.png) no-repeat center`,
			backgroundSize: '100%'
		}

		return (
			<>
				<section className={styles('main-container')}>
{/*					<div className={styles('video-banner')}>
						<iframe src='//www.youtube.com/embed/182EssGqBf0?start=33&controls=0&autoplay=1&mute=1&loop=1&playsinline=1&showinfo=0&rel=0&wmode=transparent&autohide=1&playlist=182EssGqBf0&enablejsapi=1' />
					</div>*/}
					<div className={styles('content')}>
						<h1 style={{display: 'none'}}>Fong's Hung Ga</h1>
						<div className={styles('logo')} style={logo_styles} />
						<p className={styles('description')}>I promise, the water's fine.</p>
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
