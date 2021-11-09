import React from "react"; //yarn add @types/react -D
import ReactDOM from "react-dom"; //yarn add @types/react-dom -D
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
