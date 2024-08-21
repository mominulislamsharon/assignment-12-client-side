import StarRatings from "react-star-ratings";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";


const Top3Tour = ({tour}) => {
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
        price, 
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
    <div className="card  bg-base-100 md:w-96 shadow-xl mt-16">
  <figure className="h-52 overflow-hidden">
    <img
      src={image}
      className="w-full h-full object-cover"
      alt="Tour" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <StarRatings
      rating={rating}
      starRatedColor="orange"
      numberOfStars={5}
      starDimension="15px"
      starSpacing="2px"
      ></StarRatings>
    </h2>
    <p className="font-bold text-2xl">{title}</p>
    <p className="font-medium text-xl text-[#1a1e2c]">${price} <span className="text-slate-500">/Per person</span></p>
    <p className="text-lg font-medium text-slate-600">{description}</p>
    <div className="">
      <button onClick={handleAddTourCart} className="btn text-white bg-[#1b8ddd] hover:bg-[#1a1e2c]">Add Tour</button>
    </div>
  </div>
</div>
  );
};

export default Top3Tour;