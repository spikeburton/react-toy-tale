import React from "react";

export default function AddToyButton(props) {
  return (
    <p style={{ textAlign: "center" }}>
      {"Andy needs your help! "}
      <button id="new-toy-btn" onClick={props.handleClick}>
        {"Add a new toy!"}
      </button>
    </p>
  );
}
