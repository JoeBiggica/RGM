import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Table.scss';


class Table extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		table_data: PropTypes.object,
		color: PropTypes.string,
	}

	renderHeader = header => {
		return <div className={styles('header')}>{header}</div>;
	}

	renderCell = (cell, index) => {
		return (
			<div key={`${cell.name}-${index}`} className={styles('cell-container')}>
				<div className={styles('cell')}>{cell.name}</div>
				<div className={styles('subcell')}>{cell.value}</div>
			</div>
		);
	}

	renderColumn = (column, index) => {
		return (
			<div key={`${column.name}-${index}`} className={styles('column')}>
				{column.header && this.renderHeader(column.header)}
				{column.cells && column.cells.map(this.renderCell)}
			</div>
		);
	}

	render() {
		const {
			className,
			title,
			description,
			table_data,
		} = this.props;

		return (
			<div className={classnames(styles('container'), className)}>
				{title && <h3 className={styles('title')}>{title}</h3>}
				<div className={styles('table-container')}>
					<div className={styles('table-columns')}>
						{table_data.table.columns && table_data.table.columns.map(this.renderColumn)}
					</div>
				</div>
			</div>
		);	
	}
}

export default Table;
