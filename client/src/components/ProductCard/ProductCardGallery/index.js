import React, { useState } from 'react';
import cx from 'classnames';

import GalleryToggle from './GalleryToggle';
import styles from './styles.scss';

const ProductCardGallery = (props) => {

  const [ activeItem, setActiveItem ] = useState(0);

  rotateRight = () => {
    let n = props.photos.length;
    setActiveItem((((activeItem+1)%n)+n)%n);
  }

  rotateLeft = () => {
    let n = props.photos.length;
    setActiveItem((((activeItem-1)%n)+n)%n);
  }

  let { photos } = props;
    return (
      <div
	      className={styles['product-card-gallery']}
	 >
	{
	  photos.map((photo, i) => {
	    return (
	      <div
		      className={cx(
            styles['gallery-item'],
            {[`${styles['active']}`]: this.state.activeItem===i}
          )}
		 style={{
		   backgroundImage: `url(${photo})`
		 }}
		 />
	    );
	  })
	}
     <GalleryToggle
       icon='>'
       action={this.rotateRight.bind(this)}
       right
      />
     <GalleryToggle
       icon='<'
       action={this.rotateLeft.bind(this)}
       left
      />
      </div>
    );
  }

export default ProductCardGallery;
