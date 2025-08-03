import React from 'react';
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';

const Card = ({ image, follows, title }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.chipContainer}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
