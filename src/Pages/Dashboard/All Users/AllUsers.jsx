import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
      console.log(res.data)
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-blue-200 rounded-lg pb-4">
      <div className="flex justify-evenly my-4 py-4">
        <h2 className="text-3xl font-medium">All Users</h2>
        <h2 className="text-3xl font-medium">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto px-12">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-500 text-white text-sm">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-medium">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  { user.role === 'admin' ? 'Admin' :
                    <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn-lg text-2xl rounded-md bg-blue-500 text-white"
                  >
                    <FaUsers></FaUsers>
                  </button>
                  }
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn-lg text-2xl text-red-500"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
