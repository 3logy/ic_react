import * as React from "react";
import { render } from "react-dom";
import { contacts } from "../../declarations/ic_react_backend";
import "../assets/main.css";

const Ic_react = () => {
  return (
    <div className="new-entry">
      <h1>Simple Example</h1>
    </div>
  );
};

document.title = "DFINITY SIMPLE EXAMPLE";

render(<Ic_react />, document.getElementById("default"));