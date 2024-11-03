import React from "react";
import GetRandomColor from "./../../../Hooks/GetRandomColor";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaMobileAlt,
  FaTelegramPlane,
  FaBuilding,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  const textColor = GetRandomColor();
  return (
    <>
      <div className="mt-2">
        <footer className="footer p-10 flex-1 bg-custom  border-gray-600 ">
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
            <header className=" text-xl  mb-2   font-semibold  pb-3 border-b-2 border-rose-400">
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
            <header className="text-xl  mb-2   font-semibold  pb-3 border-b-2 border-rose-400">
              Company
            </header>

            <Link to="/aboutMore">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                About Us
              </a>
            </Link>
            <Link to="/support">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                Contact
              </a>
            </Link>

            <Link to="/morereviews">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                Reviews
              </a>
            </Link>

            <Link to="/teams">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                Teams
              </a>{" "}
            </Link>
          </nav>

          {/* Legal Section */}
          <nav className="flex-1 mb-8">
            <header className=" text-xl  mb-2   font-semibold  pb-3 border-b-2 border-rose-400">
              Legal
            </header>
            <Link to="/policy">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                Terms of Use
              </a>
            </Link>

            <Link to="/policy">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                Privacy Policy
              </a>
            </Link>

            <Link to="/policy">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                Cookie Policy
              </a>
            </Link>
            <Link to="/policy">
              <a className="link link-hover text-xl hover:text-rose-400 transition mb-1">
                Privacy
              </a>{" "}
            </Link>
          </nav>
        </footer>
      </div>
      <footer className="footer bg-custom border-gray-600  px-10 py-4 ">
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

        <div className="text-rose-500 text-center flex mt-10 text-sm">
          © 2023 AirCNC Inc. All rights reserved.
          <span className="text-white ">
            <Link to="https://rezoanulhasanportfolio.netlify.app/">
              {" "}
              @-Rezoanul Hasan Riad
            </Link>
          </span>
        </div>

        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/rezoanul-hasan-6ab158240/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-400 transition duration-200"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://www.facebook.com/rezoanul.hasan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-400 transition duration-200"
              >
                <FaFacebook size={26} />
              </a>
              <a
                href="https://wa.me/+8801734639066"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-400 transition duration-200"
              >
                <FaWhatsapp size={26} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-400 transition duration-200"
              >
                <FaYoutube size={26} />
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/yourusername"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition duration-200"
              >
                <FaInstagram size={26} />
              </a>
              {/*  */}
              <a
                href="https://t.me/rezoanulhasan" // Replace with actual Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition duration-200"
              >
                <FaTelegramPlane size={26} />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
