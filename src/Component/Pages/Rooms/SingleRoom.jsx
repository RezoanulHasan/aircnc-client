import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
//import Header from "./Header";
import Reservation from "./Reservation";
import useTitle from "../../../Hooks/useTitle";
import { format } from "date-fns";
import Slider from "../Slider/Slider";
import Container from "../../Shared/Container";
import { Fade } from "react-awesome-reveal";

import TopVisitPlaces from "./TopVisitPlaces";
import RoomFacilities from "./RoomFacilities";
import OverAllRating from "./OverAllRating";
import {
  FaUsers,
  FaBed,
  FaBath,
  FaDollarSign,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Rule from "./Rule";
import FacilitiesMore from "./FacilitiesMore";

import BackNButton from "../../Button/BackButton";
import Reacts from "./Reacts";

const SingleRoom = () => {
  useTitle("Room Details");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    _id,
    image,
    guests,
    bedroom,
    bathroom,
    to,
    from,
    email,
    location,
    hostname,
    hostphotoURL,
    description,
    price,
  } = useLoaderData();

  const [data, setData] = useState([]);

  return (
    <Container>
      <div className="my-10 flex flex-col gap-10 overflow-hidden">
        <Fade direction="right" ClassName="overflow-hidden">
          <div className="flex flex-col md:flex-row md:gap-8">
            <img
              src={image}
              alt={location}
              className="w-full  h-96 rounded-lg object-cover shadow-lg"
            />

            <div className="flex flex-col justify-between xl:w-1/2">
              <div className="flex flex-col gap-2">
                <h1>Host Info</h1>
                <div className="flex items-center gap-2">
                  <img
                    className="w-12 h-12 rounded-full border border-gray-300"
                    alt="Avatar"
                    src={hostphotoURL}
                  />
                  <div className="text-xl font-semibold">{hostname}</div>{" "}
                  <h1 className="">{email}</h1>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />

                <h1 className="text-2xl font-semibold text-gray-800">
                  {location}
                </h1>
              </div>
              <p className="text-gray-700 text-base font-light mt-4">
                {description}
              </p>
            </div>
          </div>
        </Fade>

        <Slider />

        <hr className="my-8 border-gray-300   " />
        <div
          className="relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          {/* Top Wave */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent h-32"></div>

          {/* Content Section */}
          <div className="relative p-8 space-y-8">
            <h1 className="text-3xl font-extrabold text- mb-6 text-center tracking-wide text-gradient ">
              Room Information
            </h1>

            {/* Price Section */}
            <div className="flex items-center space-x-3 text-xl text-gray-800">
              <FaDollarSign className="text-teal-500" title="Price" />
              <span className="font-semibold">Price:</span>
              <span className="text-3xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-500 text-sm">/ night</span>
            </div>

            {/* Room Info Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-700">
              {/* Guests */}
              <div className="flex items-center space-x-3">
                <FaUsers className="text-indigo-500" title="Guests Allowed" />
                <span className="font-medium">Maximum Guests:</span>
                <span>{guests}</span>
              </div>

              {/* Bedrooms */}
              <div className="flex items-center space-x-3">
                <FaBed className="text-yellow-500" title="Bedrooms" />
                <span className="font-medium">Bedrooms:</span>
                <span>{bedroom}</span>
              </div>

              {/* Bathrooms */}
              <div className="flex items-center space-x-3">
                <FaBath className="text-purple-500" title="Bathrooms" />
                <span className="font-medium">Bathrooms:</span>
                <span>{bathroom}</span>
              </div>
            </div>

            {/* Available Dates */}
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center space-x-3">
                <FaCalendarAlt
                  className="text-orange-400"
                  title="Availability Dates"
                />
                <span>
                  <span className="font-medium">Available Dates:</span>{" "}
                  {format(new Date(from), "MMMM dd, yyyy")} -{" "}
                  {format(new Date(to), "MMMM dd, yyyy")}
                </span>
              </h2>
            </div>
          </div>
        </div>

        <FacilitiesMore></FacilitiesMore>
        {/* Room Info  close*/}
        <RoomFacilities></RoomFacilities>
        <Container>
          <Reservation />
        </Container>

        <OverAllRating></OverAllRating>
        <Rule></Rule>

        <Reacts></Reacts>
        <TopVisitPlaces />
        <div className="flex justify-center mt-5">
          <BackNButton></BackNButton>
        </div>
      </div>
    </Container>
  );
};

export default SingleRoom;
