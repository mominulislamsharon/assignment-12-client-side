import { Link } from "react-router-dom";
import logoImag from '../../../public/logo-travel.png'

const Navbar = () => {
    const navLinks = <>
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/packages">PACKAGES</Link></li>
    <li><Link to="/community">COMMUNITY</Link></li>
    <li><Link to="/blogs">BLOGS</Link></li>
    <li><Link to="/about">ABOUT</Link></li>
    <li><Link to="/contact">CONTACT</Link></li>
    </>
    return (
        <div className="navbar lg:px-36 text-white h-[80px] bg-[#011435]  fixed z-10 bg-opacity-50">
  <div className=" navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to="/"><img className="w-[140px]" src={logoImag} alt="" /></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu text-base font-bold menu-horizontal px-1">
      {navLinks}
    </ul>
    <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Profile</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li className="text-black"><a>LogOut</a></li>
    <li><a>Dashboard</a></li>
  </ul>
</div>
  </div>
</div>
    );
};

export default Navbar;