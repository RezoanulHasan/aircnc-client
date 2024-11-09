import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const ads = [
  {
    type: "card",
    icon: <FaShoppingCart className="text-3xl text-red-600" />,
    title: "New Arrivals",
    description: "Discover the latest trends in our collection.",
    buttonText: "Explore",
    link: "/filters",
  },
];

const NewArrivals = () => {
  return (
    <div className="">
      {ads
        .filter((ad) => ad.type === "card")
        .map((ad, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div>{ad.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{ad.title}</h3>
            <p className="text-gray-600 mt-2">{ad.description}</p>
            <a
              href={ad.link}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              {ad.buttonText}
            </a>
          </motion.div>
        ))}
    </div>
  );
};

export default NewArrivals;
