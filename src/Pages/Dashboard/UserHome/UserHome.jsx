import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
  const {user} = useAuth();
  return (
    <div>
      <h1 className="text-3xl font-medium"><span>HI, Welcome </span></h1>
      {
        user?.displayName ? user.displayName: 'Back'
      }
    </div>
  );
};

export default UserHome;