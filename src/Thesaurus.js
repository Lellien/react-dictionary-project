import React from "react";

import "./Thesaurus.css";

export default function Thesausus(props) {
  function searchAgain(event) {
    event.preventDefault();
    let newWord = event.target.innerHTML;
    props.newResults(newWord);
  }

  let synonyms =
    props.definition.synonyms.length > 0 ? (
      <div className="Thesaurus-synonyms">
        <span className="Thesaurus-similar">Similar:</span>
        <ul className="Thesaurus-synonyms-list">
          {props.definition.synonyms.map((synonym, index) => {
            return (
              <li
                className="Thesaurus-synonym"
                key={index}
                onClick={searchAgain}
              >
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    ) : null;
  let antonyms =
    props.definition.antonyms.length > 0 ? (
      <div className="Thesaurus-antonyms">
        <span className="Thesaurus-opposite">Opposite:</span>
        <ul className="Thesaurus-antonyms-list">
          {props.definition.antonyms.map((antonym, index) => {
            return (
              <li
                className="Thesaurus-antonym"
                key={index}
                onClick={searchAgain}
              >
                {antonym}
              </li>
            );
          })}
        </ul>
      </div>
    ) : null;

  return (
    <div className="Thesaurus">
      {synonyms}
      {antonyms}
    </div>
  );
}
