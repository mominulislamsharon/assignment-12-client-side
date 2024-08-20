import { FaBook, FaHome, FaList, FaPhone, FaShoppingCart, FaUsers} from "react-icons/fa";
import { FaStreetView } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { GoPackage } from "react-icons/go";
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
  const [cart] = useCart();
  // ToDo: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex max-w-screen-xl mx-auto">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-blue-500">
          <ul className="menu p-4 text-white">
            {
              isAdmin ? <>
              <li>
              <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home</NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/addPackage">
              <GoPackage />
              Add Package</NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/manageItems">
              <FaList></FaList>
              Manage Items </NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/manageBooking">
              <FaBook></FaBook>
              Manage Booking</NavLink>
              </li>
            <li>
              <NavLink to="/dashboard/allUsers">
              <FaUsers></FaUsers>
              All Users</NavLink>
              </li>
              </> 
              : 
              <>
              <li>
              <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home</NavLink>
              </li>
            
            <li>
              <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Wishlist ({cart.length})</NavLink>
              </li>
              <li>
              <NavLink to="/dashboard/paymentHistory">
              <FaList></FaList>
              Payment History</NavLink>
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
              </>
            }
              <div className="divider bg-white h-[2px]"></div>
              <li>
              <NavLink to="/">
              <FaHome></FaHome>
              Home</NavLink>
              </li>
              <li>
              <NavLink to="/packages">
              <GoPackage></GoPackage>
              Packages</NavLink>
              </li>
              <li>
              <NavLink to="/contact">
              <FaPhone></FaPhone>
              Contact</NavLink>
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