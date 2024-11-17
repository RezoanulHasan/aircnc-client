import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const updates = [
  {
    icon: <AiOutlineTwitter className="text-blue-400 text-4xl" />,
    title: "Weekly Tips & Tricks",
    description:
      "Get valuable insights and practical tips to improve your experience every week!",
  },
  {
    icon: <AiFillInstagram className="text-pink-500 text-4xl" />,
    title: "Exclusive Discounts",
    description:
      "Follow us for special offers and promotions that you won’t find anywhere else.",
  },
  {
    icon: <AiOutlineFacebook className="text-blue-600 text-4xl" />,
    title: "Feature Updates",
    description:
      "Stay informed about the latest updates to our services and features.",
  },
  {
    icon: <FaTiktok className="text-black text-4xl" />,
    title: "Fun Contests",
    description:
      "Participate in exciting contests and win amazing prizes on our socials!",
  },
];

const SocialMediaUpdates = () => {
  return (
    <section
      className="py-10 bg-cover bg-center bg-no-repeat rounded-xl"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1730801477851-abbfe1873fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNjJ8fHxlbnwwfHx8fHw%3D')",
      }}
    >
      <div className="text-center mb-8 bg-white bg-opacity-70 p-4 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">
          {" "}
          Social Media Updates
        </h2>
        <p className="text-gray-600 mt-2 font-semibold">
          Stay updated with our latest news and offers on social media!
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {updates.map((update, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4">
              {update.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {update.title}
            </h3>
            <p className="text-gray-600 mt-2">{update.description}</p>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 via-transparent to-rose-100 opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaUpdates;
