

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center my-8">
            <p className="text-blue-500 text-4xl font-bold mb-6">{heading}</p>
            <h1 className=" font-medium mx-auto lg:w-[600px]">{subheading}</h1>
        </div>
    );
};

export default SectionTitle;