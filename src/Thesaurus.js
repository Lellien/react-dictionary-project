import React from "react";

import "./Thesaurus.css";

export default function Thesausus(props) {
  function searchAgain(event) {
    event.preventDefault();
    let newWord = event.target.innerHTML;
    props.newResults(newWord);
  }

  let synonyms = props.definition.synonyms ? (
    <div className="Thesaurus-synonyms">
      <span className="Thesaurus-similar">Similar:</span>
      <span className="Thesaurus-synonyms-list">
        {props.definition.synonyms.map((synonym, index) => {
          return (
            <span
              className="Thesaurus-synonym"
              key={index}
              onClick={searchAgain}
            >
              {synonym}
            </span>
          );
        })}
      </span>
    </div>
  ) : null;
  let antonyms = props.definition.antonyms ? (
    <div className="Thesaurus-antonyms">
      <span className="Thesaurus-opposite">Opposite:</span>
      <span className="Thesaurus-antonyms-list">
        {props.definition.antonyms.map((antonym, index) => {
          return (
            <span
              className="Thesaurus-antonym"
              key={index}
              onClick={searchAgain}
            >
              {antonym}
            </span>
          );
        })}
      </span>
    </div>
  ) : null;

  return (
    <div className="Thesaurus">
      {synonyms}
      {antonyms}
    </div>
  );
}
