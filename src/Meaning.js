import React from "react";
import Definition from "./Definition";
import MeaningAccordion from "./MeaningAccordion";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="Meaning-type">
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <ul className="Meaning-definitions">
        {props.meaning.definitions.map((definition, index) => {
          if (index < 4) {
            return (
              <li key={index}>
                <div className="Meaning-definition-num">{index + 1}.</div>
                <Definition
                  definition={definition}
                  newResults={props.newResults}
                />
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      {props.meaning.definitions.length >= 4 ? (
        <MeaningAccordion
          meaning={props.meaning}
          newResults={props.newResults}
        />
      ) : null}
    </div>
  );
}
