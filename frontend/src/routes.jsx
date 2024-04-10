import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

import Main from "./pages/Main/Main";
import Home from "./pages/Main/Home/Home";

import { useAuth } from "./hooks/useAuth";

const AppRoutes = () => {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={auth ? <Main /> : <Navigate to="/register" />}>
        <Route
          path="/"
          element={auth ? <Home /> : <Navigate to="/register" />}
        />
      </Route>
      <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!auth ? <Register /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
