import React from 'react';
import styles from './AutocompleteList.module.css';

const AutocompleteList = ({ filteredSuggestions }) => {
  return (
    <div className={styles.autocompleteList}>
      {filteredSuggestions.length
        ? (
          <ul className={styles.suggestions}>
            {filteredSuggestions.map((suggestion, i) =>
              <li key={i}>
                {suggestion}
              </li>
            )}
          </ul>
        )
        : (
          <div className={styles.noSuggestions}>
            <p>No suggestions</p>
          </div>
        )}
    </div>
  );
};

export default AutocompleteList;
