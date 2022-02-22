import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  //api documentation at https://dictionaryapi.dev/
  function search(word) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001e88212cd3ade429dae93f547f081f8c8";
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
