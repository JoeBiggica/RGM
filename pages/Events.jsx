import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Header from 'components/header';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';

import styles from './Events.scss';

import PropTypes from 'prop-types';

class Events extends Component {
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
					<title>Fong's Hung Ga - Events</title>
					<meta name='description' content="Events at Fong's Hung Ga" />
					<meta name='keywords' content='events' />
					<meta name='og:title' property="Fong's Hung Ga - Events Calendar" />
					<meta property='og:description' content="Events at Fong's Hung Ga" />
					<meta property='og:image' content='https://www.fongshungga.com/static/fongs-social-logo.png' />
					<meta name='twitter:image' content='https://www.fongshungga.com/static/fongs-social-logo.png' />
					<link rel="canonical" href="https://www.fongshungga.com/events" />
				</Head>
				<Header router={router} />
				<Layout padding >
				<PageHeader 
						className={styles('page-header')}
						title='Events Calendar'
					/>
					<iframe 
						src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=aTVyYmIwOWRnZmhzcGs2Z2Y3cmJwOG81MjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23A79B8E&amp;showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;showTabs=0" 
						width="100%" 
						height="600" 
						className={styles('calendar')}
						frameBorder="0" 
						scrolling="no">
					</iframe>
				</Layout>
			</>
		)
	}
}

export default withRouter(Events);
