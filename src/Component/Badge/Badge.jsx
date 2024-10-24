import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Badge = ({ count }) => {
  return (
    <div className="relative inline-block">
      <AiFillHeart size={32} className="fill-rose-500" />
      {count > 0 && ( // Only show the badge if count is greater than 0
        <span className="absolute top-[-8px] right-[-8px] bg-black text-white text-xs rounded-full px-2 py-1">
          {count}
        </span>
      )}
    </div>
  );
};

export default Badge;
