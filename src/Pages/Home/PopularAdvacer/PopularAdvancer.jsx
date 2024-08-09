import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Top3Tour from "../Top3Tour/Top3Tour";


const PopularAdvancer = () => {
  const [popularTours, setPopularTours] = useState([]);
  useEffect(() =>{
    fetch("menu.json")
    .then(res => res.json())
    .then(data => {
      const top3Tours = data.sort((a, b) => b.price - a.price).slice(0, 3);
      setPopularTours(top3Tours);
    })
    .catch((error) => {
      console.log(error);
    })
  },[]);
  return (
    <div>
      <section className="text-4xl">
      <SectionTitle
      heading="MODERN & BEAUTIFUL"
      subheading="Our Most Popular Adventures"
      >
      </SectionTitle>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {
          popularTours.map(tour => <Top3Tour
          key={tour.id}
          tour={tour}
          ></Top3Tour>)
        }
      </div>
      </section>
    </div>
  );
};

export default PopularAdvancer;