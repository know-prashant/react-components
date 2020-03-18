import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProgressBar from "./Components/ProgressBar";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <ProgressBar size="lg" visible={true} percentage={80} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
