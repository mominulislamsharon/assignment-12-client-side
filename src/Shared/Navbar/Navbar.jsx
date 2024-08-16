import { Link } from "react-router-dom";
import logoImag from '../../../public/logo-travel.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
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
  <div className="badge bg-blue-400 text-white">+{cart.length}</div>
</button>
      </Link>
    </li>
    </>
    const profileLinks = <>
    <div className="dropdown mt-4 dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 text-xl">Profile</div>
  <ul tabIndex={0} className="menu pl-8">
    {/* <li>< Link to="/login" className="text-black text-xl py-2">LogOut</ Link></li> */}
    <Link><a className="text-blue-500 font-bold flex justify-center items-center text-xl">Dashboard</a></Link>
    {
      user ? <>
      <button className="text-blue-500 text-xl font-bold flex justify-center items-center py-4" onClick={hangleLogOut}>LOGOUT</button>
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
  <div tabIndex={0} role="button" className="btn m-1">

      {
        user?.photURL ? (
          <img 
          src={user.photoURL}
          alt="user profile"
          className="w-8 h-8 rounded-full" />
        ) : (
          <span>{user?.displayName || 'Profile'}</span>
        )
      }
      </div>
 

  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    {/* < Link to="/login" className="text-black"><a>LogOut</a></ Link> */}
     <li><Link className="text-blue-500 text-lg font-bold flex justify-center items-center">DASHBOARD</Link></li>
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