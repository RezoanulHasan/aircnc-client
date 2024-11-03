import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Newsletter = () => {
  const [emailToBeSubscribed, setEmailToBeSubscribed] = useState("");

  const handleEmailSubscription = (e) => {
    e.preventDefault();
    setEmailToBeSubscribed("");

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "Thank you for subscribing to our newsletter!",
      confirmButtonColor: "#fbbf24", // Matches the yellow button style
    });
  };

  return (
    <div
      className="bg-black pt-10 lg:pt-16 pb-5 lg:pb-10 flex justify-center items-center flex-col mb-6"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <h4 className="text-gradient text-2xl lg:text-4xl font-semibold text-center lg:text-left transition-all duration-200 hover:scale-105">
        Subscribe to our newsletter
      </h4>
      <p className="text-gray-300 text-sm w-full md:w-3/4 lg:w-1/3 text-center my-4">
        Stay updated with our latest Accommodation and updates. Join our mailing
        list and never miss an update from Aircnc!
      </p>
      <div className="mt-6">
        <form className="relative" onSubmit={handleEmailSubscription}>
          <input
            type="email"
            className="bg-gray-100 py-3 px-4 rounded-sm w-[300px] md:w-96 lg:w-[500px] focus:outline-none focus:ring-2 focus:ring-red-400 text-custom-black placeholder-gray-500"
            placeholder="Enter your email"
            required
            value={emailToBeSubscribed}
            onChange={(e) => setEmailToBeSubscribed(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white absolute right-0 py-3 px-4 font-semibold lg:font-bold rounded-r-sm transition-all duration-200 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="h-[1px] bg-rose-400 w-1/4 mt-8"></div>
      <div className="flex justify-center items-center space-x-4 lg:space-x-8 mt-6 text-4xl lg:text-3xl text-white">
        <FaAmazon className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        <FaGoogle className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        <FaMicrosoft className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        <FaApple className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        <FaFacebook className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        <FaTwitter className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        <FaLinkedin className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
        <FaInstagram className="hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
      </div>
    </div>
  );
};

export default Newsletter;
