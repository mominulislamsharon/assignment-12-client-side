import Banner from "../Banner/Banner";
import BestTravel from "../BestTravel/BestTravel";
import PopularAdvancer from "../PopularAdvacer/PopularAdvancer";
import TravelDistination from "../Travel-with/TravelDistination";
import HomeAbout from "../homeAbout/HomeAbout";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TravelDistination></TravelDistination>
            <HomeAbout></HomeAbout>
            <BestTravel></BestTravel>
            <PopularAdvancer></PopularAdvancer>
        </div>
    );
};

export default Home;