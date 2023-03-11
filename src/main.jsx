import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './compoments/Layout'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout/>,
      children: [
          {
              index: true,
              element: <Home/>,
          },
        
      ] 
  },
      
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
