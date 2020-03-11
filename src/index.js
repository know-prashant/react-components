import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Checkbox from "./Components/Checkbox";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <Checkbox
      label="select your item"
      option={{ label: "Name", value: "abc", disabled: false }}
      name="ck"
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
