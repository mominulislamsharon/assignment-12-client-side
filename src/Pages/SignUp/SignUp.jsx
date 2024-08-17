import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocailLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const axiosPublic = useAxiosPublic();
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user added to the database')
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Final Tour - Sing Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-[#1a1e2c] flex justify-center items-center">
        <div className="hero-content flex-col items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-white font-bold">
              Create a new account
            </h1>
            <p className="text-white pt-6">
              Fill out the below form to create a new account.
            </p>
          </div>
          <div className="card md:w-[500px] lg:w-[600px] mx-w-sm lg:max-w-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-medium">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input p-2 lg:p-8 md:p-8 input-bordered"
                />
                {errors.name && (
                  <p className="text-red-600">Please Input Name</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-medium">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input p-2 lg:p-8 md:p-8 input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">Please Input Email</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="input input-bordered p-2 md:p-8 lg:p-8"
                />
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less then 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Upper Case, one Lower Case, one
                    number, and one special characters
                  </p>
                )}
              </div>
              <div className="form-control mt-8">
                <button className="btn bg-[#1b8ddd] text-white font-bold border-none hover:bg-black hover:text-white">
                  Sign Up Now
                </button>
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <h1 className="text-white text-center mt-6 mb-6">
              Already a member?{" "}
              <Link to="/login" className="text-blue-500 ml-3">
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
