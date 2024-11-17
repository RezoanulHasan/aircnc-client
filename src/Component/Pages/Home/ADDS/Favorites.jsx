import React, { Component } from "react";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";

const ads = [
  {
    type: "highlight",
    icon: <AiFillHeart className="text-4xl text-red-500" />,
    title: "Customer Favorites",
    description:
      "Top-rated items chosen by your,who is our  valued customers. Discover what's trending and enjoy popular picks that cater to every taste and style! From luxurious stays to exceptional amenities, these selections promise unforgettable experiences. Whether planning a weekend escape or a special celebration, these favorites are designed to impress. Explore now and find the perfect choice that meets all your expectations!",
    link: "/favorite",
  },
];

class Favorites extends Component {
  render() {
    return (
      <div className="mt-10 mb-2">
        <div className="gap-6" data-aos="zoom-in" data-aos-duration="1500">
          {ads
            .filter((ad) => ad.type === "highlight")
            .map((ad, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-tr from-white to-gray-50 rounded-xl shadow-xl p-6 flex flex-col md:flex-row items-start hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon Section */}
                <div className="mr-8 mb-4 md:mb-0 flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gradient-to-b from-red-100 to-red-200 rounded-full shadow-md">
                  {ad.icon}
                </div>
                {/* Content Section */}
                <div className="flex-grow">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    {ad.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {ad.description}
                  </p>
                </div>

                {/* Highlight Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-300 via-transparent to-blue-300 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                {/* Button Section */}
                <div className="mt-32">
                  <a
                    href={ad.link}
                    className="inline-block text-lg font-medium text-white bg-red-500 px-6 py-2 rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300"
                  >
                    More
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
