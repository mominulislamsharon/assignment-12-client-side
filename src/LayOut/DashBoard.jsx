import { FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className="flex max-w-screen-xl mx-auto">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-blue-500">
          <ul className="menu p-4 text-white">
            <li>
              <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home</NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/booking">
              <FaList></FaList>
              My Booking</NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Wishlist ({cart.length})</NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/review">
              <FaStreetView></FaStreetView>
              Add a Review</NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/request">
              <RiAdminFill />
              Request to Admin</NavLink>
              </li>
              <div className="divider bg-white h-[2px]"></div>
              <li>
              <NavLink to="/">
              <FaHome></FaHome>
              Home</NavLink>
              </li>
              <li>
              <NavLink to="/packages">
              <FaHome></FaHome>
              Packages</NavLink>
              </li>
          </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;