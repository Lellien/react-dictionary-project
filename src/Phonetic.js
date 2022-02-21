import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio(event) {
    event.target.children[0].play();
  }
  return (
    <div className="Phonetic">
      <span className="Phonetic-text">{props.phonetic.text}</span>
      <span>
        {props.phonetic.audio ? (
          <i className="fas fa-play Phonetic-play-symbol" onClick={playAudio}>
            <audio src={props.phonetic.audio} />
          </i>
        ) : null}
      </span>
    </div>
  );
}
// "https://api.dictionaryapi.dev/media/pronunciations/en/play-us.mp3"
