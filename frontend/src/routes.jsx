import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

import Main from "./pages/Main/Main";
import Home from "./pages/Main/Home/Home";

import Profile from "./pages/Main/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Auth from "./pages/Auth/Auth";
import { useSelector } from "react-redux";
import CreateTask from "./pages/Main/CreateTask/CreateTask";
import Collaboration from "./pages/Main/Collaboration/Collaboration";
import Project from "./pages/Main/Project/Project";
import UpdateTask from "./pages/Main/UpdateTask/UpdateTask";
import Search from "./pages/Main/Search/Search";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/new-task" element={<CreateTask />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/updateTask/:id" element={<UpdateTask />} />
        <Route path="/search" element={<Search />} />
      </Route>

      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route
          path="register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
