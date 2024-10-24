import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeartButton = ({ room }) => {
  const [bookmarked, setBookmarked] = useState(false);

  // Check if room is already bookmarked in localStorage
  useEffect(() => {
    const savedRooms =
      JSON.parse(localStorage.getItem("bookmarkedRooms")) || [];
    const isBookmarked = savedRooms.some(
      (savedRoom) => savedRoom._id === room._id
    );
    setBookmarked(isBookmarked);
  }, [room._id]);

  const handleBookmarkClick = () => {
    const savedRooms =
      JSON.parse(localStorage.getItem("bookmarkedRooms")) || [];
    let updatedRooms;

    if (bookmarked) {
      // Remove room from bookmarks
      updatedRooms = savedRooms.filter(
        (savedRoom) => savedRoom._id !== room._id
      );
      toast.info("Removed from bookmarks");
    } else {
      // Add room to bookmarks
      updatedRooms = [...savedRooms, room];
      toast.success("Added to bookmarks");
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
      {bookmarked ? (
        <AiFillHeart size={24} className="fill-rose-500" />
      ) : (
        <AiOutlineHeart size={24} className="fill-white hover:fill-rose-500" />
      )}
    </div>
  );
};

export default HeartButton;
