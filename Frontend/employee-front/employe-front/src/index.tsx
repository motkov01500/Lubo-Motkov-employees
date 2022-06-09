// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import Home from "./components/Home";
// import reportWebVitals from "./reportWebVitals";
// import GridExample from "./components/Grid";

import axios from "axios";
import * as React from "react";
import { render } from "react-dom";
import EmployeeList from "./App";
import Hello from "./GGrid";
import ReactDom from "react-dom";

let formData = new FormData();
var csvImage = document.querySelector("#file");
console.log(csvImage);

formData.append("file", csvImage.fil);
axios.post("http://localhost:4000/employees/upload", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

/*const App = () => (
  <div>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <form action="" id="form">
      <input type="file" name="file" id="file" />
      <input type="submit" value="upload" />
    </form>
  </div>
);
*/
ReactDom.render(<EmployeeList />, document.getElementById("root"));
