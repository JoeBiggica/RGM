import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HamburgerButton from './hamburgerbutton';

import styles from './Header.scss';

class Header extends PureComponent {

	static propTypes = {
		router: PropTypes.object,
		gradient: PropTypes.bool,
		fixed: PropTypes.bool,
		dark_mode: PropTypes.bool,
	}

	state = {
		menu_active: false,
	}

	constructor(props) {
		super(props);

		this.route = this.props.router && this.props.router.pathname.toLowerCase().replace('/', '');

		this.menu_items = [
			{
				name: 'Home',
				id: 'index',
			},
			{
				name: 'Classes',
				id: 'classes',
			},
			{
				name: 'Lion Dance',
				id: 'liondance',
			},
			{
				name: 'About',
				id: 'about',
			},
			{
				name: 'Contact',
				id: 'contact',
			},
			
		];
	}

	onClick = () => {
		this.setState({ menu_active: !this.state.menu_active });
	}

	renderMenuItem = item => {
		const path = item.id === 'index' ? '/' : `/${item.id}`; 
		const item_classname = styles({'active': item.id === this.route});
		return (
			<li className={item_classname} key={`${item.id}`}>
				<a href={`${path}`}>{item.name}</a>
				<div className={styles('underline')} />
			</li>
		);
	}

	render() {
		const {
			className,
			gradient,
			fixed,
			dark_mode,
		} = this.props;

		const container_classname = styles('container', {
			'gradient': gradient,
			'fixed': fixed,
			'dark-mode': dark_mode,
		});

		const banner_styles = {
			backgroundImage: `url(/static/fongs-banner-logo-long.png)`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		return (
			<div className={container_classname}>
				<div className={styles('inner')}>
					<div className={styles('banner')} style={banner_styles} />
					<nav className={styles('nav')}>
						<ul>
							{this.menu_items.map(this.renderMenuItem)}
						</ul>
					</nav>
					<div className={styles('menu-container')}>
						<HamburgerButton className={styles('button')} onClick={this.onClick} />
						<ul className={styles('menu', {'active': this.state.menu_active})}>
							{this.menu_items.map(this.renderMenuItem)}
						</ul>
					</div>
				</div>
			</div>
		);	
	}
}

export default Header;
