import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  //api documentation at https://dictionaryapi.dev/
  function search(word) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h4>What word would you like to look up?</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Results results={results} newResults={search} />
    </div>
  );
}
