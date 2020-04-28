import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Header from 'components/header';
import Layout from 'components/layout';

import styles from './LionDanceRequest.scss';

import PropTypes from 'prop-types';

class LionDanceRequest extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	render() {
		const {
			router
		} = this.props;

		return (
			<>
				<Head>
					<title>Fong's Hung Ga - Lion Dance Request</title>
					<meta name='description' content="Lion Dance Request Form" />
					<meta name='keywords' content='lion dance,lion dance booking,lion dance nyc,lion dance new york,lion dance new york city, chinese new year,lion dance chinese new year,fongs lions,fongs lion dance,hung ga,hung ga lion dance,fongs hung ga,traditional lion dance,futsan lions,futsan lion dance,hong kong style lion dance,hong kong style,hong kong style nyc' />
					<meta name='og:title' property="Fong's Hung Ga - Lion Dance Request" />
					<meta property='og:description' content="Lion Dance Request Form" />
					<meta property='og:image' content='https://www.fongshungga.com/static/fongs-social-logo.png' />
					<meta name='twitter:image' content='https://www.fongshungga.com/static/fongs-social-logo.png' />
					<link rel="canonical" href="https://www.fongshungga.com/liondance/request" />
				</Head>
				<Header router={router} />
				<Layout padding >
					<iframe 
						src="https://docs.google.com/forms/d/e/1FAIpQLSf4wNUSAepdrgs1SQqxCFdq3xT2jFPXpiobIN4U2S7KSyJfTw/viewform?embedded=true" 
						width="640" 
						height="2534" 
						className={styles('form')}
						frameBorder="0" 
						marginHeight="0" 
						marginWidth="0" 
						scrolling="no">
						Loading…
					</iframe>
				</Layout>
			</>
		)
	}
}

export default withRouter(LionDanceRequest);
