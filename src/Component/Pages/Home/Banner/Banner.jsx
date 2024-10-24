import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="   mt-10">
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 lg:px-24">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 space-y-6 md:pr-8 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg">
            Discover Amazing Places with AircnC
          </h1>

          <p className="text-gray-600 text-lg lg:text-xl">
            Find the best accommodations from around the world at unbeatable
            prices. Experience comfort, luxury, and affordability with AircnC's
            curated hotel selection. Your perfect stay is just a click away.
          </p>
          <div>
            <Link to="/filters">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
        {/* Right Side: Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-full max-w-lg">
            <video
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <source
                src="https://videos.pexels.com/video-files/2104648/2104648-sd_640_360_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
