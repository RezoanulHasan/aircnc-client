import React, { useState, useEffect, useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookmarkContext } from "./BookmarkContext";

const HeartButton = ({ room }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const { bookmarkCount, updateBookmarkCount } = useContext(BookmarkContext);

  // Check if room is defined and then update bookmark status
  useEffect(() => {
    if (!room || !room._id) return; // Early return if room or room._id is undefined
    const savedRooms =
      JSON.parse(localStorage.getItem("bookmarkedRooms")) || [];
    const isBookmarked = savedRooms.some(
      (savedRoom) => savedRoom._id === room._id
    );
    setBookmarked(isBookmarked);
  }, [room]);

  const handleBookmarkClick = () => {
    if (!room || !room._id) return; // Ensure room exists before trying to bookmark it

    const savedRooms =
      JSON.parse(localStorage.getItem("bookmarkedRooms")) || [];
    let updatedRooms;

    if (bookmarked) {
      // Remove room from bookmarks
      updatedRooms = savedRooms.filter(
        (savedRoom) => savedRoom._id !== room._id
      );
      toast.info("Removed from bookmarks");
      updateBookmarkCount(bookmarkCount - 1); // Update global count
    } else {
      // Add room to bookmarks
      updatedRooms = [...savedRooms, room];
      toast.success("Added to bookmarks");
      updateBookmarkCount(bookmarkCount + 1); // Update global count
    }

    localStorage.setItem("bookmarkedRooms", JSON.stringify(updatedRooms));
    setBookmarked(!bookmarked);
  };

  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={handleBookmarkClick}
      aria-label={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
      title={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
    >
      <div className="relative inline-block">
        {/* Conditional rendering: show filled heart if bookmarked, otherwise outline */}
        {bookmarked ? (
          <AiFillHeart size={24} className="fill-rose-500" />
        ) : (
          <AiOutlineHeart
            size={24}
            className="fill-white hover:fill-rose-500"
          />
        )}
      </div>
    </div>
  );
};

export default HeartButton;
