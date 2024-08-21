import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CoverBanner from "../../Shared/CoverBanner/CoverBanner";
import { Link } from "react-router-dom";


const Community = () => {
  return (
    <div>
      <CoverBanner
      imgs={
        "https://viaboo.com/assets/resized/2c850a80a73056ffc8443ee2af4023fe.webp"
      }
      title="Our Community"
      description="Our community is a peaceful destination, offering natural beauty, cultural experiences, and outdoor activities. Explore local markets, enjoy traditional cuisine, and discover historical sites. Perfect for relaxation and adventure."
      ></CoverBanner>
      <div className="max-w-screen-xl mx-auto mt-24">
        <SectionTitle
        heading="Meet The Team"
        subheading="We have a team of professionals, dedicated to providing excellent service to ensure the enjoyment of your vacation."
        ></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <div className="relative">
          <img className="h-[500px] border" src="http://quickdevs.com/demo/travi/images/commons/team3.jpg" alt="" />
          <div className="absolute flex justify-center items-center w-64 h-[150px] bg-white bg-opacity-70  bottom-10 left-10">
            <div> 
            <h1 className="text-3xl font-medium">Lorena Smith</h1>
            <p className="text-center py-4">Tour Oparator</p>
            <div className="flex text-2xl justify-center items-center gap-3 ">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="h-[500px] border" src="http://quickdevs.com/demo/travi/images/commons/team1.jpg" alt="" />
          <div className="absolute flex justify-center items-center w-64 h-[150px] bg-white bg-opacity-70  bottom-10 left-10">
            <div> 
            <h1 className="text-3xl font-medium">Ricardo Anje</h1>
            <p className="text-center py-4">Vacation Coordinator</p>
            <div className="flex text-2xl justify-center items-center gap-3 ">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="h-[500px] border" src="http://quickdevs.com/demo/travi/images/commons/team3.jpg" alt="" />
          <div className="absolute flex justify-center items-center w-64 h-[150px] bg-white bg-opacity-70  bottom-10 left-10">
            <div> 
            <h1 className="text-3xl font-medium">Julia Jones</h1>
            <p className="text-center py-4">Marketing</p>
            <div className="flex text-2xl justify-center items-center gap-3 ">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="h-[500px] border" src="http://quickdevs.com/demo/travi/images/commons/team6.jpg" alt="" />
          <div className="absolute flex justify-center items-center w-64 h-[150px] bg-white bg-opacity-70  bottom-10 left-10">
            <div> 
            <h1 className="text-3xl font-medium">Ryan Thomas</h1>
            <p className="text-center py-4">Marketing</p>
            <div className="flex text-2xl justify-center items-center gap-3 ">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="h-[500px] border" src="http://quickdevs.com/demo/travi/images/commons/team5.jpg" alt="" />
          <div className="absolute flex justify-center items-center w-64 h-[150px] bg-white bg-opacity-70  bottom-10 left-10">
            <div> 
            <h1 className="text-3xl font-medium">Richard Jones</h1>
            <p className="text-center py-4">Marketing</p>
            <div className="flex text-2xl justify-center items-center gap-3 ">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="h-[500px] border" src="http://quickdevs.com/demo/travi/images/commons/team4.jpg" alt="" />
          <div className="absolute flex justify-center items-center w-64 h-[150px] bg-white bg-opacity-70  bottom-10 left-10">
            <div> 
            <h1 className="text-3xl font-medium">Carlos Cimino</h1>
            <p className="text-center py-4">Marketing</p>
            <div className="flex text-2xl justify-center items-center gap-3 ">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-blue-500 min-h-[8rem] my-16 py-4 md:py-0 md:h-32 flex flex-col md:flex-row gap-12 items-center justify-around">
          <div className="text-white">
          <h1 className="text-2xl py-2 font-bold">Need Help With Your Tour</h1>
          <p>Send us a message and one of our experts will contact you.</p>
          </div>
          <div className="text-blue-600 font-medium flex justify-center items-center bg-white p-4 h-10 rounded-md shadow-lg">
          <Link to="/contact"><button>REQUEST A QUOTE</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;