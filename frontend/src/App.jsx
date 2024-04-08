import "./App.css";
import Home from "./pages/home/home.jsx";
import { GlobalStyle } from "./styles/global.js";
import { Theme } from "./styles/theme.jsx";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Home />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
