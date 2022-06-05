import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharBio from '../../components/CharBio';

const CharProfile = () => {
  const { id } = useParams();
  const [char, setChar] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: `/${id}`,
      baseURL: process.env.REACT_APP_CHAR_API
    })
      .then(res => setChar(res.data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {!isLoading &&
        <CharBio charData={char} />
      }
    </>
  );
}

export default CharProfile;
