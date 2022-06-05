import React, { useState } from 'react';
import AutocompleteList from '../AutocompleteList';
import styles from './Autocomplete.module.css';

const Autocomplete = ({ chars }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const suggestions = chars.map(c => c.name);

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setShowSuggestions(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setShowSuggestions(false);
  };

  return (
    <div className={styles.autocomplete}>
      <input
        type="text"
        onChange={onChange}
        value={input}
      />
      {showSuggestions && input &&
        <AutocompleteList filteredSuggestions={filteredSuggestions} />}
    </div>
  );
}

export default Autocomplete;
