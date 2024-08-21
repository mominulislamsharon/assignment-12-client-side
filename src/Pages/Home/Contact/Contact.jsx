import { CgMail } from "react-icons/cg";
import {  FaPhone } from "react-icons/fa";
import { FaLocationDot} from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Final Tour - Contact</title>
      </Helmet>
      <div className="relative">
        <img
          className="h-[500px] w-full object-cover object-center"
          src="https://images.pexels.com/photos/1058949/pexels-photo-1058949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="absolute  text-white top-40 left-20 ">
          <h1 className="text-4xl my-8 font-bold">
            Contact <span className="text-orange-400">Us</span>
          </h1>
          <p className="text-xl pt-6 text-[#1a1e2c] font-medium">
          Contact us for any questions, feedback, or support. We are always ready to assist you.
          </p>
        </div>
      </div>
      <div className="bg-[#1a1e2c] mb-2 lg:mb-4 bg-opacity-75  py-6 px-12 lg:px-10">
          <div className="max-w-screen-xl mx-auto lg:gap-12 flex  flex-col lg:flex-row lg:justify-between ">
          <div className="text-center mb-6 lg:mb-0">
          <div className="group border hover:bg-blue-500  border-blue-500 rounded-full p-4 flex justify-center items-center">
          <FaLocationDot className="text-2xl group-hover:text-white text-[#1b8ddd]" />
          </div>
          <p className="text-white pt-3 font-medium lg:pt-4">Uttara sector-1 /Dhaka-1230</p>
          <p className="text-white pt-2 font-medium lg:pt-4">Bangladesh</p>
          </div>
          <div className="text-center mb-6 lg:mb-0">
          <div className="group border hover:bg-blue-500  border-blue-500 rounded-full p-4 flex justify-center items-center">
          <FaPhone  className="text-2xl group-hover:text-white text-[#1b8ddd]" />
          </div>
          <p className="text-white pt-2 font-medium lg:pt-4">+12545757</p>
          <p className="text-white pt-2 font-medium lg:pt-4">+11540254</p>
          </div>
          <div className="text-center">
          <div className="group border hover:bg-blue-500  border-blue-500 rounded-full p-4 flex justify-center items-center">
          <CgMail  className="text-2xl group-hover:text-white text-[#1b8ddd]" />
          </div>
          <p className="text-white pt-2 font-medium lg:pt-4">finalTravel@gmail.com</p>
          <p className="text-white pt-2 font-medium lg:pt-4">finalTravel5@gmail.com</p>
          </div>
          </div>
      </div>
      <div>
      <div>
      <SectionTitle
        heading="Get in Touch With Us"
         subheading="World’s leading non-asset- based supply chain management companies, we design and implement industry-leading. We specialise in intelligent & effective search and believes business."
      ></SectionTitle>
      </div>
      <div className="flex mb-16 items-center justify-center ">
        <div className="w-full  max-w-2xl p-8 ">
          <form className="space-y-6 ">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input className=" w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="" id="" placeholder="Nmae" />
              <input className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="" id="" placeholder="Email" />
            </div>
            <div>
              <input className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" name="number" id="" placeholder="phone number" />
            </div>
            <div>
            <textarea className="w-full p-4 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" name="message" id="" placeholder="Message"></textarea>
            </div>
            <input className="p-3 font-medium bg-[#1b8ddd] rounded hover:bg-[#535661] text-white" type="submit" value="Send Message" />
          </form>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;