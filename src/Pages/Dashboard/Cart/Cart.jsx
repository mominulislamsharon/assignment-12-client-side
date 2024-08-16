import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  
  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h1 className="text-4xl">All Package: {cart.length}</h1>
        <h1 className="text-4xl">Total Price: {totalPrice}</h1>
        <button className="btn ">Pay</button>
      </div>
      <div className="overflow-x-auto bg-blue-200 rounded-t-xl">
        <table className="table w-full  ">
          {/* head */}
          <thead className="bg-blue-500 text-white text-sm">
            <tr>
              <th>
                #
              </th>
              <th>Host</th>
              <th>Package Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr key={item._id}>
                <th>
                  {index}
                </th>
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
                <td>
                  {item.title}
                </td>
                <th>
                  ${item.price}
                </th>
                <th>
                  <button className="btn-lg text-red-500"><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
