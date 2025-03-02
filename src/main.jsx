import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import All from './Component/All/All.jsx';
import AddToy from './Component/AddToy/AddToy.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Main from './Component/Main/Main.jsx';
import Auth from './Component/Auth/Auth.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';
import Details from './Component/Details/Details.jsx';
import PrivateRoute from './Component/PrivateRoute.jsx';
import Mytoy from './Component/MyToy/Mytoy.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: "/data",
        element: <All></All>,
        
      },
      {
        path: "/myToy",
        element: <Mytoy></Mytoy>,
        
      },
        {
          path: "/data/:id",
          element:<PrivateRoute><Details></Details> </PrivateRoute> ,
          loader: ({ params }) => fetch(`https://assignment-toy-shop.vercel.app/data/${params.id}`)
        },
      
      {
        path: "/add",
        element:<PrivateRoute><AddToy></AddToy> </PrivateRoute> 
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
      <RouterProvider router={router} />

    </Auth>
  </React.StrictMode>,
)
