import { Wave } from "react-animated-text";

const Search = () => {
  return (
    <div className="hidden md:block border-[1px] w-full md:w-auto py-2 rounded-full shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer bg-gradient-to-r from-white to-rose-100">
      <div className="flex flex-row items-center gap-3 px-4 ">
        {/* Container with some padding and spacing */}
        <div className="p-3 font-bold text-2xl text-rose-600 flex items-center">
          {/* More prominent text and color */}
          <Wave
            text="Welcome, T'o AirCNC"
            effect="stretch"
            effectChange={2}
            effectDirection="up"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
