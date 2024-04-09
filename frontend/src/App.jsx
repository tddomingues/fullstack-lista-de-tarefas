//style
import "./App.css";
import { GlobalStyle } from "./styles/global.js";
import { Theme } from "./styles/theme.jsx";

//router
import { BrowserRouter } from "react-router-dom";

//redux
import store from "./store.js";
import { Provider } from "react-redux";

//pages
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Theme>
          <GlobalStyle />
          <Home />
        </Theme>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
