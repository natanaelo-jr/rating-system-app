import './assets/main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Routes/Home'
import Players from './Routes/Players'
import History from './Routes/History'
import Configs from './Routes/Configs'
import Error from './Routes/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'players',
        element: <Players />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'configs',
        element: <Configs />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
)
