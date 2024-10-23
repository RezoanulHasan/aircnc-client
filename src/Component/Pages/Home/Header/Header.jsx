import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  PiArrowBendDoubleUpRightThin,
  PiHeadphonesThin,
  PiPhoneDisconnectThin,
  PiEnvelopeThin,
} from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div>
      <Fade direction="down">
        <div className="px-4 lg:px-20 shadow-sm bg-black p-4 lg:mt-10 mt-0">
          <div className="main-container flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* shop button */}
            <div className="flex justify-center lg:justify-start">
              <Link to="/filters">
                <button className=" text-white btn btn-outline  bg-black focus:outline-none rounded-sm text-sm px-5 py-3 lg:py-4 text-center flex space-x-2 items-center bg-opacity-50">
                  <span className="font-semibold text-red-500">
                    Click Here Booking Now
                  </span>
                  <FaArrowRightLong />
                </button>
              </Link>
            </div>
            {/* process */}
            <div className="flex flex-wrap justify-center lg:justify-start lg:ml-10 space-x-5 space-y-2 lg:space-y-0 lg:flex-nowrap">
              <div className="flex space-x-1 items-center">
                <CiLocationOn className="text-xl text-white" />
                <p className="text-sm text-white">Location</p>
              </div>
              <Link to="/dataFilters">
                <div className="flex space-x-1 items-center">
                  <PiArrowBendDoubleUpRightThin className="text-xl text-white  " />
                  <p className="text-sm  text-red-500">
                    {" "}
                    Found Available By Data Range
                  </p>
                </div>
              </Link>
              <div className="flex space-x-1 items-center">
                <PiHeadphonesThin className="text-xl text-white" />
                <p className="text-sm text-white">Customer Support</p>
              </div>
              <div className="flex space-x-1 items-center">
                <IoIosInformationCircleOutline className="text-xl text-white" />
                <p className="text-sm text-white">Need Help</p>
              </div>
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
