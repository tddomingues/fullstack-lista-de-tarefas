//style

//router
import { BrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes.jsx";
import { Theme } from "./styles/theme.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { GlobalStyle } from "./styles/global.js";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Provider store={store}>
          <GlobalStyle />
          <AppRoutes />
        </Provider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
