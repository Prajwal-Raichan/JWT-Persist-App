import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextAuthProvider } from "./Contexts/ContextAuthProvider";
import { ContextProvider } from "./Contexts/ContextProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <ContextAuthProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ContextAuthProvider>
);
