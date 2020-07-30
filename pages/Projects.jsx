import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';

import Header from 'components/header';
import HeroBanner from 'component-library/lib/herobanner';
import Gallery from 'component-library/lib/gallery';

import styles from './Projects.scss';

import PropTypes from 'prop-types';

class Projects extends Component {
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

		const images = [
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-03-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/cwiss-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/cwiss-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/doors-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/doors-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/mirrors-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/mirrors-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/railings-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/railings-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-02.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-02-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-03.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-03-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-04.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/shower-04-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/storefront-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/storefront-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/storefront-02.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/storefront-02-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/wall-01.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/wall-01-small.png"
			},
			{
				"url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/wall-02.png",
				"small_url": "https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/wall-02-small.png"
			}
		];

		return (
			<>
				<Header 
					router={router}
					position={Header.Position.ABSOLUTE}
					nav_alignment={Header.NavAlignment.RIGHT}
					logo='static/rgm-logo.png'
				/>
				<HeroBanner 
					title='Projects'
					text_position={HeroBanner.TextPosition.BOTTOM}
					text_gradient={HeroBanner.TextGradient.BOTTOM}
					background_image='https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/building-02.png'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					background_gradient={HeroBanner.BackgroundGradient.TOP}
					hero_height={HeroBanner.HeroHeight.THREE_QUARTER}	
				/>
				<section className={styles('container')}>
					<div className={styles('content', 'portfolio')}>
						<Gallery
							images={images}
						/>
					</div>
				</section>

			</>
		)
	}
}

export default withRouter(Projects);
