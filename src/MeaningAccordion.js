import React, { useState } from "react";
import Definition from "./Definition";
import "./MeaningAccordion.css";

export default function MeaningAccordion(props) {
  const [show, setShow] = useState(false);
  function open() {
    setShow(!show);
  }
  return (
    <div className="MeaningAccordion">
      <hr />
      <div className="MeaningAccordion-header">
        <div className="MeaningAccordion-clicker" onClick={open}>
          <div className="MeaningAccordion-clicker-text">
            {show ? `See less` : `See more`}
          </div>
          <div className="MeaningAccordion-clicker-sign">
            {show ? `-` : `+`}
          </div>
        </div>
      </div>
      {show && (
        <div className="MeaningAccordion-body">
          <ul className="Meaning-definitions">
            {props.meaning.definitions.map((definition, index) => {
              if (index >= 4) {
                return (
                  <li key={index}>
                    <div className="Meaning-definition-num">
                      {index + 1}. {"   "}
                    </div>
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
        </div>
      )}
    </div>
  );
}
