import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Select from "./Components/Select";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="abc">
    <Select
      name="abc"
      options={[
        { value: "car1", label: "Toyota" },
        { value: "car2", label: "Honda" },
        { value: "car3", label: "Hyundai" },
        { value: "car4", label: "BMW" }
      ]}
      label="Single Selection"
    />
    <Select
      name="abc"
      options={[
        { value: "car1", label: "Toyota" },
        { value: "car2", label: "Honda" },
        { value: "car3", label: "Hyundai" },
        { value: "car4", label: "BMW" }
      ]}
      multi={true}
      disableOptionsByValue={["car4"]}
      label="Mutliple Selection"
      value={[{ value: "car2", label: "Honda" }]}
    />
    <Select
      name="abc"
      options={[
        { value: "car1", label: "Toyota" },
        { value: "car2", label: "Honda" },
        { value: "car3", label: "Hyundai" },
        { value: "car4", label: "BMW" }
      ]}
      disabled={true}
      label="Disabled"
    />
    <Select
      name="abc"
      options={[
        { value: "car1", label: "Toyota" },
        { value: "car2", label: "Honda" },
        { value: "car3", label: "Hyundai" },
        { value: "car4", label: "BMW" }
      ]}
      error={true}
      label="Error"
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
