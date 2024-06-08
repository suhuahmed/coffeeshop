import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Menu from './pages/Menu.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "services",
    element: <Services/>,
  },
  {
    path: "menu",
    element: <Menu/>,
  },
  {
    path: "contact",
    element: <ContactUs/>,
  },

]);




ReactDOM.createRoot(document.getElementById('root')).render(

     <RouterProvider router={router} />

)
