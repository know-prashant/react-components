import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CheckboxGroup from "./Components/CheckboxGroup";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <CheckboxGroup
      options={[
        { label: "I am not checked", value: "xyz", disabled: false },
        { label: "I am checked", value: "abc", disabled: false },
        { label: "I am disabled", value: "pqr", disabled: true },
        { label: "I am checked as well", value: "lmn", disabled: false }
      ]}
      name="radio"
      value={["abc", "lmn"]}
      inline={true}
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
