
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
  const {googleSignIn} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
    })
  }
  return (
    <div>
      <div className="divider mt-6 w-1/2 mx-auto before:bg-white after:bg-white text-white">Or Sign in with</div>
      <button onClick={handleGoogleLogin} className="text-white  mt-6 border p-3 w-1/2 mx-auto rounded-md shadow flex gap-2 justify-center items-center">
        <FaGoogle className="text-blue-300"></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;