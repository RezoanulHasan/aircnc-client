import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import { useContext } from "react";
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
  };

  return (
    <div className="container mx-auto pt-12">
      <h1 className="text-2xl font-semibold text-center">Favorite Rooms</h1>
      {bookmarkedRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
          {bookmarkedRooms.map((room) => (
            <div key={room._id} className="p-4 border rounded-lg shadow-md">
              <img
                src={room.image}
                alt={room.location}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold">{room.location}</h2>
              <p className="text-gray-500">{room.dateRange}</p>
              <p className="text-rose-500 font-semibold mt-2">
                ${room.price} / night
              </p>

              <div className="flex space-x-2 mt-4">
                {" "}
                {/* Flex container for buttons */}
                <button
                  onClick={() => {
                    removeFromBookmarks(room._id);
                    updateBookmarkCount(bookmarkCount - 1);
                  }}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition flex items-center space-x-2"
                  title="Remove"
                >
                  <span>Remove</span>
                  <FaTrash />
                </button>
                <Link
                  to={`/rooms/${room._id}`}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition flex items-center space-x-2"
                  title="Details" // Tooltip for accessibility
                >
                  <span>Details</span> {/* Text */}
                  <FaInfoCircle /> {/* Icon */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-xl  text-red-500">No rooms bookmarked yet.</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
