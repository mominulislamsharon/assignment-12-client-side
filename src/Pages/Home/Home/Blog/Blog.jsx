import CoverBanner from "../../../../Shared/CoverBanner/CoverBanner";


const Blog = () => {
  return (
    <div className="mb-12">
      <CoverBanner imgs={"https://plus.unsplash.com/premium_photo-1664472706956-42f42184f7a9?"} title="Our Blogs"></CoverBanner>
      <div className="md:mt-24 flex flex-col md:flex-row gap-8 max-w-screen-xl mx-auto">
      <div className=" w-full grid lg:grid-cols-2 lg:gap-4 ">
      <div className="my-4 ">
      <div className="card bg-base-100   ">
  <figure className="h-[200px]">
    <img className="lg:h-[300px] object-contain "
      src="https://plus.unsplash.com/premium_photo-1664298656979-4954e3a95b90?"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-blue-300 bg-opacity-50">
    <h2 className="card-title  text-3xl font-bold text-blue-700">
    Best Enjoy Couple Travelling Tips & Trick
    </h2>
    <p className="border-b-2 pb-4 text-xl lg:text-lg py-6 border-blue-400">Discover the best tips and tricks for couples traveling together. Enhance your journeys with practical advice on planning, packing, and enjoying memorable adventures side by side.</p>
    <div className="card-actions  pt-6">
      <div className="  -outline md:text-xl text-lg">January 20, 2023</div>
      <div className=" -outline md:text-xl text-lg">No Comments</div>
    </div>
  </div>
</div>
      </div>
      <div className="my-4">
      <div className="card bg-base-100  ">
  <figure className="h-[200px]">
    <img className="lg:h-[300px] object-contain"
      src="https://plus.unsplash.com/premium_photo-1664476973752-7bab7aec0dc5?q=80&w=2070&"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-blue-300 bg-opacity-50">
    <h2 className="card-title text-3xl font-bold text-blue-700">
    How To Prepare Your First Nature Travel
    </h2>
    <p className="border-b-2 pb-4 text-xl lg:text-lg py-6 border-blue-400">Get ready for your first nature travel adventure with our quick guide. Learn how to plan, pack, and prepare for an unforgettable outdoor experience.</p>
    <div className="card-actions pt-6">
      <div className=" -outline md:text-xl text-lg">November 24, 2023</div>
      <div className=" -outline md:text-xl text-lg">No Comments</div>
    </div>
  </div>
</div>
      </div>
      <div className="my-4">
      <div className="card bg-base-100  ">
  <figure className="h-[200px]">
    <img className="lg:h-[300px] object-contain"
      src="https://images.unsplash.com/photo-1498576260462-eefc9d0ce9f7?"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-blue-300 bg-opacity-50">
    <h2 className="card-title text-3xl font-bold text-blue-700">
    Mountain Travelling Tips & Trick For Personal
    </h2>
    <p className="border-b-2 pb-4 text-xl lg:text-lg py-6 border-blue-400">Get the most out of your mountain travels with essential tips and tricks. Learn how to prepare, stay safe, and make the most of your solo adventure in the mountains.</p>
    <div className="card-actions pt-6">
      <div className=" -outline md:text-xl text-lg">February 20, 2023</div>
      <div className=" -outline md:text-xl text-lg">No Comments</div>
    </div>
  </div>
</div>
      </div>
      <div className="my-4">
      <div className="card bg-base-100 ">
  <figure className="h-[200px]">
    <img className="lg:h-[300px] object-contain"
      src="https://plus.unsplash.com/premium_photo-1661810803959-f91f5195138e?"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-blue-300 bg-opacity-50">
    <h2 className="card-title text-3xl font-bold text-blue-700">
    Private Hiking For Woman Safety & Easy
    </h2>
    <p className="border-b-2 pb-4 text-xl lg:text-lg py-6 border-blue-400">Stay safe and confident on your solo hikes with our essential tips for women. Discover practical advice for secure and easy private hiking adventures.</p>
    <div className="card-actions pt-6">
      <div className=" -outline md:text-xl text-lg">October 10, 2023</div>
      <div className=" -outline md:text-xl text-lg">No Comments</div>
    </div>
  </div>
</div>
      </div>
      <button className="font-medium border hover:bg-blue-300 hover:text-white text-center border-blue-200 w-32 text-lg">Load More</button>
      </div>
      <div>
        <div className="mt-4">
        <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow " placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
        </div>
      <div className="mt-8">
      <h1 className="text-4xl font-bold">Featured Post</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mt-8 w-full h-full ">
          <img className="md:w-[350px]   object-contain w-full " src="https://plus.unsplash.com/premium_photo-1664298656979-4954e3a95b90?" alt="" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold">Best Enjoy Couple Travelling Tips & Trick</h1>
          <div className="  -outline text-lg">January 20, 2023</div>
      <div className=" -outline text-lg">No Comments</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mt-8 w-full h-full ">
          <img className="md:w-[350px] object-contain w-full " src="https://plus.unsplash.com/premium_photo-1664476973752-7bab7aec0dc5?q=80&w=2070&" alt="" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold">How To Prepare Your First Nature Travel</h1>
          <div className="  -outline text-lg">November 24, 2023</div>
      <div className=" -outline text-lg">No Comments</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mt-8 w-full h-full ">
          <img className="md:w-[350px]   object-contain w-full " src="https://images.unsplash.com/photo-1498576260462-eefc9d0ce9f7?" alt="" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold">Mountain Travelling Tips & Trick For Personal</h1>
          <div className="  -outline text-lg">February 20, 2023</div>
      <div className=" -outline text-lg">No Comments</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mt-8 w-full h-full ">
          <img className="md:w-[350px]   object-contain w-full " src="https://plus.unsplash.com/premium_photo-1661810803959-f91f5195138e?" alt="" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold">Private Hiking For Woman Safety & Easy</h1>
          <div className="  -outline text-lg">October 10, 2023</div>
      <div className=" -outline text-lg">No Comments</div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Categories</h1>
        <div className="grid md:grid-cols-2 gap-4 pt-6">
        <div
  className="hero w-full md:w-[280px]  h-[150px]"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1504827274833-7db1774520e3?)",
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Adventure</h1>
    </div>
  </div>
</div>
        <div
  className="hero  w-full md:w-[280px] h-[150px] md:ml-4"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1498576260462-eefc9d0ce9f7?)",
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Mountain</h1>
    </div>
  </div>
</div>
        <div
  className="hero w-full  md:w-[280px] h-[150px]"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1551524559-8af4e6624178?)",
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Enjoy</h1>
    </div>
  </div>
</div>
        <div
  className="hero w-full md:w-[280px] h-[150px] md:ml-4"
  style={{ 
    backgroundImage: "url(https://images.unsplash.com/photo-1570701593020-c7932b6c8338?)",
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">DownTown</h1>
    </div>
  </div>
</div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Blog;