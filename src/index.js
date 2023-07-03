import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './api/client'
import App from './App'

// Routes
import Home from './routes/Home/Home'
import NewUser from './routes/NewUser/NewUser'
import EditUser from './routes/EditUser/EditUser'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new-user',
        element: <NewUser />
      },
      {
        path: '/edit-user/:id',
        element: <EditUser />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
