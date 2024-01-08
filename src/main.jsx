import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pages from './pages/Pages.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import '../public/index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/post/:id',
    element: <Pages />,
    errorElement: <div>Page Not Found</div>,
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
