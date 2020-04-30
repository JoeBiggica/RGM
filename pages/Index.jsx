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
				<section className={styles('main-container')}>
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
