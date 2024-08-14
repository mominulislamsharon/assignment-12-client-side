import { Helmet } from "react-helmet-async";
import CoverBanner from "../../../Shared/CoverBanner/CoverBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import TourCard from "../../../Components/TourCard/TourCard";
import UseMenu from "../../../Hooks/UseMenu";

const OurPackages = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const[popularTours] = UseMenu();
  const adventuretours = popularTours.filter(tour => tour.category === 'Adventure Tours');
const grouptours = popularTours.filter(tour => tour.category === 'Group Tours');
const coupletours = popularTours.filter(tour => tour.category === 'Couple Tours');
const citytours = popularTours.filter(tour => tour.category === 'City Tours');
const beachtours = popularTours.filter(tour => tour.category === 'Beach_Holidays');
const hostedtours  = popularTours.filter(tour => tour.category === 'Hosted Tours');


  return (
    <div>
      <Helmet>
        <title>Final Tour - Packages</title>
      </Helmet>
      <CoverBanner
        imgs={
          "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?"
        }
        title="Our Packages"
        description="Discover the world with our curated travel packages. Whether you seek adventure, relaxation, or cultural experiences, our tour offer seamless planning and expert guides. Book your perfect vacation today."
      ></CoverBanner>
      <Tabs className="text-blue-500  font-medium mt-16 max-w-screen-xl mx-auto" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Adventure Tours</Tab>
          <Tab>Group Tours</Tab>
          <Tab>Couple Tours</Tab>
          <Tab>City Tours</Tab>
          <Tab>Beach Holidays</Tab>
          <Tab>Hosted Tours</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
          {
            adventuretours.map(tour => <TourCard
            key={tour._id}
            tour={tour}
            ></TourCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
          {
            grouptours.map(tour => <TourCard
            key={tour._id}
            tour={tour}
            ></TourCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center ">
          {
            coupletours.map(tour => <TourCard
            key={tour._id}
            tour={tour}
            ></TourCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center ">
          {
            citytours.map(tour => <TourCard
            key={tour._id}
            tour={tour}
            ></TourCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center ">
          {
            beachtours.map(tour => <TourCard
            key={tour._id}
            tour={tour}
            ></TourCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center items-center">
          {
            hostedtours.map(tour => <TourCard
            key={tour._id}
            tour={tour}
            ></TourCard>)
          }
          </div>
        </TabPanel>
      
      </Tabs>
    </div>
  );
};

export default OurPackages;
