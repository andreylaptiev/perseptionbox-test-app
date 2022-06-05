import React from 'react';
import styles from './CharCard.module.css';

const CharCard = ({ charImage, id, name, onClick, status }) => {
  return (
    <div onClick={onClick} id={id} className={styles.charCard}>
      {charImage &&
        <div className={styles.charCard__image}>
          <img src={charImage} alt="char image" />
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
