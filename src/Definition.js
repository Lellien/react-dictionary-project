import React from "react";
import "./Definition.css";
import Thesaurus from "./Thesaurus";

export default function Definition(props) {
  let example = (
    <div className="Definition-example">"{props.definition.example}"</div>
  );

  return (
    <div className="Definition">
      <div className="Definition-definition">{props.definition.definition}</div>
      {props.definition.example ? example : null}
      <Thesaurus definition={props.definition} newResults={props.newResults} />
    </div>
  );
}
