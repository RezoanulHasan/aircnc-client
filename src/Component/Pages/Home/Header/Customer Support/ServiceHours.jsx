import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";

const serviceHours = [
  {
    day: "Monday to Friday",
    hours: "9 AM - 5 PM",
    icon: <FaClock className="text-blue-500 text-4xl" />,
  },
  {
    day: "Saturday",
    hours: "10 AM - 2 PM",
    icon: <FaRegCalendarAlt className="text-green-500 text-4xl" />,
  },
  {
    day: "Sunday",
    hours: "Closed",
    icon: <FaClock className="text-red-500 text-4xl" />,
  },
];

const ServiceHours = () => {
  return (
    <section className="py-10 bg-custom bg- rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white">Service Hours</h2>
        <p className="text-white mt-2 font-semibold">
          Our customer support is available during the following time
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6">
        {serviceHours.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-5 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>
            {/* Day */}
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {service.day}
            </h3>
            {/* Hours */}
            <p
              className={`mt-2 ${
                service.hours === "Closed" ? "text-red-500" : "text-gray-600"
              } text-sm `}
            >
              {service.hours}
            </p>
            {/* Decorative Gradient */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 via-transparent to-green-300 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHours;
