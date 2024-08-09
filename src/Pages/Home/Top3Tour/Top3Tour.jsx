import StarRatings from "react-star-ratings";


const Top3Tour = ({tour}) => {
  const {image, rating, title, price, description} = tour;
  return (
    <div className="card  bg-base-100 md:w-96 shadow-xl">
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
      <button className="btn text-white bg-[#1b8ddd] hover:bg-[#1a1e2c]">See Details</button>
    </div>
  </div>
</div>
  );
};

export default Top3Tour;