import { FaUserTie, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { IoHappyOutline } from "react-icons/io5";
import { MdOutlineCardTravel } from "react-icons/md";

const TravelDistination = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <SectionTitle
        heading="TRAVIO SPECIALS"
        subheading="Why Travel with Tutive?"
      ></SectionTitle>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="card  card-compact h-[300px] shadow-xl">
          <figure className="relative">
            <img className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/13287929/pexels-photo-13287929.jpeg?"
              alt="Shoes"
            />
            <div className="absolute -bottom-5 text-blue-500 bg-white rounded-full p-4 text-5xl">
              <FaUsers />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">2000+ Our Worldwide Guide</h2>
          </div>
        </div>
        <div className="card  card-compact h-[300px]  shadow-xl">
          <figure className="relative">
            <img className="w-full h-full object-cover "
              src="https://images.pexels.com/photos/6248957/pexels-photo-6248957.jpeg?"
              alt="Shoes"
            />
            <div className="absolute -bottom-5 text-blue-500 bg-white rounded-full p-4 text-5xl">
            <FaUserTie />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">100% Trusted Tour Agency</h2>
          </div>
        </div>
        <div className="card  card-compact h-[300px] bg-base-100 shadow-xl">
          <figure className="relative">
            <img className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/2432299/pexels-photo-2432299.jpeg?"
              alt="Shoes"
            />
            <div className="absolute -bottom-5 text-blue-500 bg-white rounded-full p-4 text-5xl">
            <MdOutlineCardTravel />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">12+ Years of Travel Experience</h2>
          </div>
        </div>
        <div className="card  card-compact  h-[300px] bg-base-100 shadow-xl">
          <figure className="relative">
            <img className="w-full h-full object-cover "
              src="https://images.pexels.com/photos/3760257/pexels-photo-3760257.jpeg?"
              alt="Shoes"
            />
            <div className="absolute -bottom-5 text-blue-500 bg-white rounded-full p-4 text-5xl">
            <IoHappyOutline />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">98% of Our Travelers are Happy</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDistination;
