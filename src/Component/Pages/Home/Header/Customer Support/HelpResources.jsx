import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaVideo, FaQuestionCircle } from "react-icons/fa";

const resources = [
  {
    title: "User Guide",
    description: "Learn how to use our platform with detailed instructions.",
    icon: <FaBook className="text-blue-600 text-4xl" />,
    link: "/policy",
  },
  {
    title: "Tutorial Videos",
    description: "Watch step-by-step videos to master our features.",
    icon: <FaVideo className="text-green-600 text-4xl" />,
    link: "",
  },
  {
    title: "FAQs",
    description: "Find quick answers to the most common questions.",
    icon: <FaQuestionCircle className="text-yellow-600 text-4xl" />,
    link: "/aboutMore",
  },
];

const HelpResources = () => {
  return (
    <section
      className="py-10 bg-cover bg-center bg-no-repeat  rounded-lg"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1725714834412-7d7154ac4e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D')",
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-black">Help Resources</h2>
        <p className="text-gray-600 mt-2 font-semibold">
          Explore our helpful resources to get the most out of our service
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-4 text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className="mb-2">{resource.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {resource.title}
            </h3>
            {/* Description */}

            {/* Link */}
            <a
              href={resource.link}
              className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors duration-300"
            >
              Learn More
            </a>
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-transparent to-green-200 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HelpResources;
