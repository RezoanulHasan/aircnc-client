import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import { BookmarkContext } from "./BookmarkContext";

const Favorite = () => {
  useTitle("Favorite");
  const [bookmarkedRooms, setBookmarkedRooms] = useState([]);
  const { bookmarkCount, updateBookmarkCount } = useContext(BookmarkContext);

  useEffect(() => {
    // Retrieve bookmarked rooms from localStorage
    const savedRooms =
      JSON.parse(localStorage.getItem("bookmarkedRooms")) || [];
    setBookmarkedRooms(savedRooms);
  }, []);

  const removeFromBookmarks = (roomId) => {
    // Filter out the room to remove
    const updatedRooms = bookmarkedRooms.filter((room) => room._id !== roomId);
    setBookmarkedRooms(updatedRooms);

    // Update localStorage
    localStorage.setItem("bookmarkedRooms", JSON.stringify(updatedRooms));
    updateBookmarkCount(bookmarkCount - 1);
  };

  return (
    <div className="container mx-auto pt-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Your Favorite Rooms
      </h1>
      {bookmarkedRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bookmarkedRooms.map((room) => (
            <div
              key={room._id}
              className="relative bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%)",
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.location}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {room.location}
                </h2>
                <p className="text-gray-500">{room.dateRange}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => removeFromBookmarks(room._id)}
                    className="flex items-center bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all"
                  >
                    <FaTrash className="ml-10" />
                  </button>
                  <Link
                    to={`/rooms/${room._id}`}
                    className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    <FaInfoCircle className="mr-2" /> Details
                  </Link>
                </div>
              </div>
              {/* Centered ribbon for price */}
              <div className="absolute  top-10 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white text-xs font-semibold py-1 px-3 rounded-b-lg">
                ${room.price} / night
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-xl text-red-500">No rooms bookmarked yet.</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
