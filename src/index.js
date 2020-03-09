import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./Components/Button";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <Button label="Basic" variant="basic" />

    <Button label="Link" variant="link" />

    <Button label="Secondary" variant="secondary" />

    <Button label="Danger" variant="danger" />

    <Button label="Disabled" disabled={true} />

    <Button label="Primary" variant="primary" />

    <Button label="Outline" variant="outline" />

    <Button label="Medium" variant="primary" size="medium" />

    <Button label="Large" variant="outline" size="large" />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
