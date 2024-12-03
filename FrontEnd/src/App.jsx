import React from "react";
import {
  createdBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
// import Profile from "./pages/Profile.jsx";
import Write from "./pages/Write.jsx";
import Single from "./pages/Single.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      |<Footer />
    </>
  );
};

const router = createdBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
