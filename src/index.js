import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToolTip from "./Components/Tooltip";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <ToolTip text="Left" placement={"left"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Left
      </div>
    </ToolTip>
    <ToolTip text="Right" placement={"right"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Right
      </div>
    </ToolTip>
    <ToolTip text="Top" placement={"top"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Top
      </div>
    </ToolTip>
    <ToolTip text="Bottom" placement={"bottom"} active={true}>
      <div style={{ padding: "5px", border: "2px solid", borderRadius: "4px" }}>
        ToolTip Bottom
      </div>
    </ToolTip>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
