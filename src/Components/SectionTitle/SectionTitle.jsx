

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center my-8">
            <p className="text-blue-500 text-xl font-medium mb-6">{heading}</p>
            <h1 className="text-4xl font-bold">{subheading}</h1>
        </div>
    );
};

export default SectionTitle;