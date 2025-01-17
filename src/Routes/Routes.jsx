import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/Home/About/About";
import Contact from "../Pages/Home/Contact/Contact";
import Blog from "../Pages/Home/Home/Blog/Blog";
import OurPackages from "../Pages/Home/OurPackages/OurPackages";
import DashBoard from "../LayOut/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/All Users/AllUsers";
import AddPackage from "../Pages/Dashboard/AddPackage/AddPackage";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Community from "../Pages/Community/Community";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
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
          path: '/about',
          element: <About></About>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        },
        {
          path: "/blogs",
          element: <Blog></Blog>
        },
        {
          path: "/packages",
          element: <OurPackages></OurPackages>
        }, 
        {
          path: "community",
          element: <Community></Community>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: 'userHOme',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        }, 
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        // admin only routes 
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'addPackage',
          element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: "updateItem/:id",
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://assignment-tourist-guid-server.vercel.app/menu/${params.id}`)
        },
        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        
      ]
    }
  ]);
