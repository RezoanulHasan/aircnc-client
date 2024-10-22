import React from "react";
import {
  FaSnowflake,
  FaFire,
  FaWifi,
  FaTv,
  FaShower,
  FaPhone,
  FaCoffee,
  FaLock,
  FaRegHandPaper,
  FaDesktop,
  FaCouch,
  FaVolumeMute,
  FaGift,
  FaUtensils,
} from "react-icons/fa";

const facilities = [
  { name: "Air Conditioning", icon: <FaSnowflake /> },
  { name: "Heating", icon: <FaFire /> },
  { name: "Wi-Fi / Internet Access", icon: <FaWifi /> },
  { name: "Television", icon: <FaTv /> },

  { name: "Private Bathroom / Shower", icon: <FaShower /> },

  { name: "Telephone", icon: <FaPhone /> },
  { name: "Coffee/Tea Maker", icon: <FaCoffee /> },

  { name: "Safety Deposit Box", icon: <FaLock /> },
  { name: "Hairdryer", icon: <FaRegHandPaper /> },

  { name: "Work Desk", icon: <FaDesktop /> },
  { name: "Seating Area", icon: <FaCouch /> },

  { name: "Soundproofing", icon: <FaVolumeMute /> },
  { name: "Complimentary Toiletries", icon: <FaGift /> },
  { name: "Electric Kettle", icon: <FaUtensils /> },
  { name: "In-Room Dining", icon: <FaUtensils /> },
];

const RoomFacilities = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Room Facilities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {facilities?.map((facility, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white shadow-md rounded-lg"
          >
            <div className="text-2xl text-rose-600 mr-3">{facility.icon}</div>
            <span className="text-lg font-medium">{facility.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomFacilities;
