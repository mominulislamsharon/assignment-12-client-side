import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="text-3xl my-24 max-w-screen-xl mx-auto">
        <SectionTitle
          heading={"REVIEW & TESTIMONIALS"}
          subheading={"Top Reviews for Travio"}
        ></SectionTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 1500, 
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3, 
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2, 
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1, 
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" flex flex-col items-center justify-center bg-blue-300 bg-opacity-30 shadow-lg rounded-lg p-8">
                <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                <p className=" pt-5 text-xl">{review.details}</p>
                <h1 className="text-xl py-6 font-bold">{review.name}</h1>
                <p className="text-base font-medium">Traveler</p>
                <div className="mt-8">
                <img className="rounded-full w-24 h-24 object-cover" src={review.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
