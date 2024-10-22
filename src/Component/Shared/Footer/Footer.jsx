// Footer.js
import React from "react";
import GetRandomColor from "./../../../Hooks/GetRandomColor"; // Adjust the path if necessary
import { Link } from "react-router-dom";
import LeafletMap from "./Leaflet/LeafletMap"; // Adjust the path to your LeafletMap component
import {
  FaArrowCircleRight,
  FaLocationArrow,
  FaPhoneAlt,
  FaMobileAlt,
  FaTelegramPlane,
} from "react-icons/fa";
const Footer = () => {
  const textColor = GetRandomColor(); // Assuming this returns a color in hex format

  return (
    <>
      <div className="mt-2">
        <footer className="footer p-10 flex-1 bg-gray-800 text-white border-t border-gray-600">
          {/* Our Address Section */}
          <nav className=" mb-2">
            <h2 className="text-4xl font-semibold mb-4 pb-3 border-b-2 border-rose-400">
              Our Address
            </h2>
            <p className="text-lg font-semibold ">Head office</p>
            <p className="text-lg ">
              Discover various luxury accommodations around the world and enjoy
              world-class premium service.
            </p>

            <div className="text-lg my-5 font-medium">
              <p className="flex items-center gap-2 mb-2">
                <FaLocationArrow className="text-rose-400" /> 21 Street, Bogra,
                Bangladesh #12 Road, House #1
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2 hover:text-rose-400 transition">
                <FaMobileAlt className="text-rose-400" /> +8801734639066
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2 hover:text-rose-400 transition">
                <FaPhoneAlt className="text-rose-400" /> +880170000000
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2 hover:text-rose-400 transition">
                <FaTelegramPlane className="text-rose-400" /> aircnc@gmail.com
              </p>
            </div>
          </nav>

          {/* Services Section */}
          <nav className="flex-1 mb-8">
            <header className="text-rose-400 text-2xl  mb-2   font-semibold  pb-3 border-b-2 border-rose-400">
              Services
            </header>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              AirCover for Hosts
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Hosting Resources
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Friendly Apartments
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Advertisement
            </a>
          </nav>

          {/* Company Section */}
          <nav className="flex-1 mb-8">
            <header className="text-rose-400 text-2xl  mb-2   font-semibold  pb-3 border-b-2 border-rose-400">
              Company
            </header>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              About Us
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Contact
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Jobs
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Press Kit
            </a>
          </nav>

          {/* Legal Section */}
          <nav className="flex-1 mb-8">
            <header className="text-rose-400 text-2xl  mb-2   font-semibold  pb-3 border-b-2 border-rose-400">
              Legal
            </header>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Terms of Use
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Privacy Policy
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Cookie Policy
            </a>
            <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
      <footer className="footer                    bg-gray-800 text-white border-t border-gray-600  px-10 py-4 ">
        <aside className="items-center grid-flow-col">
          <div className="avatar bg-black">
            <div className="w-20 mask mask-hexagon">
              <img src="https://i.ibb.co/72RXy2H/favicon.png" alt="Logo" />
            </div>
          </div>
          <p>
            AirCNC Industries Ltd. <br />
            Providing reliable tech since 2023
          </p>
        </aside>

        <div className="text-rose-500 text-center flex mt-10">
          © 2023 AirCNC Inc. All rights reserved.
          <span className="text-white">
            <Link to="https://www.linkedin.com/in/rezoanul-hasan-6ab158240/">
              {" "}
              @-Rezoanul Hasan Riad
            </Link>
          </span>
        </div>

        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/rezoanul-hasan-6ab158240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rezoanul-hasan-6ab158240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rezoanul-hasan-6ab158240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
