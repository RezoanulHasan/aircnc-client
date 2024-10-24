import React, { createContext, useState, useEffect } from "react";

// Create the context
export const BookmarkContext = createContext();

// Create the provider component
export const BookmarkProvider = ({ children }) => {
  const [bookmarkCount, setBookmarkCount] = useState(0);

  // Function to update bookmark count
  const updateBookmarkCount = (count) => {
    setBookmarkCount(count);
  };

  // Initialize bookmark count from localStorage when the component mounts
  useEffect(() => {
    const savedRooms =
      JSON.parse(localStorage.getItem("bookmarkedRooms")) || [];
    setBookmarkCount(savedRooms.length);
  }, []);

  return (
    <BookmarkContext.Provider value={{ bookmarkCount, updateBookmarkCount }}>
      {children}
    </BookmarkContext.Provider>
  );
};
