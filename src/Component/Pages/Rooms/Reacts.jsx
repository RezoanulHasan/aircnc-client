// Reacts.jsx
import React, { useState, useEffect } from "react";
import {
  AiFillLike,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiFillStar,
} from "react-icons/ai";

function getRandomCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reacts = () => {
  const [counts, setCounts] = useState({
    like_count: getRandomCount(50, 500),
    love_count: getRandomCount(20, 300),
    comment_count: getRandomCount(10, 100),
    share_count: getRandomCount(5, 50),
    star_count: getRandomCount(1, 5),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts({
        like_count: getRandomCount(50, 500),
        love_count: getRandomCount(20, 300),
        comment_count: getRandomCount(10, 100),
        share_count: getRandomCount(5, 50),
        star_count: getRandomCount(1, 5),
      });
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Reactions Overview
        </h2>
        <p className="text-lg text-gray-600">
          Keep track of user reactions and their interactions in real-time!
        </p>
      </div>

      {/* Reactions */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        <div className="flex items-center space-x-3 p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors shadow-lg w-full sm:w-48 md:w-56">
          <AiFillLike className="text-blue-600" size={32} />
          <span className="text-xl font-semibold text-gray-700">
            {counts.like_count}
          </span>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors shadow-lg w-full sm:w-48 md:w-56">
          <AiFillHeart className="text-red-600" size={32} />
          <span className="text-xl font-semibold text-gray-700">
            {counts.love_count}
          </span>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors shadow-lg w-full sm:w-48 md:w-56">
          <AiOutlineComment className="text-gray-600" size={32} />
          <span className="text-xl font-semibold text-gray-700">
            {counts.comment_count}
          </span>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors shadow-lg w-full sm:w-48 md:w-56">
          <AiOutlineShareAlt className="text-green-600" size={32} />
          <span className="text-xl font-semibold text-gray-700">
            {counts.share_count}
          </span>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors shadow-lg w-full sm:w-48 md:w-56">
          <AiFillStar className="text-yellow-600" size={32} />
          <span className="text-xl font-semibold text-gray-700">
            {counts.star_count}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Reacts;
