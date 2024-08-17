import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`)
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
    <div className="bg-blue-200">
      <div className="flex justify-evenly mb-10 pt-8">
        <h1 className="text-4xl font-medium">All Package: {cart.length}</h1>
        <h1 className="text-4xl font-medium">Total Price: {totalPrice}</h1>
        <button className="w-16 rounded-md text-white bg-blue-500 text-xl font-bold">Pay</button>
      </div>
      <div className="overflow-x-auto px-12">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-blue-500 text-white text-sm">
            <tr>
              <th>#</th>
              <th>Host</th>
              <th>Package Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index}</th>
                <td>
                  <div className="flex items-center  gap-4">
                    <div className="avatar">
                      <div className="mask rounded-full  h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">{item.title}</td>
                <th>${item.price}</th>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn-lg text-red-500"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
  );
};

export default Cart;
