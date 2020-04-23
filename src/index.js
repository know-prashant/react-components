import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loader from "./Components/Loader";
import * as serviceWorker from "./serviceWorker";
import image from "./loader.gif";

ReactDOM.render(
  <div className="abc">
    {/* With image */}
    <Loader
      image={
        <img
          src={image}
          alt="loader"
          style={{ display: "inline-block", verticalAlign: "middle" }}
        />
      }
      fullScreen={true}
    />

    {/* default */}
    <Loader
      fullScreen={true}
      width="120px"
      height="120px"
      bgColor="rgba(0,0,0,.5)"
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
