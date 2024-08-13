import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Top3Tour from "../Top3Tour/Top3Tour";
import UseMenu from "../../../Hooks/UseMenu";


const PopularAdvancer = () => {
  const [popularTours] = UseMenu();
  const top3Tours = popularTours.sort((a, b) => b.price - a.price).slice(0, 3);
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
          top3Tours.map(tour => <Top3Tour
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