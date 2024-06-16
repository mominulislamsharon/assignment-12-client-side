import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/2922653/pexels-photo-2922653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
      }}>
        <div  className="flex flex-wrap container mx-auto footer justify-evenly items-center pb-6">
      <div className="font-medium text-white ">
        <h1 className="text-lg font-bold">Quick Links</h1>
        <ul className="font-medium">
          <li className="pt-4">
            <Link to="/">HOME</Link>
          </li>
          <li className="pt-4">
            <Link to="/packages">PACKAGES</Link>
          </li>
          <li className="pt-4">
            <Link to="/community">COMMUNITY</Link>
          </li>
          <li className="pt-4">
            <Link to="/blogs">BLOGS</Link>
          </li>
        </ul>
      </div>
      <div className="font-medium text-white">
        <h1 className="text-lg font-bold">Extra Links</h1>
        <ul>
        <li className="pt-4">
            <Link to="/contact">Need Help?</Link>
          </li>
        <li className="pt-4">
            <Link to="/about">About Us</Link>
          </li>
        <li className="pt-4">
            <Link>Privacy Police</Link>
          </li>
        </ul>
      </div>
      <div className="font-medium text-white">
        <h1 className="text-lg font-bold">Contact Info</h1>
            <div className="flex items-center pt-4 gap-2">
            <p><IoMdCall></IoMdCall></p>
            <p>+123-456-7890</p>
            </div>
            <div className="flex items-center pt-4 gap-2">
            <p><IoMdCall></IoMdCall></p>
            <p>+153-426-7610</p>
            </div>
            <div className="flex items-center pt-4 gap-2">
            <p><MdEmail /></p>
            <p>finalTravel@gmaill.com</p>
            </div>
            <div className="flex items-center pt-4 gap-2">
            <p><CiLocationOn /></p>
            <p>Dhaka-Bangladesh</p>
            </div>
      </div>
      <div className="font-medium text-white">
        <h1 className="text-lg font-bold">Socail</h1>
            <div className="flex items-center pt-4 gap-2">
            
            <a href="https://www.facebook.com/profile.php?id=100091491131174" target="_blank" rel="noopener noreferrer">
            <p><FaFacebook/></p>
            </a>
            <Link target="_blank" to="https://www.facebook.com/profile.php?id=100091491131174">Facebook</Link>
            </div>
            <div className="flex items-center pt-4 gap-2">
            <p><FaTwitter/></p>
            <p>Twitter</p>
            </div>
            <div className="flex items-center pt-4 gap-2">
            <p><FaInstagram/></p>
            <p>instagram</p>
            </div>
            <div className="flex items-center pt-4 gap-2">
            <p><FaLinkedin /></p>
            <p>Linkedin</p>
            </div>
      </div>
    </div>
  <aside>
    <p className="text-white font-medium">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
    </div>
  );
};

export default Footer;
