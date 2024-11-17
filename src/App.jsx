import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Shared/Footer/Footer";
import Navbar from "./Component/Shared/Navbar/Navbar";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top">
      <Navbar />

      <div className="pt-24 min-h-[calc(100vh-68px)] overflow-hidden">
        <Outlet />
      </div>

      <div className="card-actions justify-end overflow-hidden">
        <Link to="top" smooth={true} duration={500}>
          <button className="relative group w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full border-4 border-gray-600 shadow-lg overflow-hidden transition-transform duration-300">
            {/* Outer Ring Animation */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-700 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-transform duration-300"></div>

            {/* Inner Locket Glow */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-400 to-gray-200 rounded-full">
              <FaArrowUp className="text-gray-800 group-hover:text-red-600 text-2xl transform group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Fire Animation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100">
              <div className="w-2 h-6 bg-red-500 rounded-full animate-fire"></div>
              <div className="w-2 h-8 bg-orange-500 rounded-full animate-fire"></div>
              <div className="w-2 h-6 bg-yellow-500 rounded-full animate-fire"></div>
            </div>

            {/* Rocket Movement */}
            <div className="absolute inset-0 group-hover:animate-rocket"></div>
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default App;
