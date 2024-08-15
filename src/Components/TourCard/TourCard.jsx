import { Rating } from "@smastrom/react-rating";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const TourCard = ({tour}) => {
  const {image, rating, title, price, description, _id} = tour;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch]= useCart();

  const handleAddTourCart = () => {
    if(user && user.email){
      // send cart add database 
      const cartItem = {
        menuId: _id, 
        email: user.email,
        title,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} add to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // reset cart update cart items 
          refetch();
        }
      })
    }
    else{
      Swal.fire({
        title: "You are not Logged In",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate('/login',{state: {from: location}})
        }
      });
    }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img  className="h-48 w-full object-cover"
          src={image}
          alt="tour"
        />
      </figure>
      <p className="text-white bg-black absolute  right-0 mr-4 mt-4 font-bold px-2">${price}</p>
      <div className="card-body bg-blue-100 bg-opacity-55">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-black py-4">{description}</p>
        <Rating className="text-start" style={{ maxWidth: 120 }} value={rating} readOnly />
        <div className="card-actions justify-end mt-2 ">
          <button onClick={handleAddTourCart} className="btn bg-[#1b8ddd]  text-white hover:text-black hover:bg-blue-200 font-bold">Add Tour</button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
