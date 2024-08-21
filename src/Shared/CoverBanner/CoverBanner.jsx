

const CoverBanner = ({imgs, title, description}) => {
  return (
    <div
  className="hero h-[500px] bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 254, 0.2), rgba(0, 0, 254, 0.2)), url("${imgs}")`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold">{title}</h1>
      <p className="mb-5 pt-4 text-xl font-medium text-blue-300">
      {description}
      </p>
    </div>
  </div>
</div>
  );
};

export default CoverBanner;