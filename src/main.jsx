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
             loader: async () => {
             const res = await fetch("data.json");
             if (!res.ok) throw new Error("Failed to load books");
             return res.json();
             },
          element:<Home></Home>,
         },
       {
        path: "/showDetails",
        element: <ShowDetails></ShowDetails>,
       },

    ]
  },
]);
import App from './App.jsx'
import ErrorPage from './Error.jsx';
import ListedBook from './Components/ListedBook/ListedBook.jsx';
import Home from './Components/Home/Home.jsx';
import ShowDetails from './Components/ShowDetails/ShowDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <RouterProvider router={router} />
  </StrictMode>,
)
