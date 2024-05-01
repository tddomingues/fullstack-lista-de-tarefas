import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Theme } from "./styles/theme.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { GlobalStyle } from "./styles/global.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
