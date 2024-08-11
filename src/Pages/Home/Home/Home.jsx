import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BestTravel from "../BestTravel/BestTravel";
import Feature from "../Feature/Feature";
import PopularAdvancer from "../PopularAdvacer/PopularAdvancer";
import Reviews from "../Reviews/Reviews";
import TravelDistination from "../Travel-with/TravelDistination";
import HomeAbout from "../homeAbout/HomeAbout";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Final Tour - Home</title>
      </Helmet>
      <Banner></Banner>
      <TravelDistination></TravelDistination>
      <HomeAbout></HomeAbout>
      <BestTravel></BestTravel>
      <PopularAdvancer></PopularAdvancer>
      <Feature></Feature>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
