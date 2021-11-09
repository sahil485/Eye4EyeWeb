import React from 'react';

import styles from './styles.scss';

const PriceTag = (props) => {
  
  let { price } = props
    return (
      <div className={styles['price-tag']}>
	      {price}
      </div>
    );
  }

export default PriceTag;
