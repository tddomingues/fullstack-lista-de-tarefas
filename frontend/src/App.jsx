import "./App.css";
import { GlobalStyle } from "./styles/global.js";
import { Theme } from "./styles/theme.jsx";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
