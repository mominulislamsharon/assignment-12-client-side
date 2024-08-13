import { Rating } from "@smastrom/react-rating";

const TourCard = ({tour}) => {
  const {image, rating, title, price, description} = tour;
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
          <button className="btn bg-[#1b8ddd]  text-white hover:text-black hover:bg-blue-200 font-bold">Add Tour</button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
