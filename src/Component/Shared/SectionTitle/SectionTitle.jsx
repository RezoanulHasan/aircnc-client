const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg            font-bold text-xl mb-2">
        {subHeading}
      </p>
      <h3 className="text-3xl uppercase border-y-4 py-4 font-semibold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
