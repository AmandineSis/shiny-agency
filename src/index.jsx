import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/survey",
      element: <Survey />
    }
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

