import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Autocomplete from '../../components/Autocomplete';
import CharCards from '../../components/CharCards';
import styles from './Home.module.css';

const Home = () => {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetched = [];
    const getData = endpoint => {
      return axios(endpoint)
        .then(res => {
          fetched = fetched.concat(res.data.results);
          return getData(res.data.info.next);
        })
        .catch(() => {
          setChars(fetched);
          setIsLoading(false);
        });
    };

    getData(process.env.REACT_APP_CHAR_API);
  }, []);

  return (
    <div className={styles.home}>
      {isLoading
        ? <p>Fetching characters...</p>
        : <>
            <div className={styles.charSearch}>
              <h2 className={styles.title}>Search By Name:</h2>
              <Autocomplete chars={chars} />
            </div>
            <div className={styles.charNames}>
              <h2 className={styles.title}>List of all characters:</h2>
              {chars.map(c => <span key={c.id}>{c.name}, </span>)}
            </div>
            <CharCards chars={chars} />
          </>
      }
    </div>
  );
}

export default Home;
