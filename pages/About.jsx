import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';

import Header from 'components/header';
import PageHeader from 'components/pageheader';

import HeroBanner from 'component-library/lib/herobanner';
import TextLabel from 'component-library/lib/textlabel';

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
				<Header 
					router={router}
					position={Header.Position.ABSOLUTE}
					nav_alignment={Header.NavAlignment.RIGHT}
					logo='static/rgm-logo.png'
				/>
				<HeroBanner 
					title='About'
					text_position={HeroBanner.TextPosition.BOTTOM}
					text_gradient={HeroBanner.TextGradient.BOTTOM}
					background_image='https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/doors-01.png'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					background_gradient={HeroBanner.BackgroundGradient.NONE}
					hero_height={HeroBanner.HeroHeight.FULL}	
				/>
				<section className={styles('container')}>
					<div className={styles('content')}>
						<PageHeader
							className={styles('pageheader')}
							title='About Us'
							background_color='rgba(255, 0, 0, 0.7)'
							background_skew
						/>
						<TextLabel
							className={styles('about-body')}
							font={TextLabel.Font.GEORGIA}
							text='Reliable Glass & Metal is more than just your average glass and metal company, it’s the vision of people who not only work in the industry, but who were raised in the industry. RGM offers highly specialized project managers who are with you from start to finish. This expertise is delivered to all projects regardless of scope or intricacy.'
						/>
					</div>
				</section>

			</>
		)
	}
}

export default withRouter(About);
