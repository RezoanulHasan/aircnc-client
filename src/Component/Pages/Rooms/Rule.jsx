import React from "react";
import {
  FaCheckCircle,
  FaUserAlt,
  FaDoorOpen,
  FaVideo,
  FaShieldAlt,
  FaBell,
  FaTimesCircle,
  FaSmokingBan,
  FaMusic,
  FaPaw,
} from "react-icons/fa"; // Icons

const Rule = () => {
  return (
    <div className="p-20  ">
      <h1 className="text-3xl font-semibold text-gray-800 text-center ">
        Things to know
      </h1>

      <p className="text-center  text-gray-600  ">
        Your cooperation helps us maintain a safe and comfortable environment
        for all guests.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* House Rules */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
            <FaUserAlt className="text-indigo-600 mr-3" /> House rules
          </h2>
          <ul className="list-none space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-3" />
              Check-in: 2:00 PM - 10:00 PM
            </li>
            <li className="flex items-center">
              <FaDoorOpen className="text-purple-600 mr-3" />
              Checkout before 12:00 PM
            </li>
            <li className="flex items-center">
              <FaUserAlt className="text-red-600 mr-3" />2 guests maximum
            </li>
            <li className="flex items-center">
              <FaSmokingBan className="text-orange-500 mr-3" />
              No smoking
            </li>
            <li className="flex items-center">
              <FaMusic className="text-blue-500 mr-3" />
              Quiet hours: 10:00 PM - 8:00 AM
            </li>
            <li className="flex items-center">
              <FaPaw className="text-teal-600 mr-3" />
              No pets allowed
            </li>
          </ul>
        </section>

        {/* Safety & Property */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
            <FaShieldAlt className="text-yellow-600 mr-3" /> Safety & property
          </h2>
          <ul className="list-none space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaVideo className="text-red-500 mr-3" />
              Exterior security cameras on property
            </li>
            <li className="flex items-center">
              <FaBell className="text-green-600 mr-3" />
              Carbon monoxide alarm
            </li>
            <li className="flex items-center">
              <FaBell className="text-yellow-600 mr-3" />
              Smoke alarm
            </li>
          </ul>
        </section>

        {/* Cancellation Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
            <FaTimesCircle className="text-red-500 mr-3" /> Cancellation policy
          </h2>
          <p className="text-gray-600">
            Review this Host's full policy for details.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Rule;
