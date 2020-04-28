import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { Action } from 'actions';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Header from 'components/header';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ArticleHeader from 'components/article/article-header';
import ArticleBody from 'components/article/article-body';

import styles from './Article.scss';

import PropTypes from 'prop-types';

class Article extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const slug = query.slug;
		const url = `https://www.fongshungga.com/article/${slug}`;

		if (typeof(fetch) !== 'undefinded') {
			const article_res = await fetch(`https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/${slug}/article-data.json`);
			const article_json = await article_res.json();

			if (article_json) {
				return {
					article: article_json.article
				};
			}
		}

		return {
			slug
		};
		
	}

	static propTypes = {
		router: PropTypes.object,
		article: PropTypes.object
	}

	static defaultProps = {
		article: {}
	}

	render() {
		const {
			router,
			article,
			url
		} = this.props;

		const header = article.header;
		const body = article.body;
		const share_image = article.header.primary_asset ? article.header.primary_asset.content.src : 'https://www.fongshungga.com/static/fongs-social-logo.png';
		
		return (
			<>
				<Head>
					<title>{header.title}</title>
					<meta name='description' content={header.title} />
					<meta name='keywords' content='classes,kung fu classes,kung fu bootcamp,kung fu styles,learn kung fu,learn hung ga,where to learn kung fu,learn kung fu staten island,learn kung fu new york,kung fu classes nyc,contact,call,contact kung fu,lion dance,lion dance booking,lion dance nyc,lion dance new york,lion dance new york city, chinese new year,lion dance chinese new year,fongs lions,fongs lion dance,hung ga,hung ga lion dance,fongs hung ga,traditional lion dance,futsan lions,futsan lion dance,hong kong style lion dance,hong kong style,hong kong style nyc' />
					<meta name='og:title' property={header.title} />
					<meta property='og:description' content={header.title} />
					<meta property="og:type" content="article" />
					<meta property='og:image' content={share_image} />
					<meta property='og:url' content={url} />
					<meta name='twitter:image' content={share_image} />
					<link rel="canonical" href={url} />
				</Head>
				<Header router={router} />
				<Layout className={styles('container')}>
					{header && 
						<ArticleHeader
							className={styles('article-header')}
							title={header.title}
							byline={header.byline}
							primary_asset={header.primary_asset}
						/>
					}
					{body && 
						<ArticleBody 
							className={styles('article-body')}
							items={body.items} 
						/> 
					}
				</Layout>
			</>
		)
	}
}

export default withRouter(Article);
