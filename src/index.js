import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RadioGroup from "./Components/Radiobox";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <RadioGroup
      options={[
        { label: "I am not checked", value: "xyz", disabled: false },
        { label: "I am checked", value: "abc", disabled: false }
      ]}
      name="radio"
      prefillValue="abc"
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
