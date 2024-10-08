import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import About from './Components/About';
import List from './Components/List';
import Chat from './Components/Chat';

import Sign from './Components/Sign';
import Register from './Components/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/list",
        element: <List></List>,
      },
      {
        path: "/chat",
        element: <Chat></Chat>,
      },
      {
        path: "/sign",
        element: <Sign></Sign>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
