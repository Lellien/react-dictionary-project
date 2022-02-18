import React from "react";
import "./Definition.css";

export default function Definition(props) {
  let example = (
    <div className="Definition-example">"{props.definition.example}"</div>
  );

  let synonyms = props.definition.synonyms ? (
    <div className="Definition-synonyms">
      <span className="Definition-similar">Similar: </span>
      <span className="Definitions-synonyms-list">
        {props.definition.synonyms.map((synonym, index) => {
          return (
            <span className="Definition-synonym" key={index}>
              {synonym}
            </span>
          );
        })}
      </span>
    </div>
  ) : null;
  let antonyms = (
    <div className="Definition-antonyms">
      <span className="Definition-opposite">Opposite: </span>
      <span className="Definition-antonym">{props.definition.antonyms}</span>
    </div>
  );

  return (
    <div className="Definition">
      <div className="Definition-definition">{props.definition.definition}</div>
      {props.definition.example ? example : null}
      {synonyms}
      {props.definition.antonyms ? antonyms : null}
    </div>
  );
}
