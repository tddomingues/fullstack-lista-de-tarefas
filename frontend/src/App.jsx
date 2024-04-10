//style
import { GlobalStyle } from "./styles/global.js";
import { Theme } from "./styles/theme.jsx";

//router
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <AppRoutes />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
