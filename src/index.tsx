import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

function Hi() {
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
