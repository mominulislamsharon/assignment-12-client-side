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



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }, 
        // admin routes 
        {
          path: "allUsers",
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);
