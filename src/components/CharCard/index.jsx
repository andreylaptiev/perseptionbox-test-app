import React from 'react';
import styles from './CharCard.module.css';

const CharCard = ({ id, name, onClick, status }) => {
  const image = localStorage.getItem(id);

  return (
    <div onClick={onClick} id={id} className={styles.charCard}>
      {image &&
        <div className={styles.charCard__image}>
          <img src={image} alt="char image" />
        </div>
      }
      <div className={styles.charCard__info}>
        <h2>Name: {name}</h2>
        <p>Status: {status}</p>
      </div>
    </div>
  )
}

export default CharCard;
