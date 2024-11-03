import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopVisitPlaces = () => {
  const [rooms, setRooms] = useState([]); // State to store fetched rooms data
  const [randomRooms, setRandomRooms] = useState([]); // State to store random rooms

  // Fetching rooms data from the server using useEffect
  useEffect(() => {
    fetch("https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data); // Store fetched data in rooms state
        // Shuffle and select random rooms
        const shuffledRooms = data.sort(() => 0.5 - Math.random());
        setRandomRooms(shuffledRooms.slice(0, 12)); // Set the first 8 random rooms
      })
      .catch((error) => console.error("Error fetching rooms data:", error)); // Handle errors
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gradient">
        Top Visit Place For You
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
        {randomRooms?.map((room) => (
          <Link to="/filters" key={room?._id}>
            <div className="relative group rounded-xl overflow-hidden transition transform hover:scale-105">
              {/* Room Image */}
              <div className="w-full relative overflow-hidden rounded-t-xl">
                <img
                  className="object-cover  h-40  w-56  rounded-full border group-hover:scale-110 transition-transform duration-300"
                  src={room.image}
                  alt="Room"
                />
              </div>
              {/* Room details on hover */}
              <div className="absolute bottom-0 left-0 w-full h-full  bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center px-4">
                <div>
                  <h3 className="">{room?.location}</h3>
                  <span className="">${room.price}</span>
                  <span className="text-sm font-light">/ night</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopVisitPlaces;
