import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Image from 'components/image';

import styles from './ArticleBody.scss';

class ArticleBody extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		items: PropTypes.array
	}

	renderSubHeader = content => {
		return <h3 className={styles('subheader')}>{content.text}</h3>;
	}

	renderParagraph = content => {
		return <p className={styles('paragraph')} dangerouslySetInnerHTML={{ __html: content.text }}></p>
	}

	renderDisclaimer = content => {
		return (
			<div className={styles('disclaimer')}>
				<p dangerouslySetInnerHTML={{ __html: content.text }}></p>
			</div>
		);
	}

	renderList = content => {
		return (
			<div className={styles('list')}>
				<ul className={styles(content.list_type)}>
					{content.items && content.items.map(this.renderListItem)}
				</ul>
			</div>
		);
	}

	renderListItem = (item, index) => {
		return (
			<li key={`${item.text}-${index}`}>
				{ item.url ? 
					<a href={item.url}> 
						{item.text}
					</a> : item.text
				}
			</li>
		);
	}

	renderImage = content => {
		const size = content.size;
		const alignment = content.alignment;
		const image_container_classname = styles('image-container', `${size}`, `${alignment}`);

		return (
			<div className={styles(image_container_classname)}>
				<Image
					style={{
						width: '100%',
					}}
					fill_mode={Image.FillMode.COVER}
					src={content.src}
					alt={content.caption}
				/>
				{content.caption &&
					<div className={styles('caption')}>{content.caption}</div>
				}
			</div>
		);
	}

	renderItems = (item, index) => {
		switch(item.type) {
			case 'paragraph':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderParagraph(item.content)}
					</div>
				);
			case 'subheader':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderSubHeader(item.content)}
					</div>
				);
			case 'disclaimer':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderDisclaimer(item.content)}
					</div>
				);
			case 'list':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderList(item.content)}
					</div>
				);
			case 'image':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderImage(item.content)}
					</div>
				);

			default:
				return <div />;
		}
	}


	render() {
		const {
			className,
			items,
		} = this.props;

		return (
			<div className={classnames(styles('container'), className)}>
				{items.map(this.renderItems)}
			</div>
		);	
	}
}

export default ArticleBody;
