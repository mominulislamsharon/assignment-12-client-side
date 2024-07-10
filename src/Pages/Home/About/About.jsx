import { FaQuoteLeft } from "react-icons/fa";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-[500px] w-full object-cover object-center"
          src="https://images.pexels.com/photos/842155/pexels-photo-842155.jpeg?"
          alt=""
        />
        <div className="absolute text-white top-40 left-20 ">
          <h1 className="text-4xl my-8 font-bold">
            About <span className="text-orange-400">Us</span>
          </h1>
          <FaQuoteLeft className="text-3xl text-slate-400" />
          <p className="text-xl pt-6 text-blue-300 font-medium">
            Our travel agency specializes in crafting unforgettable journeys.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mt-24 gap-12 p-4">
        <div>
          <img
            className="mt-10 h-auto lg:h-[450px] w-full lg:w-[900px] rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?"
            alt=""
          />
        </div>
        <div>
          <button className="bg-[#1b8ddd] text-white font-bold p-3 rounded-md">
            About Us
          </button>
          <h2 className="text-2xl lg:text-4xl font-bold pt-8">
            Travelling More Easy With Our Guide Team & Our Travel Service Agency
          </h2>
          <p className="font-medium pt-8 text-slate-500">
            Our travel agency offers unforgettable experiences. We provide
            comprehensive travel planning with tour packages, hotel bookings,
            and visa assistance to various destinations. Travel your dream
            journey with us.
          </p>
          <div className="bg-slate-100 mt-4 p-6 lg:p-10 rounded-md">
            <FaQuoteLeft className="text-2xl lg:text-3xl text-slate-400" />
            <p className="pt-4 lg:pt-8 font-medium">
              Our travel agency specializes in crafting unforgettable journeys.
              We offer a comprehensive range of services, including personalized
              tour packages, hotel reservations, flight bookings, and visa
              assistance to numerous destinations worldwide. Trust us to handle
              every detail, ensuring a seamless and stress-free travel
              experience. Embark on your dream adventures with confidence and
              ease.
            </p>
            <h1 className="text-lg lg:text-xl pt-2 lg:pt-4 font-bold text-orange-400">
              Libara
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-bold">Our Team</h1>
          <p className="font-medium pt-2 lg:pt-4 text-slate-400">
            We have a team of professionals, dedicated to providing excellent
            service to ensure the enjoyment of your vacation.
          </p>
        </div>
        <div className="mt-8 mb-6 flex justify-center">
          <div className="w-full max-w-screen-lg">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="h-[400px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[400px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[400px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[400px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[400px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div>
        <div className="relative mb-2 lg:mb-4">
          <img
            className=" w-full h-[600px] object-cover object-center"
            src="https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="absolute bg-[#1a1e2c] bg-opacity-45 w-full lg:w-[900px] h-auto lg:h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-6">
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="text-center">
                  <FaQuoteLeft className="text-2xl lg:text-3xl text-slate-400 mx-auto" />
                  <h1 className="text-xl lg:text-2xl text-white mt-4">
                    Best tour agency, excellent vacations
                  </h1>
                  <p className="text-white pt-4">
                    My testimonial is from a customer or client. They are very
                    satisfied with the quality of our service and products.{" "}
                  </p>
                  <img
                    className="h-24 w-24 rounded-full mx-auto mt-4"
                    src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?"
                    alt=""
                  />
                  <h1 className="text-2xl pt-2 lg:pt-4 lg:text-3xl text-white">
                    Libard
                  </h1>
                  <p className="text-orange-400 font-medium pt-2 lg:pt-4">
                    Web Designer
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <FaQuoteLeft className="text-2xl lg:text-3xl text-slate-400 mx-auto" />
                  <h1 className="text-xl lg:text-2xl text-white mt-4">
                    Great experience with the agency
                  </h1>
                  <p className="text-white pt-4">
                    We had an amazing trip, thanks to the well-organized
                    services provided by the agency.
                  </p>
                  <img
                    className="h-24 w-24 rounded-full mx-auto mt-4"
                    src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?"
                    alt=""
                  />
                  <h1 className="text-2xl pt-2 lg:pt-4 lg:text-3xl text-white">
                    Mirack
                  </h1>
                  <p className="text-orange-400 font-medium pt-2 lg:pt-4">
                    Graphic Designer
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <FaQuoteLeft className="text-2xl lg:text-3xl text-slate-400 mx-auto" />
                  <h1 className="text-xl lg:text-2xl text-white mt-4">
                    Highly recommend this agency
                  </h1>
                  <p className="text-white pt-4">
                    The travel agency provided excellent service and made our
                    vacation memorable.
                  </p>
                  <img
                    className="h-24 w-24 rounded-full mx-auto mt-4"
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?"
                    alt=""
                  />
                  <h1 className="text-2xl pt-2 lg:pt-4 lg:text-3xl text-white">
                    Devid
                  </h1>
                  <p className="text-orange-400 font-medium pt-2 lg:pt-4">
                    Artish{" "}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
