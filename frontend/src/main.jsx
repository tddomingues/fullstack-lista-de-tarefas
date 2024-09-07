import React from "react";

import ReactDOM from "react-dom/client";

//styles
import { Theme } from "./styles/theme.jsx";
import { GlobalStyle } from "./styles/global.js";

//redux
import { Provider } from "react-redux";
import store from "./store.js";

//router
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <RouterProvider router={AppRoutes} />
        <GlobalStyle />
      </Provider>
    </Theme>
  </React.StrictMode>,
);
