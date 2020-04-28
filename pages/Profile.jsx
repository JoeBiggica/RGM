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

import styles from './Profile.scss';

import PropTypes from 'prop-types';

class Profile extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const name = query.name;
		const name_shaped = name.replace('sifu-', '');
		const url = `https://www.fongshungga.com/profile/${name_shaped}`;
		
		if (typeof(fetch) !== 'undefinded') {
			const profile_res = await fetch(`https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/profiles/${name_shaped}/profile-data.json`);
			const profile_json = await profile_res.json();

			if (profile_json) {
				return {
					profile: profile_json.profile
				};
			}
		}

		return {
			url
		};
		
	}

	static propTypes = {
		router: PropTypes.object,
		profile: PropTypes.object
	}

	static defaultProps = {
		profile: {}
	}

	render() {
		const {
			router,
			profile,
			url
		} = this.props;

		const name = profile.name;
		const image = profile.image;
		const body = profile.body;
		const contact = profile.contact;

		const image_styles = {
			backgroundImage: `url(${image})`
		}

		return (
			<>
				<Head>
					<title>Profile: {name}</title>
					<meta name='description' content={name} />
					<meta name='keywords' content='classes,kung fu classes,kung fu bootcamp,kung fu styles,learn kung fu,learn hung ga,where to learn kung fu,learn kung fu staten island,learn kung fu new york,kung fu classes nyc,contact,call,contact kung fu,lion dance,lion dance booking,lion dance nyc,lion dance new york,lion dance new york city, chinese new year,lion dance chinese new year,fongs lions,fongs lion dance,hung ga,hung ga lion dance,fongs hung ga,traditional lion dance,futsan lions,futsan lion dance,hong kong style lion dance,hong kong style,hong kong style nyc' />
					<meta name='og:title' property={name} />
					<meta property='og:description' content={name} />
					<meta property="og:type" content="article" />
					<meta property='og:image' content={image} />
					<meta property='og:url' content={url} />
					<meta name='twitter:image' content={image} />
					<link rel="canonical" href={url} />
				</Head>
				<Header router={router} />
				<Layout 
					className={styles('container')} 
					padding
				>
					<div className={styles('header-container')}>
						<div className={styles('picture')} style={image_styles}></div>
						<h1 className={styles('name')}>{name}</h1>
					</div>
					<PageHeader 
						className={styles('page-header')}
						title='Bio'
					/>
					{body && 
						<ArticleBody 
							className={styles('article-body')}
							items={body.items} 
						/> 
					}
					{contact && 
						<>
							<PageHeader 
								className={styles('page-header')}
								title='Contact'
							/>
							<div className={styles('contact-container')}>
								{contact.phone && 
									<div>
										<span className={styles('label')}>Phone:</span>
										<a href={`tel:${contact.phone}`}>{contact.phone}</a>
									</div>
								}
								{contact.email && 
									<div>
										<span className={styles('label')}>Email:</span>
										<a href={`mailto:${contact.email}`}>{contact.email}</a>
									</div>
								}
							</div>
						</>
					}
					
				</Layout>
			</>
		)
	}
}

export default withRouter(Profile);
