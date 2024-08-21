
import useAuth from "../../../Hooks/useAuth";
import userImage from "../../../assets/user.png";

const UserHome = () => {
  const { user } = useAuth();
  const profilePicture = user?.photoURL || userImage;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-medium mb-8">
        <span>HI, Welcome - </span>
        <span className="font-bold bg-gradient-to-r from-[#2666f0] to-[#142753] bg-clip-text text-transparent">
          {user?.displayName ? user.displayName : 'Back'}
       </span>
      </h1>
      <div className="">
        <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={user?.coverURL || "https://gajean.com/buster/wp-content/uploads/sites/26/elementor/thumbs/coupe-traveling-in-the-mountains-1-q0vp33sema7bbmnfh2mdf89wh0jtkgqboxhv3ac968.jpg"}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <img
          src={profilePicture}
          alt="User"
          className="w-16 h-16 mt-8 rounded-full border-2 border-gray-300"
        />
        <div>
          <h1 className="text-3xl py-2 font-semibold">{user?.displayName || 'Guest'}</h1>
          <p className="text-lg text-gray-600">{user?.email || 'No email available'}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p>{user?.bio || 'No bio available'}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">More Details</h2>
        <p>Birthdate: {user?.birthdate || 'Not provided'}</p>
        <p>Address: {user?.address || 'Not provided'}</p>
      </div>
    </div>
  );
};

export default UserHome;
