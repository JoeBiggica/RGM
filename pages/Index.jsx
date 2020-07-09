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

		const logo_styles = {
			background: `url(static/rgm-logo.png) center center / 100% no-repeat`
		}

		return (
			<>
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
