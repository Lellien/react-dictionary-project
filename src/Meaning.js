import React from "react";
import Definition from "./Definition";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="Meaning-type">{props.meaning.partOfSpeech}</div>
      <ul className="Meaning-definitions">
        {props.meaning.definitions.map((definition, index) => {
          return (
            <li key={index}>
              <Definition definition={definition} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
