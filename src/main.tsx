import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App"; // ✅ App is a named export (not default)
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Optional custom styles

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
