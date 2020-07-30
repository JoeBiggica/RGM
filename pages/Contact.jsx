import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';

import Header from 'components/header';
import PageHeader from 'components/pageheader';

import HeroBanner from 'component-library/lib/herobanner';
import TextLabel from 'component-library/lib/textlabel';
import Social from 'components/social';

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
					title='Contact'
					text_position={HeroBanner.TextPosition.BOTTOM}
					text_gradient={HeroBanner.TextGradient.BOTTOM}
					background_image='https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/wall-01.png'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					background_gradient={HeroBanner.BackgroundGradient.TOP}
					hero_height={HeroBanner.HeroHeight.THREE_QUARTER}	
				/>
				<section className={styles('container')}>
					<div className={styles('content')}>
						<PageHeader
							className={styles('pageheader')}
							title='Contact Us'
							background_color='rgba(255, 0, 0, 0.7)'
							background_skew
						/>
						<TextLabel
							className={styles('paragraph')}
							font={TextLabel.Font.GEORGIA}
							text='If you have any questions or would like us to look at a project, please contact us using the email below or clicking the email icon, and we will get back to you as soon as possible.'
						/>
						<TextLabel
							className={styles('paragraph')}
							font={TextLabel.Font.GEORGIA}
							text='info@reliableglassandmetal.com'
							href='mailto:info@reliableglassandmetal.com'
							tag='a'
						/>
					</div>
					<div className={styles('content')}>
						<PageHeader
							className={styles('pageheader')}
							title='Social'
							background_color='rgba(255, 0, 0, 0.7)'
							background_skew
						/>
						<div className={styles['social-buttons']}>
							<Social
								platforms={['email', 'instagram']}
								urls={['mailto:info@reliableglassandmetal.com', 'https://instagram.com/reliableglassandmetal']}
								color={Social.Color.BLACK_TO_RED}
							/>
						</div>
					</div>
				</section>

			</>
		)
	}
}

export default withRouter(Contact);
