import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AlertBoxText from "./Components/AlertBox/test";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <AlertBoxText />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
