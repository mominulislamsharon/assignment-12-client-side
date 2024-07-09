import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";


const BestTravel = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-52 max-w-screen-xl mx-auto mt-24 p-4">
            <div className="pt-4 lg:pt-16">
                <button className="bg-[#1a8ddc] p-3 font-bold text-white w-full lg:w-auto rounded-md">WHAT WE DO</button>
                <h1 className=" text-2xl lg:text-3xl pt-4 lg:pt-8 font-bold">Best Overworld Travel Guide Agency Services</h1>
                <p className="font-medium pt-4 lg:py-8 text-slate-400">Expert travel guides offering personalized tours, local insights, and seamless experiences. Discover hidden gems and cultural treasures with our knowledgeable guides.</p>
                <div className="flex gap-4 pt-4 lg:pt-8 items-center">
                <FaUserEdit className=" text-3xl lg:text-4xl text-orange-400" />
                <h1 className="text-xl lg:text-2xl font-bold">Completed Training Guide</h1>
                </div>
                <p className="text-slate-400 lg:pt-4 pb-4 lg:pb-8 ml-6 lg:ml-10 font-medium">Expert training guides providing personalized instruction and practical skills for success.</p>
                <div className="flex gap-4 pt-4 lg:pt-8 items-center">
                <AiOutlineSecurityScan className="text-3xl lg:text-4xl text-orange-400" />
                <h1 className="text-xl lg:text-2xl font-bold">World Insurance Included</h1>
                </div>
                <p className="text-slate-400 ml-6 lg:ml-10 py-4 lg:py-6 font-medium">Comprehensive global insurance coverage for health, travel, and emergencies.</p>
            <button className="bg-[#1b8ddd] lg:ml-10 p-3 font-bold text-white w-full lg:w-auto">SEE ALL SERVICES</button>
            </div>
            <div>
                <div className="relative">
                <img className="w-full lg:w-[700px] h-auto lg:h-[300px]" src="https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?" alt="" />
                <h1 className=" bg-[#1a1b29] w-full lg:w-[480px] pb-4 absolute text-white top-14 lg:top-14 left-0 lg:-left-52 text-lg lg:text-4xl font-bold pt-2 lg:pt-4 pl-2 lg:pl-4">Nature Adventures Guide <br /> <span className="text-base text-slate-500">Expert guide for thrilling nature expeditions, exploring wildlife and scenic landscapes worldwide.</span></h1>
                </div>

                <div className="relative mt-6">
                <img className="w-full lg:w-[700px] h-auto lg:h-[300px]" src="https://images.pexels.com/photos/6534923/pexels-photo-6534923.jpeg?" alt="" />
                <h1 className=" bg-[#1a1b29] mt-4 lg:mt-6 w-full lg:w-[520px] absolute pb-4 text-white top-4 lg:top-14 left-0 lg:-left-52 text-lg lg:text-4xl font-bold pt-2 lg:pt-4 pl-2 lg:pl-4">World Travelling Destination<br /> <span className="text-base text-slate-500">Global travel destinations offering diverse cultures, landmarks, and natural wonders for exploration and discovery.</span></h1>
                </div>
            </div>
        </div>
    );
};

export default BestTravel;