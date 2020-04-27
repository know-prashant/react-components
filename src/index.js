import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ImageComparisonSlider from "./Components/ImageComparisonSlider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <ImageComparisonSlider
      image1={
        "https://cdn.pixabay.com/photo/2019/12/30/13/10/lost-places-4729640_1280.jpg"
      }
      image2={
        "https://cdn.pixabay.com/photo/2018/09/16/15/31/boy-3681679_1280.jpg"
      }
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
