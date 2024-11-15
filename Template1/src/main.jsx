import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Auth, Homepage, Cart, Checkout, OrderConfirmation, OrderHistory, ProductDetail, UserProfile } from './Componets'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      }, {
        path: "/Auth",
        element: <Auth />
      },
      {
        path: "/ProductDetail",
        element: < ProductDetail />
      },
      {
        path: "/Cart",
        element: < Cart />
      },
      {
        path: "/Orderhistory",
        element: <OrderHistory />
      }, {
        path: "CheckOut",
        element: <Checkout />
      }, {
        path: "/Orderconfirmation",
        element: <OrderConfirmation />
      },
      {
        path: "Userprofile",
        element: <UserProfile />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
