import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  {
    type: "Call Us",
    icon: <FaPhoneAlt className="text-blue-600 text-4xl" />,
    info: "+880170000000",
  },
  {
    type: "Email",
    icon: <FaEnvelope className="text-red-600 text-4xl" />,
    info: "aircnc@gmail.com",
  },
  {
    type: "WhatsApp",
    icon: <FaWhatsapp className="text-green-600 text-4xl" />,
    info: "+880170000000",
  },
];

const Contact = () => {
  const handleContactClick = () => {
    Swal.fire({
      title: "Thank You!",
      html: '<span style="color: red; font="bold ;">Contact Very Soon.</span>',
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <section
      className="py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1725714834412-7d7154ac4e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D')",
      }}
    >
      <div className="text-center mb-8 bg-white bg-opacity-70 p-4 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2 font-semibold">
          We're here to help! Reach out to us anytime.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {contactDetails.map((contact, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className="mb-4">{contact.icon}</div>
            {/* Contact Type */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {contact.type}
            </h3>
            {/* Contact Info */}
            <p className="text-gray-600 mb-4">{contact.info}</p>
            {/* Button */}
            <button
              onClick={handleContactClick}
              className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors duration-300"
            >
              Contact Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
