import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const Card = (props/*{className, float, ...other}*/) => {
  
    return (
      <div
        className={
          classnames(
            styles.card,
            { [`${styles.float}`]: float },
            className,
          )}
      { ...other }
      >
	      {props.children}
      </div>
    );
}

Card.PropTypes = {
  className: PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export default Card;
