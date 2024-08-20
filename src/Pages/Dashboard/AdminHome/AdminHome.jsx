import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";


const AdminHome = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: stats} = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async() => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }
  })
  return (
    <div>
      <h1 className="text-3xl font-medium"><span>HI, Welcome - </span>
      <span className="font-bold bg-gradient-to-r from-[#2666f0] to-[#142753] bg-clip-text text-transparent">{
        user?.displayName ? user.displayName : 'Back'
      }</span>
      </h1>
      <div className="stats shadow mt-12">
  <div className="stat  bg-blue-100">
    <div className="stat-figure text-blue-400">
    <FaDollarSign className="text-3xl"></FaDollarSign>
    </div>
    <div className="stat-title font-medium text-blue-500">Revenue</div>
    <div className="stat-value">${stats.revenue}</div>
  </div>

  <div className="stat  bg-blue-100">
    <div className="stat-figure text-blue-400">
    <FaUsers className="text-3xl"></FaUsers>
    </div>
    <div className="stat-title font-medium text-blue-500">Users</div>
    <div className="stat-value">{stats.users}</div>
  </div>
  <div className="stat  bg-blue-100">
    <div className="stat-figure text-blue-400">
    <FaBook className="text-3xl"></FaBook>
    </div>
    <div className="stat-title font-medium text-blue-500">Tour Add</div>
    <div className="stat-value">{stats.tourItems}</div>
  </div>
  <div className="stat bg-blue-100">
    <div className="stat-figure text-blue-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title font-medium text-blue-500">Orders</div>
    <div className="stat-value">{stats.orders}</div>
  </div>
</div>
    </div>
  );
};

export default AdminHome;