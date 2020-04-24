import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ScrollTop from "./Components/ScrollTop";
import * as serviceWorker from "./serviceWorker";

const divs = ["purple", "green", "yellow", "blue"].map(e => (
  <div key={e} style={{ height: "100vh", backgroundColor: e }}></div>
));

ReactDOM.render(
  <div className="abc">
    {divs}
    <ScrollTop />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
