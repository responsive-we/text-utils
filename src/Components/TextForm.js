import { useState } from "react";
import React from 'react'

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const handleUppercase = () => {
    let upperCaseText = Text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Your text has been converted in upper Case", "success")
  };
  const handleLowercase = () => {
    let LowerCaseText = Text.toLowerCase();
    setText(LowerCaseText);
    props.showAlert("Your text has been converted in lower Case", "success")
  };
  const handleTitlecase = () => {
    let newText = Text.toLowerCase().split(" ");
    for (var i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    props.showAlert("Your text has been converted in title Case", "success")
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Your text has been cleared", "success")
  };
  const handeleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Your text has been copied to clipboard", "success")
  };
  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed from your text", "success")
  };
  return (
    <>
      <h1 style={{ fontSize: '36px' }}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handeleOnChange}
          value={Text}
          id="Textbox"
          rows="8"
          style={{
            backgroundColor: props.blackMode === false ? 'black' : 'white',
            color: props.blackMode === false ? 'white' : 'black'
          }}
        ></textarea>
      </div>
      <div
        className="btn-group my-1 container "
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          disabled={Text.length === 0}
          type="button"
          className="btn btn-outline-primary"
          onClick={handleUppercase}
        >
          Concert to Uppercase
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          className="btn btn-outline-primary"
          onClick={handleLowercase}
        >
          Concert to Lowerrcase
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          className="btn btn-outline-primary"
          onClick={handleTitlecase}
        >
          Concert to Titlecase
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          className="btn btn-outline-primary"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          className="btn btn-outline-primary"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          className="btn btn-outline-primary"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div className="container text_summary my-2">
        <h3>Text summary</h3>
        <p>
          {Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}words {Text.length}charecters
        </p>
        <p>{0.008 * Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}Minutes to read</p>
        <hr />
        <h3>Preview</h3>
        <p>
          {Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0
            ? Text
            : "Nothing to preview here :)"}
        </p>
      </div>
    </>
  );
}
