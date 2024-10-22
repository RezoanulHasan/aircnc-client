import React from "react";
import {
  FaHome,
  FaBath,
  FaSwimmer,
  FaArrowAltCircleRight,
  FaUndoAlt,
} from "react-icons/fa"; // Importing icons

const facilityData = [
  {
    icon: <FaHome className="text-indigo-600 text-6xl" />,
    title: "Room in a townhouse",
    description: "Your own room in a home, plus access to shared spaces.",
  },
  {
    icon: <FaBath className="text-blue-600 text-6xl" />,
    title: "Dedicated bathroom",
    description: "This place has a bathroom that’s just for you.",
  },
  {
    icon: <FaSwimmer className="text-teal-600 text-6xl" />,
    title: "Swimming Pool",
    description: "You can enjoy swimming at any time.",
  },
  {
    icon: <FaArrowAltCircleRight className="text-green-600 text-6xl" />,
    title: "Shared common spaces",
    description:
      "You'll share parts of the home with the Host and other guests.",
  },
  {
    icon: <FaUndoAlt className="text-red-600 text-6xl" />,
    title: "Free cancellation before time up",
    description: "Get a full refund if you change your mind.",
  },
];

const FacilitiesMore = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-4">
      {/* Left Side: Facilities List */}
      <div className="w-full lg:w-1/2 p-6">
        <div className="space-y-6">
          {facilityData.map((facility, index) => (
            <div key={index} className="flex items-center space-x-4">
              {facility.icon}
              <div>
                <p className="font-semibold text-lg text-gray-800">
                  {facility.title}
                </p>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: VSCode Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
        <img
          src="https://www.cultbooking.com/wp-content/uploads/2019/03/laptop.png"
          alt="VSCode Illustration"
          className="w-full h-auto max-w-xs lg:max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default FacilitiesMore;
