import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ArticleBody from 'components/article/article-body';
import Button from '/components/button';
import lion_dance_article from 'static/articles/lion_dance_article.json';

import styles from './LionDance.scss';

import PropTypes from 'prop-types';

class LionDance extends Component {
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
					<title>Fong's Hung Ga - Lion Dance</title>
					<meta name='description' content="Lion Dance at Fong's Hung Ga" />
					<meta name='keywords' content='lion dance,lion dance booking,lion dance nyc,lion dance new york,lion dance new york city, chinese new year,lion dance chinese new year,fongs lions,fongs lion dance,hung ga,hung ga lion dance,fongs hung ga,traditional lion dance,futsan lions,futsan lion dance,hong kong style lion dance,hong kong style,hong kong style nyc' />
					<meta name='og:title' property="Fong's Hung Ga - Lion Dance" />
					<meta property='og:description' content="Lion Dance at Fong's Hung Ga" />
					<meta property='og:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/three-lions.jpg' />
					<meta name='twitter:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/three-lions.jpg' />
					<link rel="canonical" href="https://www.fongshungga.com/liondance/" />
				</Head>
				<Header router={router} />
				<HeroBanner 
					className={styles('herobanner')}
					title='Lion Dance' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/three-lions.jpg'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.THREE_QUATER} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout padding >
					<div className={styles('button-container')}>
						<Button
							className={styles('button')}
							text='Request a Lion Dance'
							url='/liondance/request'
						/>
					</div>
					<PageHeader 
						className={styles('page-header')}
						title='An Intro to Lion Dance'
					/>
					<ArticleBody 
						className={styles('article')} 
						items={lion_dance_article.items} 
					/>
					<PageHeader 
						className={styles('page-header')}
						title='Our Clients'
					/>
					<div className={styles('clients-container')}>
						<img src='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/misc/client-logos.png' alt='Client Logos' />
					</div>
				</Layout>
			</>
		)
	}
}

export default withRouter(LionDance);
