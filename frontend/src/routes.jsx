import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Main from "./pages/Main/Main";
import Home from "./pages/Main/Home/Home";
import Profile from "./pages/Main/Profile/Profile";
import ProtectLoggedRoute from "./components/ProtectedRoute/ProtectLoggedRoute";
import CreateTask from "./pages/Main/CreateTask/CreateTask";
import Collaboration from "./pages/Main/Collaboration/Collaboration";
import Project from "./pages/Main/Project/Project";
import UpdateTask from "./pages/Main/UpdateTask/UpdateTask";
import Search from "./pages/Main/Search/Search";
import Notes from "./pages/Main/Notes/Notes";
import ProtectNonLoggedRoute from "./components/ProtectedRoute/ProtectNonLoggedRoute";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth/login",
        element: (
          <ProtectLoggedRoute>
            <Login />
          </ProtectLoggedRoute>
        ),
      },
      {
        path: "auth/register",
        element: (
          <ProtectLoggedRoute>
            <Register />
          </ProtectLoggedRoute>
        ),
      },
      {
        path: "/",
        element: (
          <ProtectNonLoggedRoute>
            <Main />
          </ProtectNonLoggedRoute>
        ),
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "profile/:id",
            element: <Profile />,
          },
          {
            path: "new-task",
            element: <CreateTask />,
          },
          {
            path: "collaboration",
            element: <Collaboration />,
          },
          {
            path: "project/:id",
            element: <Project />,
          },
          {
            path: "updateTask/:id",
            element: <UpdateTask />,
          },
          {
            path: "project/notes/:id",
            element: <Notes />,
          },
          {
            path: "search",
            element: <Search />,
          },
        ],
      },
    ],
  },
]);
