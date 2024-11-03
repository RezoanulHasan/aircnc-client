import React from "react";
import { FaStar } from "react-icons/fa"; // Importing the star icon from react-icons

const OverAllRating = () => {
  const ratings = [
    { label: "Cleanliness", rating: 5.0 },
    { label: "Accuracy", rating: 5.0 },
    { label: "Check-in", rating: 5.0 },
    { label: "Communication", rating: 4.9 },
    { label: "Location", rating: 4.9 },
    { label: "Value", rating: 4.8 },
  ];

  return (
    <div
      className="p-6 space-y-6 mt-5"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      {/* Overall Rating */}
      <div className="text-center">
        <h2 className="text-4xl text-gradient font-semibold">Guest Favorite</h2>
        <p className="text-gray-500">
          One of the most loved homes on Aircnc based on ratings, reviews, and
          reliability.
        </p>
        <p className="text-xl font-medium mt-2">
          Rated 4.94 out of 5 from 428 reviews
        </p>
      </div>

      {/* Detailed Ratings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4    ">
        {ratings?.map((item, index) => (
          <div
            key={index}
            className="flex border-2 border-red-700  justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
          >
            <span className="text-lg font-medium">{item.label}</span>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">{item.rating}</span>
              <FaStar className="text-yellow-500" /> {/* Star icon */}
            </div>
          </div>
        ))}
      </div>

      {/* Star Breakdown */}
      <div className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Overall Rating</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>5 stars, 96% of reviews</span>
            <FaStar className="text-yellow-500" />
          </li>
          <li className="flex justify-between items-center">
            <span>4 stars, 3% of reviews</span>
            <FaStar className="text-yellow-500" />
          </li>
          <li className="flex justify-between items-center">
            <span>3 stars, 1% of reviews</span>
            <FaStar className="text-yellow-500" />
          </li>
          <li className="flex justify-between items-center">
            <span>2 stars, 0% of reviews</span>
            <FaStar className="text-yellow-500" />
          </li>
          <li className="flex justify-between items-center">
            <span>1 star, 0% of reviews</span>
            <FaStar className="text-yellow-500" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverAllRating;
