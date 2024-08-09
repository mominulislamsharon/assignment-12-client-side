import './Feature.css'

const Feature = () => {
  return (
    <div className='mb-4'>
        <p className='text-4xl mt-24 font-bold text-center'>Our Reservation Procedure</p>
      <div className='mt-6 flex flex-col items-center md:flex-row md:justify-evenly'>
        <div className=' my-4 md:w-[350px] h-[180px] md:h-[160px] shadow-lg bg-blue-200 bg-opacity-40 p-3 text-center'>
          <h1 className='text-2xl py-2 font-bold '>Make Online Appointment</h1>
          <p className='text-xl text-gray-500'>Easily schedule appointments online, reducing hassle and improving customer convenience.</p>
        </div>
        <div className=' md:w-[350px] h-[180px] md:h-[160px] bord shadow-lg bg-blue-200 bg-opacity-40 p-3 text-center'>
          <h1 className='text-2xl py-2 font-bold '>Confirmation Date</h1>
          <p className='text-xl text-gray-500'> The finalized date when your appointment or reservation is confirmed.</p>
        </div>
        <div className='my-4 md:w-[350px] h-[180px] md:h-[160px] bord shadow-lg bg-blue-200 bg-opacity-40 p-3 text-center'>
          <h1 className='text-2xl py-2 font-bold '>Happy Travelling</h1>
          <p className='text-xl text-gray-500'>Enjoy your journey with excitement, comfort, and unforgettable experiences. Safe travels!</p>
        </div>
      </div>
      <div className="feture-item flex justify-center items-center min-h-screen">
        <h1 className='text-6xl pt-24 font-bold text-white'>Explore Your Travel</h1>
      </div>
    </div>
  );
};

export default Feature;