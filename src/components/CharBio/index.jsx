import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import addCharImage from '../../assets/icons/add-icon.svg';
import exit from '../../assets/icons/exit-icon.svg';
import styles from './CharBio.module.css';

const CharBio = ({ charData }) => {
  const REQUIRED_CHAR_DATA = [
    'name', 'species', 'gender', 'status', 'created'
  ];

  const [image, setImage] = useState(localStorage.getItem(charData.id));

  const allCharData = Object.entries(charData);
  const requierdCharData = allCharData.filter(arr =>
    REQUIRED_CHAR_DATA.includes(arr[0])
  );

  // click invisible file input
  const triggerInput = (e) => {
    e.preventDefault();
    document.querySelector('#imageInput').click();
  }

  const saveImage = () => {
    const imgPath = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      // convert image file to base64 string and save to localStorage
      localStorage.setItem(charData.id, reader.result);
      setImage(reader.result);
    }, false);

    if (imgPath) {
      reader.readAsDataURL(imgPath);
    }
  }

  return (
    <div className={styles.charBio}>
      <div className={styles.charBio__goHome}>
        <Link className={styles.charBio__link} to="/">
          <img src={exit} alt="leave page" />
          To Home Page
        </Link>
      </div>
      <div className={styles.charBio__bio}>
        <div className={styles.charBio__image} onClick={triggerInput}>
          {image
            ? <img className={styles.uploadedImg} src={image} alt='character image' />
            : <>
                <img src={addCharImage} alt='add image' />
                <p>Add Character Image</p>
              </>
          }
        </div>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={saveImage}
        />
        <div className={styles.charBio__data}>
          {requierdCharData.map(d =>
            <div className={styles.charBio__dataItem} key={d[0]}>
              <p>{d[0]}:</p>
              <p>{d[1]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharBio;
