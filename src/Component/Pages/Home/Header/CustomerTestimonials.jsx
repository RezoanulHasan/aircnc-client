import React, { useEffect } from "react";
import { FaThumbsUp, FaHeart, FaStar } from "react-icons/fa";
import Review from "../Review/Review";
import useTitle from "../../../../Hooks/useTitle";
import Header from "./Header";
import RecommendedPlaces from "../../Rooms/RecommendedPlaces";

const CustomerTestimonials = () => {
  useTitle("Customer Reviews");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testimonials = [
    {
      name: "Alok Jon",
      feedback: "Great service! They resolved my issue quickly.",
      rating: 5,
      like: 10,
      love: 5,
    },
    {
      name: "Jony Smith",
      feedback: "The team is very helpful and responsive.",
      rating: 4,
      like: 8,
      love: 3,
    },
    {
      name: "Kaste Wilson",
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
    {
      name: "Chris Evans",
      feedback: "Absolutely loved the experience. Superb team!",
      rating: 5,
      like: 18,
      love: 9,
    },
    {
      name: "Sophia Turner",
      feedback: "They went above and beyond to help me out!",
      rating: 4,
      like: 10,
      love: 4,
    },
    {
      name: "Liam Walker",
      feedback: "Highly satisfied, will definitely recommend!",
      rating: 5,
      like: 25,
      love: 15,
    },
  ];

  return (
    <>
      <Header></Header>

      <div className="container mx-auto p-8 mt-10">
        <h2 className="text-5xl font-bold  mb-8 text-center text-gradient">
          Hear What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          We pride ourselves on providing exceptional service and customer
          satisfaction. Our clients' feedback speaks for itself, highlighting
          the dedication and care we put into every interaction. Read below to
          see why people love working with us and how we've helped them achieve
          their goals.
        </p>

        <Review></Review>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-lg shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-yellow-400 flex items-center">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="mr-1" />
                    ))}
                </p>
              </div>
              <p className="text-gray-700 italic text-lg mt-4">
                "{item.feedback}"
              </p>
              <div className="flex justify-end space-x-4 mt-4">
                <div className="flex items-center">
                  <FaThumbsUp className="text-indigo-500 hover:text-indigo-700 transition-colors" />
                  <span className="ml-1 text-gray-800">{item.like}M</span>
                </div>
                <div className="flex items-center">
                  <FaHeart className="text-red-500 hover:text-red-700 transition-colors" />
                  <span className="ml-1 text-gray-800">{item.love}k</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RecommendedPlaces></RecommendedPlaces>
    </>
  );
};

export default CustomerTestimonials;
