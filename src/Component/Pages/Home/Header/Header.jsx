import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  PiArrowBendDoubleUpRightThin,
  PiHeadphonesThin,
  PiPhoneDisconnectThin,
  PiEnvelopeThin,
  PiUserThin,
} from "react-icons/pi";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FaUsers, FaStar, FaRocket } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <Fade direction="down">
        <div className="px-4 lg:px-20 shadow-sm  p-4 lg:mt-10 mt-0         bg-custom ">
          <div className="main-container flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* shop button */}
            <div className="flex justify-center lg:justify-start">
              <Link to="/filters">
                <button className=" rounded-lg text-sm px-5 py-3 lg:py-4 text-center flex space-x-2 items-center bg-opacity-50">
                  <span className="font-semibold text-gradient ">
                    Click Here Booking Now
                  </span>
                  <FaArrowRightLong />
                </button>
              </Link>
            </div>

            {/* teams */}
            <div className="flex flex-wrap justify-center lg:justify-start lg:ml-10 space-x-5 space-y-2 lg:space-y-0 lg:flex-nowrap">
              <Link to="/teams">
                <div className="flex space-x-1 items-center">
                  <FaUsers className="text-xl text-green-500" />
                  <p className="text-sm text-white">Teams</p>
                </div>
              </Link>

              <Link to="/morereviews">
                <div className="flex space-x-1 items-center">
                  <FaStar className="text-xl text-yellow-500" />
                  <p className="text-sm text-white">Reviews</p>
                </div>
              </Link>

              <Link to="/dataFilters">
                <div className="flex space-x-1 items-center">
                  <PiArrowBendDoubleUpRightThin className="text-xl text-orange-500 " />
                  <p className="text-sm    text-white"> Data Range</p>
                </div>
              </Link>

              <Link to="/support">
                <div className="flex space-x-1 items-center">
                  <PiHeadphonesThin className="text-xl text-blue-400" />
                  <p className="text-sm text-white">Supports</p>
                </div>{" "}
              </Link>
              <Link to="/policy">
                <div className="flex space-x-1 items-center">
                  <IoIosInformationCircleOutline className="text-xl  text-red-500" />
                  <p className="text-sm  text-white">Policys</p>
                </div>
              </Link>
              <Link to="/aboutMore">
                <div className="flex space-x-1 items-center">
                  <PiUserThin className="text-xl  text-teal-500" />
                  <p className="text-sm  text-white">Abouts</p>
                </div>
              </Link>
            </div>
            {/* phone */}
            <div className="flex justify-center lg:justify-end lg:ml-auto items-center space-x-2">
              <PiEnvelopeThin className="text-xl text-white" />
              <span className="text-white text-sm">aircnc@gmail.com</span>
              <PiPhoneDisconnectThin className="text-xl text-white" />
              <span className="text-white text-sm">+880-170-0000000</span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
