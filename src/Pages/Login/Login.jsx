import { FaGoogle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
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
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Email</span>
          </label>
          <input type="email" placeholder="email" className="input p-2 lg:p-8 md:p-8 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered p-2 md:p-8 lg:p-8" required />
        </div>
        <div className="form-control mt-8">
          <button className="btn bg-[#1b8ddd] text-white font-bold border-none hover:bg-black hover:text-white">Sign In</button>
        </div>
      </form>
      <div className="divider mt-6 w-1/2 mx-auto before:bg-white after:bg-white text-white">Or Sign in with</div>
      <div className="text-white mt-6 border p-3 w-1/2 mx-auto rounded-md shadow flex gap-2 justify-center items-center">
        <FaGoogle></FaGoogle>
        <h1>Google</h1>
      </div>
      <h1 className="text-white text-center mt-6 mb-6">New User? <Link to="" className="text-blue-500">Sign Up</Link></h1>
    </div>
  </div>
</div>
    );
};

export default Login;