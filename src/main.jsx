import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./tailwindcss.css";

// we are creating the virual dom element here...!
createRoot(document.getElementById("actual-dom-element")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
