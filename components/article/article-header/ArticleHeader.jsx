import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Image from 'components/image';

import styles from './ArticleHeader.scss';

class ArticleHeader extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		byline: PropTypes.object,
		primary_asset: PropTypes.object
	}

	renderByline = byline => {
		return (
			<span className={styles('byline')}>
				{byline.image && 
					byline.url ? 
						<a href={byline.url}> 
							<div 
								className={styles('image')} 
								style={{backgroundImage: `url(${byline.image})`}}
							/>
						</a> : <div 
							className={styles('image')} 
							style={{backgroundImage: `url(${byline.image})`}}
						/>
				}
				<span className={styles('name')}>
					{ byline.url ? 
						<a href={byline.url}> 
							{byline.name}
						</a> : byline.name
					}
				</span>
			</span>
		);
	}

	renderPrimaryAsset = asset => {
		const type = asset.type;
		const content = asset.content;
		const fill_mode = asset.fill_mode;
		switch(asset.type) {
			case 'image':
				return (
					<div>
						<Image
							style={{
								width: '100%',
							}}
							fill_mode={fill_mode ? fill_mode : Image.FillMode.COVER}
							src={content.src}
							alt={content.caption}
							aspect_ratio={16/9}
						/>
						{content.caption &&
							<div className={styles('caption')}>{content.caption}</div>
						}	
					</div>
				);
			default:
				return <div />;
		}
	}


	render() {
		const {
			className,
			title,
			byline,
			primary_asset
		} = this.props;

		return (
			<div className={classnames(styles('container'), className)}>
				{ title && <h1 className={styles('title')}>{title}</h1> }
				{ byline && this.renderByline(byline) }
				{ primary_asset && 
					<div className={styles('primary-asset')}>
						{this.renderPrimaryAsset(primary_asset)}
					</div> 
				}
			</div>
		);	
	}
}

export default ArticleHeader;
