import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/b-1.jpg'
import bannerImg2 from '../../../assets/b-2.jpg'
import bannerImg3 from '../../../assets/b-3.jpg'
import bannerImg4 from '../../../assets/b-4.jpg'
import bannerImg5 from '../../../assets/b-5.jpg'
import bannerImg6 from '../../../assets/b-6.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div className="w-full h-full flex justify-center items-center">
                <img src={bannerImg2} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
                    <h1 className="text-2xl lg:text-5xl text-white font-bold text-center mb-4 lg:w-1/2">Exh1lore Your Journey: Your Ultimate Tourist Guide for Adventure!</h1>
                    <div className="text-white text-center lg:w-1/2 font-medium"> 
                    <p className=" lg:text-base text-sm leading-relaxed">Embark on an unforgettable journey with our comprehensive tourist guide. Discover hidden gems, iconic landmarks, and cultural delights as you navigate through your dream destinations. Let our guide be your compass to an enriching and fulfilling travel experience.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img src={bannerImg1} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
                    <h1 className="text-2xl lg:text-5xl text-white font-bold text-center mb-4 lg:w-1/2">Exh1lore Your Journey: Your Ultimate Tourist Guide for Adventure!</h1>
                    <div className="text-white text-center lg:w-1/2 font-medium"> 
                    <p className=" lg:text-base text-sm leading-relaxed">Embark on an unforgettable journey with our comprehensive tourist guide. Discover hidden gems, iconic landmarks, and cultural delights as you navigate through your dream destinations. Let our guide be your compass to an enriching and fulfilling travel experience.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img src={bannerImg3} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
                    <h1 className="text-2xl lg:text-5xl text-white font-bold text-center mb-4 lg:w-1/2">Exh1lore Your Journey: Your Ultimate Tourist Guide for Adventure!</h1>
                    <div className="text-white text-center lg:w-1/2 font-medium"> 
                    <p className=" lg:text-base text-sm leading-relaxed">Embark on an unforgettable journey with our comprehensive tourist guide. Discover hidden gems, iconic landmarks, and cultural delights as you navigate through your dream destinations. Let our guide be your compass to an enriching and fulfilling travel experience.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img src={bannerImg4} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
                    <h1 className="text-2xl lg:text-5xl text-white font-bold text-center mb-4 lg:w-1/2">Exh1lore Your Journey: Your Ultimate Tourist Guide for Adventure!</h1>
                    <div className="text-white text-center lg:w-1/2 font-medium"> 
                    <p className=" lg:text-base text-sm leading-relaxed">Embark on an unforgettable journey with our comprehensive tourist guide. Discover hidden gems, iconic landmarks, and cultural delights as you navigate through your dream destinations. Let our guide be your compass to an enriching and fulfilling travel experience.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img src={bannerImg5} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
                    <h1 className="text-2xl lg:text-5xl text-white font-bold text-center mb-4 lg:w-1/2">Exh1lore Your Journey: Your Ultimate Tourist Guide for Adventure!</h1>
                    <div className="text-white text-center lg:w-1/2 font-medium"> 
                    <p className=" lg:text-base text-sm leading-relaxed">Embark on an unforgettable journey with our comprehensive tourist guide. Discover hidden gems, iconic landmarks, and cultural delights as you navigate through your dream destinations. Let our guide be your compass to an enriching and fulfilling travel experience.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img src={bannerImg6} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
                    <h1 className="text-2xl lg:text-5xl text-white font-bold text-center mb-4 lg:w-1/2">Exh1lore Your Journey: Your Ultimate Tourist Guide for Adventure!</h1>
                    <div className="text-white text-center lg:w-1/2 font-medium"> 
                    <p className=" lg:text-base text-sm leading-relaxed">Embark on an unforgettable journey with our comprehensive tourist guide. Discover hidden gems, iconic landmarks, and cultural delights as you navigate through your dream destinations. Let our guide be your compass to an enriching and fulfilling travel experience.</p>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;
