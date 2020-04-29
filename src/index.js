import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ScrollSpy from "./Components/ScrollSpy";
import * as serviceWorker from "./serviceWorker";

const divs = ["Section 1", "Section 2", "Section 3", "Section 4"].map(e => (
  <div key={e}>
    <h1>{e}</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
  </div>
));

ReactDOM.render(
  <div className="abc">
    <ScrollSpy
      menus={["Home", "Portfolio", "About", "Contact"]}
      sections={divs}
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
