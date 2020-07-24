import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import HamburgerButton from './hamburgerbutton';

import styles from './Header.scss';

const Position = {
	RELATIVE: 'relative',
	ABSOLUTE: 'absolute',
	FIXED: 'fixed'
};

const NavAlignment = {
	LEFT: 'left',
	RIGHT: 'right',
	CENTER: 'center'
};

class Header extends PureComponent {

	static propTypes = {
		router: PropTypes.object,
		position: PropTypes.string,
		nav_alignment: PropTypes.string,
		gradient: PropTypes.bool,
		dark_mode: PropTypes.bool,
	}

	static defaultProps = {
		position: Position.RELATIVE,
		nav_alignment: NavAlignment.RIGHT
	}

	static Position = Position;
	static NavAlignment = NavAlignment;

	state = {
		menu_active: false,
	}

	constructor(props) {
		super(props);

		this.route = this.props.router && this.props.router.pathname.toLowerCase().replace('/', '');

		this.menu_items = [
			{
				name: 'About',
				id: 'about',
			},
			{
				name: 'Services',
				id: 'services',
			},
			{
				name: 'Projects',
				id: 'projects',
			},
			{
				name: 'Contact',
				id: 'contact',
			}
		];
	}

	onClick = () => {
		this.setState({ menu_active: !this.state.menu_active });
	}

	renderMenuItem = item => {
		const path = item.id === 'index' ? '/' : `/${item.id}`; 
		const item_classname = classnames(styles[item.id === this.route && 'active']);
		return (
			<li className={item_classname} key={`${item.id}`}>
				<a href={`${path}`}>{item.name}</a>
				<div className={classnames(styles['underline'])} />
			</li>
		);
	}

	render() {
		const {
			className,
			position,
			nav_alignment,
			gradient,
			dark_mode,
			logo
		} = this.props;

		const container_classname = classnames(
			styles['container'],
			styles[position === 'absolute' && 'absolute'],
			styles[position === 'fixed' && 'fixed'],
			styles[gradient && 'gradient'],
			styles[dark_mode && 'dark-mode'],
		);

		const inner_classname = classnames(
			styles['inner'],
			styles[nav_alignment === 'left' && 'nav-left'],
			styles[nav_alignment === 'right' && 'nav-right']
		);

		const logo_styles = {
			background: `url(static/rgm-logo.png) center center / 100% no-repeat`
		};

		return (
			<div className={container_classname}>
				<div className={inner_classname}>
					<a href='/'>
						<img 
							className={classnames(styles['logo'])}
							src='static/rgm-logo.png'
						/>
					</a>
					<nav className={classnames(styles['nav'])}>
						<ul>
							{this.menu_items.map(this.renderMenuItem)}
						</ul>
					</nav>
				</div>
			</div>
		);	
	}
}

export default Header;
