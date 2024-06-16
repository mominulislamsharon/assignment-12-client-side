import { FaGoogle } from "react-icons/fa";
import { Link} from "react-router-dom";


const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-[#1a1e2c] flex justify-center items-center">
  <div className="hero-content flex-col items-center">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl text-white font-bold">Create a new account</h1>
      <p className="text-white pt-6">Fill out the below form to create a new account.</p>
    </div>
    <div className="card md:w-[500px] lg:w-[600px] mx-w-sm lg:max-w-lg">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input p-2 lg:p-8 md:p-8 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input p-2 lg:p-8 md:p-8 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered p-2 md:p-8 lg:p-8" required />
        </div>
        <div className="form-control mt-8">
          <button className="btn bg-[#1b8ddd] text-white font-bold border-none hover:bg-black hover:text-white">Sign Up Now</button>
        </div>
      </form>
      <div className="divider mt-6 w-1/2 mx-auto before:bg-white after:bg-white text-white">Or Sign in with</div>
      <div className="text-white cursor-pointer mt-6 border p-3 w-1/2 mx-auto rounded-md shadow flex gap-2 justify-center items-center">
      <FaGoogle></FaGoogle>
      <h1>Google</h1>
      </div>
      <h1 className="text-white text-center mt-6 mb-6">Already a member? <Link to="/login" className="text-blue-500 ml-3">Login</Link></h1>
    </div>
  </div>
</div>
    );
};

export default SignUp;