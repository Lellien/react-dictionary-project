import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <div className="phonetic">{props.results.phonetic}</div>
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
