import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaEye, FaHistory, FaUsers } from "react-icons/fa";

const AboutMoreData = [
  {
    year: "2030",
    title: "Mission",
    description:
      "Aircnc aims to revolutionize the travel industry by offering a seamless and personalized booking experience for luxurious and affordable hotel rooms worldwide. We are committed to connecting travelers with top-notch facilities that cater to their comfort, convenience, and affordability.",
    icon: <FaRocket className="text-red-500" aria-label="Mission Icon" />,
  },
  {
    year: "2025",
    title: "Vision",
    description:
      "Our vision is to be the world's leading platform for booking hotels that offer both luxury and affordability. We aim to provide travelers with the most flexible, enjoyable, and value-driven experiences in the global travel industry.",
    icon: <FaEye className="text-blue-500" aria-label="Vision Icon" />,
  },
  {
    year: "2020",
    title: "History",
    description:
      "Aircnc was founded in 2020 with the goal of disrupting the travel booking market. By offering a blend of luxury, affordability, and convenience, we quickly became a popular platform for travelers seeking top-tier services at a lower cost.",
    icon: <FaHistory className="text-green-500" aria-label="History Icon" />,
  },
  {
    year: "Target Audience",
    title: "Target Audience",
    description:
      "Aircnc's target audience includes luxury travelers, budget-conscious explorers, and business professionals looking for comfortable stays. We aim to serve customers with a variety of hotel options that fit their needs and preferences.",
    icon: (
      <FaUsers className="text-purple-500" aria-label="Target Audience Icon" />
    ),
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutMore = () => {
  return (
    <div className="container mx-auto py-8">
      <motion.div className="flex flex-wrap justify-center">
        {AboutMoreData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full md:w-1/2 p-4 flex"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }} // Animates items with a stagger effect
          >
            <motion.div
              className="flex-shrink-0 p-4 text-6xl rounded-full mx-10"
              whileHover={{ rotate: 360 }} // Rotate icon on hover
              transition={{ duration: 0.6 }}
            >
              {item.icon}
            </motion.div>
            <div className="flex-1">
              <motion.time
                className="text-2xl font-semibold text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.year}
              </motion.time>
              <motion.h3
                className="text-xl font-semibold text-rose-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMore;
