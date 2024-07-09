import { FaQuoteLeft } from "react-icons/fa";


const HomeAbout = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mt-24 gap-12 p-4">
            <div>
                <img className=" mt-10 h-auto lg:h-[450px] w-full lg:w-[900px] rounded-lg" src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?" alt="" />
            </div>
            <div>
                <button className="bg-[#1b8ddd] text-white font-bold p-3 rounded-md">About Us</button>
                <h2 className="text-2xl lg:text-4xl font-bold pt-8">Travelling More Easy With Our Guide Team & Our Travel Service Agency</h2>
                <p className="font-medium pt-8 text-slate-500">Our travel agency offers unforgettable experiences. We provide comprehensive travel planning with tour packages, hotel bookings, and visa assistance to various destinations. Travel your dream journey with us.</p>
                <div className="bg-slate-100 mt-4 p-6 lg:p-10 rounded-md">
                <FaQuoteLeft className="text-2xl lg:text-3xl  text-slate-400" />
                    <p className=" pt-4 lg:pt-8 font-medium">Our travel agency specializes in crafting unforgettable journeys. We offer a comprehensive range of services, including personalized tour packages, hotel reservations, flight bookings, and visa assistance to numerous destinations worldwide. Trust us to handle every detail, ensuring a seamless and stress-free travel experience. Embark on your dream adventures with confidence and ease.</p>
                    <h1 className="text-lg lg:text-xl pt-2 lg:pt-4 font-bold text-orange-400">Libara</h1>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;