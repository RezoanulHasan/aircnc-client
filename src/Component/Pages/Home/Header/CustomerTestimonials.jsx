// CustomerTestimonials.jsx

import React from "react";
import { FaThumbsUp, FaHeart } from "react-icons/fa";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Great service! They resolved my issue quickly.",
      rating: 5,
      like: 10,
      love: 5,
    },
    {
      name: "Jane Smith",
      feedback: "The team is very helpful and responsive.",
      rating: 4,
      like: 8,
      love: 3,
    },
    {
      name: "Sam Wilson",
      feedback: "I appreciate the support I received. Highly recommend!",
      rating: 5,
      like: 15,
      love: 7,
    },
    {
      name: "Alice Brown",
      feedback: "Fantastic experience, will use again!",
      rating: 5,
      like: 12,
      love: 6,
    },
    {
      name: "Mike Johnson",
      feedback: "Quick and reliable service, very satisfied.",
      rating: 4,
      like: 5,
      love: 2,
    },
    {
      name: "Emma Davis",
      feedback: "The support was excellent, thank you!",
      rating: 5,
      like: 20,
      love: 10,
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-10">
      <h2 className="text-4xl font-semibold text-rose-500 mb-4 text-center">
        Customer Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6"
          >
            <p className="text-gray-800 italic text-lg mb-4">
              "{item.feedback}"
            </p>
            <p className="text-gray-700 text-right font-semibold">
              - {item.name}
            </p>
            <p className="text-yellow-500">Rating: {item.rating} ⭐</p>
            <div className="flex justify-end space-x-4 mt-4">
              <div className="flex items-center">
                <FaThumbsUp className="text-indigo-500 hover:text-indigo-700 transition-colors" />
                <span className="ml-1 text-gray-700">{item.like}M</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="text-red-500 hover:text-red-700 transition-colors" />
                <span className="ml-1 text-gray-700">{item.love}k</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
