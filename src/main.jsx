import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
         {
          path:"/listedBooks",
          element:<ListedBook></ListedBook>
         },
         {
          path:"/",
          element:<Home></Home>
         },

    ]
  },
]);
import App from './App.jsx'
import ErrorPage from './Error.jsx';
import ListedBook from './Components/ListedBook/ListedBook.jsx';
import Home from './Components/Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <RouterProvider router={router} />
  </StrictMode>,
)
