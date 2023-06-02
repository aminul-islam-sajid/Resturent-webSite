import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/menu/Menu";
import Order from "../Pages/order/order page/Order";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/signUp/SignUp";
import PrivetRouts from "./PrivetRouts";
import Secret from "../Pages/shared/Secret/Secret";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/menu',
          element: <Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>

        },
        {
          path:'secret',
          element: <PrivetRouts><Secret></Secret></PrivetRouts>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivetRouts><Dashboard></Dashboard></PrivetRouts>,
      children:[
        {
          path:'mycart',
          element: <MyCart></MyCart>
        },
        {
          path:'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);