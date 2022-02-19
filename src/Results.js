import React from "react";

import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
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

//   phonetics: response.data[0].phonetics,
//   wordType: response.data[0].meanings[0].partOfSpeech,
//   definitions: response.data[0].meanings[0].definitions[0].definition,
// });
