import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx'
import Home from '../pages/Home/Home.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        element: <Home/>,
      }
    ]
  },
]);
