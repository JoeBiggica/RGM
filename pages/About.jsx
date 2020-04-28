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
import about_article from 'static/articles/about_article.json';

import styles from './About.scss';

import PropTypes from 'prop-types';

class About extends Component {
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
					<title>Fong's Hung Ga - About</title>
					<meta name='description' content="About Fong's Hung Ga" />
					<meta name='keywords' content='about,about hung ga,about kung fu,classes,kung fu classes,kung fu bootcamp,kung fu styles,learn kung fu,learn hung ga,where to learn kung fu,learn kung fu staten island,learn kung fu new york,kung fu classes nyc,contact,call,contact kung fu,lion dance,lion dance booking,lion dance nyc,lion dance new york,lion dance new york city, chinese new year,lion dance chinese new year,fongs lions,fongs lion dance,hung ga,hung ga lion dance,fongs hung ga,traditional lion dance,futsan lions,futsan lion dance,hong kong style lion dance,hong kong style,hong kong style nyc' />
					<meta name='og:title' property="Fong's Hung Ga - About" />
					<meta property='og:description' content="About Fong's Hung Ga" />
					<meta property='og:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/kung-fu/fongs-doyers-pose.jpg' />
					<meta name='twitter:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/kung-fu/fongs-doyers-pose.jpg' />
					<link rel="canonical" href="https://www.fongshungga.com/about/" />
				</Head>
				<Header router={router} />
				<HeroBanner 
					className={styles('herobanner')}
					title='About' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/kung-fu/fongs-doyers-pose.jpg'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.THREE_QUATER} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout padding >
					<PageHeader 
						className={styles('page-header')}
						title='Who We Are'
					/>
					<ArticleBody 
						className={styles('article')} 
						items={about_article.items} 
					/>
				</Layout>
			</>
		)
	}
}

export default withRouter(About);
