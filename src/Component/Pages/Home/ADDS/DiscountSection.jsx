import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlane,
  FaPiggyBank,
  FaSuitcaseRolling,
  FaHotel,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaStar,
  FaUserFriends,
  FaClock,
} from "react-icons/fa"; // Import relevant icons
import NewArrivals from "./NewArrivals";

function DiscountSection() {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24  border-t border-b border-gray-300 text-center md:text-left">
      {/* 5-star Rating */}
      <div className="flex justify-center items-center mb-8">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-400 text-2xl md:text-3xl mr-1"
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Section: Text and Icons */}
        <div className="space-y-6 text-gray-800 w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Exclusive Offer: <span className="text-red-500">15% Off</span> Your
            First Booking!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Unlock your discount and enjoy luxurious stays at unbeatable prices.
            This is your chance to explore with AircnC and experience ultimate
            comfort and adventure!
          </p>

          {/* Icons Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-2xl md:text-3xl text-red-500">
            <FaPlane aria-label="Travel Icon" />
            <FaPiggyBank aria-label="Save Money Icon" />
            <FaSuitcaseRolling aria-label="Luggage Icon" />
            <FaHotel aria-label="Hotel Icon" />
            <FaMoneyBillWave aria-label="Bill Icon" />
            <FaMapMarkedAlt aria-label="Map Icon" />
            <FaStar aria-label="Star Icon" />
            <FaUserFriends aria-label="Friends Icon" />
            <FaClock aria-label="Clock Icon" />
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <NewArrivals></NewArrivals>
        </div>
      </div>
    </div>
  );
}

export default DiscountSection;
