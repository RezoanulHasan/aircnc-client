import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 space-y-6 md:pr-8 text-center md:text-left">
          <h1 className="h leading-tight tracking-tight text-rose-500">
            Explore the World with
            <span className="">
              {" "}
              Aircn<span>C</span>
            </span>
          </h1>
        </div>

        {/* Right Side: Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
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
        </div>
      </section>
    </div>
  );
}

export default Banner;
