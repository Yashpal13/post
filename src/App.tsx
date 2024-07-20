import React, { useState } from "react";
import Post from "./components/Post/Post";
import Posts from "./pages/Posts/Posts";
import Login from "./pages/Login/Login";
import Modal from "./components/Modal/Modal";
import SignUp from "./pages/SignUp/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    children: [
      {
        path: "login",
        element: (
          <div className="flex flex-col-vertical-center height-100">
            <div style={{ width: "50%", maxWidth: "450px" }}>
              <Login />
            </div>
          </div>
        ),
      },
      { path: "post", element: <Posts /> },
      {
        path: "*",
        element: (
          <div className="flex flex-col-vertical-center height-100">
            <div style={{ width: "50%", maxWidth: "450px" }}>
              <Login />
            </div>
          </div>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <div className="height-100">
      <Outlet />
    </div>
  );
}
