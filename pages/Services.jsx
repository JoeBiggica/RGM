import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';

import Header from 'components/header';
import PageHeader from 'components/pageheader';

import HeroBanner from 'component-library/lib/herobanner';
import TextLabel from 'component-library/lib/textlabel';

import styles from './Services.scss';

import PropTypes from 'prop-types';

class Services extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	constructor(props) {
		super(props);

		this.specialties = [
			'Windows',
			'Curtain Wall',
			'Glass Railings',
			'Storefonts',
			'Glass Doors',
			'Mirrors',
			'Glass Partitions',
			'Panels',
			'Shower Doors',
			'Skylights'
		]
	}

	renderSpecialty = text => {
		return (
			<TextLabel
				text={text}
				font={TextLabel.Font.GEORGIA}
				tag='li'
			/>
		);
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
					title='Services'
					text_position={HeroBanner.TextPosition.BOTTOM}
					text_gradient={HeroBanner.TextGradient.BOTTOM}
					background_image='https://biggica-sites.s3.amazonaws.com/rgm/homepage-portfolio/storefront-02.png'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					background_gradient={HeroBanner.BackgroundGradient.TOP}
					hero_height={HeroBanner.HeroHeight.THREE_QUARTER}	
				/>
				<section className={styles('container')}>
					<div className={styles('content')}>
						<PageHeader
							className={styles('pageheader')}
							title='Scope of Work'
							background_color='rgba(255, 0, 0, 0.7)'
							background_skew
						/>
						<div className={styles('body')}>
							<TextLabel
								className={styles('paragraph')}
								font={TextLabel.Font.GEORGIA}
								text='RGM is capable of handling all specialty glass and Metal projects:'
							/>
							<ul>
								{this.specialties.map(this.renderSpecialty)}
							</ul>
							<TextLabel
								className={styles('paragraph')}
								font={TextLabel.Font.GEORGIA}
								text='No project is too big or too small. Whether you have a storefront or a high rise commercial curtain wall project, RGM is with you from start to finish.'
							/>
						</div>
					</div>
					<div className={styles('content')}>
						<PageHeader
							className={styles('pageheader')}
							title='Standards'
							background_color='rgba(255, 0, 0, 0.7)'
							background_skew
						/>
						<div className={styles('body')}>
							<TextLabel
								className={styles('description')}
								font={TextLabel.Font.GEORGIA}
								text='Our standards will never be compromised:'
							/>
							<TextLabel
								className={styles('subheader')}
								font={TextLabel.Font.FUTURA}
								text='Insurance'
							/>
							<TextLabel
								className={styles('paragraph')}
								font={TextLabel.Font.GEORGIA}
								text='Reliable Glass & Metal is fully insured to meet any and all industry standards. Our insurance not only meets, but exceeds those standards and of course should you need any information we will gladly provide it.'
							/>
							<TextLabel
								className={styles('subheader')}
								font={TextLabel.Font.FUTURA}
								text='Safety'
							/>
							<TextLabel
								className={styles('paragraph')}
								font={TextLabel.Font.GEORGIA}
								text='The installation team is just as important as the management team so their safety is our top priority:'
							/>
							<ul>
								<TextLabel
									text='Our employees are all OSHA certified.'
									font={TextLabel.Font.GEORGIA}
									tag='li'
								/>
								<TextLabel
									text='Site safety meetings are held for all projects.'
									font={TextLabel.Font.GEORGIA}
									tag='li'
								/>
							</ul>
						</div>
					</div>
				</section>

			</>
		)
	}
}

export default withRouter(Services);
