import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ContactInfo.scss';


class ContactInfo extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		head: PropTypes.object,
		instructors: PropTypes.array,
		address: PropTypes.object,
		phone: PropTypes.string,
		email: PropTypes.string
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


	render() {
		const {
			className,
			head,
			instructors,
			address,
			phone,
			email
		} = this.props;

		return (
			<div className={classnames(styles('container'), className)}>
				<h3 className={styles('title')}>{address.city}</h3>
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
								<div>{address.street}</div>
								<div>{address.city} {address.zipcode}</div>
							</div>
						</a>	
					}
					<div className={styles('contact')}>
						{phone && <a href={`tel:${phone}`}>{phone}</a>}
						{email && <a href={`mailto:${email}`}>{email}</a>}
					</div>
				</div>
			</div>
		);
	}
}

export default ContactInfo;
