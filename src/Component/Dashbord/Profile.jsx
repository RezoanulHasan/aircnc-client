import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcSettings } from "react-icons/fc";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="p-8 bg-gradient-to-r from-red-500 to-indigo-600 shadow-lg rounded-lg text-white">
      <div className="flex items-center space-x-4 mb-6">
        <FcSettings className="text-4xl text-white" />
        <h2 className="text-3xl font-bold">User Profile</h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
            referrerPolicy="no-referrer"
          />
          <span className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></span>
        </div>
        <h3 className="text-2xl font-semibold mt-5">
          {user?.displayName || "N/A"}
        </h3>
        <p className="text-lg text-indigo-100 mt-2">{user?.email || "N/A"}</p>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 rounded-full bg-white text-indigo-600 font-medium hover:bg-gray-200 transition-colors duration-300">
          View Full Profile
        </button>
      </div>
    </section>
  );
};

export default Profile;
