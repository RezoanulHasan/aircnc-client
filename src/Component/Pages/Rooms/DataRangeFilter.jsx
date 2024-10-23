import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DateRange } from "react-date-range";
import Container from "../../Shared/Container";
import Spinner from "../../Shared/Spinner/Spinner";
import Heading from "../../Heading/Heading";
import HeartButton from "../../Button/HeartButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetRandomColor from "../../../Hooks/GetRandomColor";
import { format, isBefore, isAfter } from "date-fns";
import "react-date-range/dist/styles.css"; // Main stylesheet
import "react-date-range/dist/theme/default.css"; // Theme stylesheet
import { FaStar } from "react-icons/fa";
import useTitle from "../../../Hooks/useTitle";
const DataRangeFilter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Data Filters");

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isFilterApplied, setIsFilterApplied] = useState(false); // Track filter status

  // Fetch all rooms data
  useEffect(() => {
    fetch("https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched rooms data:", data); // Debugging log
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching rooms:", err);
        setLoading(false);
      });
  }, []);

  // Filter rooms based on the selected date range
  useEffect(() => {
    const startDate = dateRange[0].startDate;
    const endDate = dateRange[0].endDate;

    if (isFilterApplied) {
      const filtered = rooms.filter((room) => {
        const roomFrom = new Date(room.from);
        const roomTo = new Date(room.to);

        // Check if the room is available within the selected date range
        return isBefore(roomFrom, endDate) && isAfter(roomTo, startDate);
      });

      setFilteredRooms(filtered);
    } else {
      setFilteredRooms(rooms); // Reset to all rooms if no filter is applied
    }
  }, [dateRange, rooms, isFilterApplied]);

  // Handle date range change
  const handleDateRangeChange = (item) => {
    setDateRange([item.selection]);
    setIsFilterApplied(true); // Mark filter as applied when date range is changed
  };

  // Decide whether to display all or filtered rooms
  const displayedRooms = showAll ? filteredRooms : filteredRooms.slice(0, 10);

  return (
    <Container>
      {/* Date Range Picker */}
      <div className="mb-6 mt-10 flex justify-center items-center">
        <DateRange
          editableDateInputs={true}
          onChange={handleDateRangeChange} // Apply filter when date range is changed
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          minDate={new Date()}
        />
      </div>

      {loading ? (
        <Spinner />
      ) : displayedRooms?.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedRooms.map((room) => (
            <ShowRoomData key={room?._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No Rooms Available!"
            subtitle="Please check back later."
            center={true}
          />
        </div>
      )}

      {rooms?.length > 20 && !showAll && (
        <div className="flex justify-center mt-10 mb-10">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center bg-rose-500 text-white px-20 py-5 rounded-full shadow-md hover:shadow-lg transition"
          >
            <span>Show All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </Container>
  );
};

const ShowRoomData = ({ room }) => {
  const textColor = GetRandomColor();

  // Star rating logic (static 5 stars for now, can be dynamic if needed)
  const stars = Array(5).fill(0); // Create an array of 5 elements for 5 stars

  return (
    <Link
      to={`/rooms/${room?._id}`}
      className="col-span-1 cursor-pointer group"
    >
      <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden transition-transform transform group-hover:scale-105 hover:shadow-xl duration-300">
        {/* Image Section */}
        <div className="relative h-64 w-full rounded-t-3xl overflow-hidden">
          <img
            className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90 rounded-t-3xl"
            src={room?.image}
            alt="Room"
          />
          {/* Heart Button */}
          <div className="absolute top-3 right-3 z-10">
            <HeartButton />
            <ToastContainer />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Room Location */}

          {/* 5-Star Rating Section */}
          <div className="flex items-center mb-2">
            {stars.map((_, index) => (
              <FaStar key={index} className="text-yellow-500 mr-1" /> // Display 5 stars
            ))}
          </div>

          {/* Available Dates */}
          <p className="text-gray-500 mt-3">
            <span className="font-medium">Available:</span>{" "}
            {format(new Date(room?.from), "MMM dd, yyyy")} -{" "}
            {format(new Date(room?.to), "MMM dd, yyyy")}
          </p>

          {/* Price Badge */}
          <div className="flex justify-between items-center mt-4 gap-4">
            <div className="font-semibold px-4 py-2 rounded-full shadow-sm bg-black text-white">
              $ {room?.price} / night
            </div>

            <button className="bg-rose-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-rose-600 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DataRangeFilter;
