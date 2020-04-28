import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ContactInfo from 'components/contactinfo';
import Social from 'components/social';
import schools from 'static/schools.json';

import styles from './Contact.scss';

import PropTypes from 'prop-types';

class Contact extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	renderContactInfo = (school, index) => {
		return <ContactInfo key={`school-${index}`} className={styles('school')} {...school} />;
	}

	render() {
		const {
			router
		} = this.props;

		return (
			<>
				<Head>
					<title>Fong's Hung Ga - Contact</title>
					<meta name='description' content="Contact Fong's Hung Ga" />
					<meta name='keywords' content='contact,call,contact kung fu,lion dance,lion dance booking,lion dance nyc,lion dance new york,lion dance new york city, chinese new year,lion dance chinese new year,fongs lions,fongs lion dance,hung ga,hung ga lion dance,fongs hung ga,traditional lion dance,futsan lions,futsan lion dance,hong kong style lion dance,hong kong style,hong kong style nyc' />
					<meta name='og:title' property="Fong's Hung Ga - Contact" />
					<meta property='og:description' content="Contact Fong's Hung Ga" />
					<meta property='og:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/lion-dance-banner-cart.png' />
					<meta name='twitter:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/lion-dance-banner-cart.png' />
					<link rel="canonical" href="https://www.fongshungga.com/contact/" />
				</Head>
				<Header router={router} />
				<HeroBanner 
					className={styles('herobanner')}
					title='Contact' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/lion-dance-banner-cart.png'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.THREE_QUATER} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout 
					padding 
				>
					<PageHeader 
						className={styles('page-header')}
						title='Schools'
					/>
					<div className={styles('schools-container')}>
						{schools.locations && schools.locations.map(this.renderContactInfo)}
					</div>
					<PageHeader 
						className={styles('page-header')}
						title='Social'
					/>
					<div className={styles['social-buttons']}>
						<Social
							platforms={['facebook', 'instagram', 'email']}
							urls={['https://www.facebook.com/fongslions/', 'https://www.instagram.com/fongslions/', 'mailto:sifu.fong@fonghungga.com']}
							color={Social.Color.BLACK_TO_RED}
						/>
					</div>
				</Layout>
			</>
		)
	}
}

export default withRouter(Contact);
