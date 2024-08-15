import { useContext } from "react";
import {FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import SocialLogin from "../../Components/SocailLogin/SocialLogin";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  console.log("sate in the location login page", location.state);





  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password  = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
Swal.fire({
  title: "User Login Successfull.",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});

  navigate(from, {replace: true});
    })

  }
    return (
        <>
        <Helmet>
          <title>Final Tour - Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-[#1a1e2c] flex justify-center items-center">
  <div className="hero-content flex-col items-center">
    <div className="text-center lg:text-left">
        <div className="flex justify-center mb-4">
        <div className="p-4 border-8 border-[#1b8ddd] rounded-full">
        <FaLock className="text-4xl text-white" />
        </div>
        </div>
      <h1 className="text-5xl text-white font-bold">Login now!</h1>
    </div>
    <div className="card md:w-[500px] lg:w-[600px] mx-w-sm lg:max-w-lg">
      <form onSubmit={handleLogin} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input p-2 lg:p-8 md:p-8 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered p-2 md:p-8 lg:p-8" required />
        </div>
        <div className="form-control mt-8">
          <button className="btn bg-[#1b8ddd] text-white font-bold border-none hover:bg-black hover:text-white">Sign In</button>
        </div>
      </form>
      
      <SocialLogin></SocialLogin>
      <h1 className="text-white text-center mt-6 mb-6">New User? <Link to="/signUp" className="text-blue-500 ml-3">Sign Up</Link></h1>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;