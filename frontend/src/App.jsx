//style

//router
import { BrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Theme } from "./styles/theme.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { GlobalStyle } from "./styles/global.js";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
