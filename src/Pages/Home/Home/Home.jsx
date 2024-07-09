import Banner from "../Banner/Banner";
import BestTravel from "../BestTravel/BestTravel";
import TravelDistination from "../Travel-with/TravelDistination";
import HomeAbout from "../homeAbout/HomeAbout";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TravelDistination></TravelDistination>
            <HomeAbout></HomeAbout>
            <BestTravel></BestTravel>
        </div>
    );
};

export default Home;