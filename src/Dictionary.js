import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    console.log(keyword);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="form-control" onSubmit={search}>
        <input
          type="text"
          className="form-control"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
