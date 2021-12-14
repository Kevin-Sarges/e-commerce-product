import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyProvider } from "./context/MyContext";

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);