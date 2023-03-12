import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './compoments/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Diagnostico from './pages/Diagnostico';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
       {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/diagnostico",
        element: <Diagnostico/>
      }

    ]
  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
