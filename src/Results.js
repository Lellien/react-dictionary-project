import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <ul className="Results-phonetics">
          {props.results.phonetics.map((phonetic, index) => {
            return (
              <li key={index}>
                <Phonetic phonetic={phonetic} />
              </li>
            );
          })}
        </ul>
        {props.results.meanings.map((meaning, index) => {
          return (
            <Meaning
              key={index}
              meaning={meaning}
              newResults={props.newResults}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
