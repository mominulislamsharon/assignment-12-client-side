import { Link } from "react-router-dom";
import logoImag from '../../../public/logo-travel.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const hangleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
  }
    const navLinks = <>
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/packages">PACKAGES</Link></li>
    <li><Link to="/community">COMMUNITY</Link></li>
    <li><Link to="/blogs">BLOGS</Link></li>
    <li><Link to="/about">ABOUT</Link></li>
    <li><Link to="/contact">CONTACT</Link></li>
    <li>
      <Link to="/dashboard/cart">
      <button className="flex justify-center items-center">
        <FaShoppingCart className="mr-2 text-xl"></FaShoppingCart>
  <div className="badge border-none bg-blue-400 text-white">+{cart.length}</div>
</button>
      </Link>
    </li>
    </>
    const profileLinks = <>
    <div className="divider bg-blue-300 h-[2px]"></div>
    <div className="dropdown mt-2  dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className=" flex justify-center items-center text-xl">
    {user ? (
      <img
      src={user.photoURL}
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />
    ) : (
      <span className="bg-blue-500 font-medium text-white py-2 px-4 rounded-full">Account</span>
    ) 
  }
  </div>
  <div className="font-bold flex justify-center py-4">
    {
      user ? (
        <span>{user.displayName}</span>
      ) : null
    }
  </div>
  <ul tabIndex={0} className="menu">
    {
      user && isAdmin && <Link to="dashboard/adminHome"><a className="text-blue-500 font-bold flex justify-center items-center text-lg">Dashboard</a></Link>
    }
    {
      user && !isAdmin && <Link to="dashboard/userHome"><a className="text-blue-500 font-bold flex justify-center items-center text-lg">Dashboard</a></Link>
    }
    {
      user ? <>
      <button className="text-blue-500 text-lg font-bold flex justify-center items-center py-2" onClick={hangleLogOut}>LOGOUT</button>
      </> : <>
      <li>< Link to="/login" className="text-blue-500 text-xl font-bold flex justify-center items-center">LOGIN</ Link></li>
      </>
    }
  </ul>
</div>
    </>
    return (
        <div className="navbar lg:px-36 text-white h-[80px] bg-[#011435]  fixed z-10 bg-opacity-50">
  <div className=" navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu  text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        {profileLinks}
      </ul>
    </div>
    <Link to="/"><img className="w-[140px]" src={logoImag} alt="" /></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu text-base font-bold menu-horizontal px-1">
      {navLinks}
    </ul>
    <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className=" flex items-center">
        {
          user ? (
            <img
            src={user.photoURL}
            alt="Profile"
            className="w-10 h-10 rounded-full"
            />
          ) : (
            <span className="bg-blue-500 font-medium text-white py-2 px-4 rounded-full">Account</span>
          )
        }
      </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <div className="font-bold text-blue-500 flex justify-center py-4">
    {
      user ? (
        <span>{user.displayName}</span>
      ) : null
    }
  </div>
     {
      user && isAdmin && <Link to="dashboard/adminHome"><a className="text-blue-500 font-bold flex justify-center items-center text-lg">Dashboard</a></Link>
    }
    {
      user && !isAdmin && <Link to="dashboard/userHome"><a className="text-blue-500 font-bold flex justify-center items-center text-md">Dashboard</a></Link>
    }
    {
      user ? <>
      <button className="text-blue-500 text-lg font-bold flex justify-center items-center" onClick={hangleLogOut}>LOGOUT</button>
      </> : <>
      <li>< Link to="/login" className="text-blue-500 text-lg font-bold flex justify-center items-center">LOGIN</ Link></li>
      </>
    }
  </ul>
</div>
  </div>
</div>
    );
};

export default Navbar;