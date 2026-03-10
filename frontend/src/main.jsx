import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import { BrandProvider } from "./context/BrandContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrandProvider>
      <App />
    </BrandProvider>
  </React.StrictMode>,
);
