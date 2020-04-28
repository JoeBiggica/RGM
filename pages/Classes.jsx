import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import class_schedule from 'static/class_schedule.json';
import schools from 'static/schools.json';
import Head from 'next/head';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import Table from 'components/table';

import styles from './Classes.scss';

import PropTypes from 'prop-types';

class Classes extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	constructor(props) {
		super(props);

		this.classes_table = class_schedule;
	}

	renderInstructor = (instructor, i) => {
		const name = (i && i !== 0) ? `, ${instructor.name}` : instructor.name
		return (
			<a 
				key={`${instructor.name}`} 
				className={styles('name')} 
				href={`${instructor.url}`}
			>
				{name} 
			</a>
		);
	}

	renderSchool = (school, i) => {
		const {
			head,
			instructors,
			address,
			phone,
			email,
			class_schedule
		} = school;

		return (
			<section key={`school-${i}`} className={styles('school')}>
				<h3 className={styles('title')}>{school.address.city}</h3>
				<div className={styles('info-container')}>
					{head &&
						<div className={styles('instructor')}>
							<span className={styles('label')}>Head Instructor</span>
							{this.renderInstructor(head)}
						</div> 
						
					}
					{instructors && 
						<div className={styles('instructor')}>
							<span className={styles('label')}>{instructors.length > 1 ? 'Instructors' : 'Instructor'}</span>
							{instructors.map(this.renderInstructor)}
						</div> 

					}
					{address.street &&
						<a href={address.google_maps_url && address.google_maps_url} target='_blank'>
							<div className={styles('address')}>
								<div>{school.address.street}</div>
								<div>{school.address.city} {school.address.zipcode}</div>
							</div>
						</a>	
					}
					<div className={styles('contact')}>
						{phone && <a href={`tel:${phone}`}>{phone}</a>}
						{email && <a href={`mailto:${email}`}>{email}</a>}
					</div>
				</div>
				{class_schedule &&
					<div className={styles('table-container')}>
						<Table 
							table_data={this.classes_table}
						/>
					</div>
				}
				{!class_schedule && <p className={styles('more-info')}>Please call or email for more class information.</p>}
			</section>
		);
	}

	render() {
		const {
			router
		} = this.props;

		return (
			<>
				<Head>
					<title>Fong's Hung Ga - Classes</title>
					<meta name='description' content="Classes at Fong's Hung Ga" />
					<meta name='keywords' content='classes,kung fu classes,kung fu bootcamp,kung fu styles,learn kung fu,learn hung ga,where to learn kung fu,learn kung fu staten island,learn kung fu new york,kung fu classes nyc,contact,call,contact kung fu,lion dance,lion dance booking,lion dance nyc,lion dance new york,lion dance new york city, chinese new year,lion dance chinese new year,fongs lions,fongs lion dance,hung ga,hung ga lion dance,fongs hung ga,traditional lion dance,futsan lions,futsan lion dance,hong kong style lion dance,hong kong style,hong kong style nyc' />
					<meta name='og:title' property="Fong's Hung Ga - Contact" />
					<meta property='og:description' content="Classes at Fong's Hung Ga" />
					<meta property='og:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/kung-fu/adult-class.jpg' />
					<meta name='twitter:image' content='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/kung-fu/adult-class.jpg' />
					<link rel="canonical" href="https://www.fongshungga.com/classes/" />
				</Head>
				<Header router={router} />
				<HeroBanner 
					className={styles('herobanner')}
					title='Classes' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/kung-fu/adult-class.jpg'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.THREE_QUATER} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout padding >
					<PageHeader 
						className={styles('page-header')}
						title='Class Schedules'
					/>
					<div className={styles('schools-container')}>
						{schools.locations && schools.locations.map(this.renderSchool)}
					</div>
					<span className={styles('disclaimer')}>All locations have group and private lessons available.</span>
				</Layout>
			</>
		)
	}
}

export default withRouter(Classes);
