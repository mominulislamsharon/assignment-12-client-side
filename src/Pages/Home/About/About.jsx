import { FaQuoteLeft } from "react-icons/fa";


const About = () => {
    return (
        <div>
            <div className="relative">
                <img className="h-[500px] w-full" src="https://images.unsplash.com/photo-1600714480856-dc99b28892eb?" alt="" />
                <div className="absolute text-white top-40 left-20 ">
                <h1 className="text-4xl my-8 font-bold">About <span className="text-orange-400">Us</span></h1>
                <FaQuoteLeft className="text-3xl text-slate-400" />
                <p className="text-xl pt-6 text-blue-300 font-medium">Our travel agency specializes in crafting unforgettable journeys. </p>
                </div>
            </div>
            <div className="flex max-w-screen-xl mx-auto mt-24 gap-12">
            <div>
                <img className="h-[550px] w-[900px] rounded-lg" src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?" alt="" />
            </div>
            <div>
                <button className="bg-[#1b8ddd] text-white font-bold p-3 rounded-md">About Us</button>
                <h2 className="text-4xl font-bold pt-8">Travelling More Easy With Our Guide Team & Our Travel Service Agency</h2>
                <p className="font-medium pt-8 text-slate-500">Our travel agency offers unforgettable experiences. We provide comprehensive travel planning with tour packages, hotel bookings, and visa assistance to various destinations. Travel your dream journey with us.</p>
                <div className="bg-slate-100 mt-6 p-10">
                <FaQuoteLeft className="text-3xl text-slate-400" />
                    <p className="pt-8 font-medium">Our travel agency specializes in crafting unforgettable journeys. We offer a comprehensive range of services, including personalized tour packages, hotel reservations, flight bookings, and visa assistance to numerous destinations worldwide. Trust us to handle every detail, ensuring a seamless and stress-free travel experience. Embark on your dream adventures with confidence and ease.</p>
                    <h1 className="text-xl pt-4 font-bold text-orange-400">Libara</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;