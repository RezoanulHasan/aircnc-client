const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-red-600   font-bold text-xl mb-2">{subHeading}</p>
      <h3 className="text-3xl uppercase border-y-4 py-4 font-semibold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
