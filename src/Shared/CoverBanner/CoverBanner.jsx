

const CoverBanner = ({imgs, title}) => {
  return (
    <div
  className="hero h-[500px] "
  style={{
    backgroundImage: `url("${imgs}")
  `}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold">{title}</h1>
      <p className="mb-5 text-xl font-medium text-blue-300">
      Explore our blog for quick insights, helpful tips, and fresh ideas across various topics. Dive in and discover something new today!
      </p>
    </div>
  </div>
</div>
  );
};

export default CoverBanner;