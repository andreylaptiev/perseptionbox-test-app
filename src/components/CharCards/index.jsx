import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharCard from '../CharCard';
import styles from './CharCards.module.css';

const CharCards = ({ chars }) => {
  const navigate = useNavigate();

  const goToCharProfile = (e) => {
    const { id } = e.currentTarget;
    navigate(`char/${id}`, {replace: false});
  }

  return (
    <div className={styles.charCards}>
      <h2 className={styles.title}>Character cards:</h2>
      <div className={styles.cards}>
        {chars.map(c =>
          <CharCard
            id={c.id}
            key={c.id}
            name={c.name}
            onClick={goToCharProfile}
            status={c.status}
          />
        )}
      </div>
    </div>
  );
}

export default CharCards;
