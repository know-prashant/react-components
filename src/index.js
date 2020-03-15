import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FileUploader from "./Components/FileUploader";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <FileUploader name="file" />
    <FileUploader
      name="error"
      label="Upload"
      helperText="There is some error"
      error={true}
    />
    <FileUploader name="disabled" label="Disabled" readOnly={true} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
