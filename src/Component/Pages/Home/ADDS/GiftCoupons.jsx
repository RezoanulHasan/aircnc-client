import React from "react";
import { motion } from "framer-motion";
import {
  FaGift,
  FaSpa,
  FaUtensils,
  FaMountain,
  FaSwimmer,
  FaWifi,
  FaConciergeBell,
  FaCocktail,
} from "react-icons/fa";

const ads = [
  {
    type: "feature",
    icon: <FaGift className="text-3xl text-yellow-600" />,
    title: "Gift Coupons",
    description:
      "Special discounts on gift items for your loved ones. Enjoy exclusive deals on luxury stays and premium amenities. Perfect for memorable getaways and romantic escapes.",
  },
  {
    type: "feature",
    icon: <FaSpa className="text-3xl text-green-500" />,
    title: "Luxury Spa",
    description:
      "Rejuvenate your senses with our luxury spa packages. Indulge in relaxing massages, facials, and wellness treatments that make your stay even more special.",
  },
  {
    type: "feature",
    icon: <FaUtensils className="text-3xl text-red-500" />,
    title: "Gourmet Dining",
    description:
      "Savor world-class cuisine crafted by our expert chefs. Enjoy a dining experience that ranges from casual to fine dining, with seasonal and local ingredients.",
  },
  {
    type: "feature",
    icon: <FaMountain className="text-3xl text-blue-500" />,
    title: "Scenic Views",
    description:
      "Enjoy breathtaking views from your room, whether it's mountain landscapes, ocean vistas, or lush gardens. Create unforgettable memories surrounded by natural beauty.",
  },
  {
    type: "feature",
    icon: <FaSwimmer className="text-3xl text-cyan-500" />,
    title: "Infinity Pool",
    description:
      "Take a refreshing dip in our luxurious infinity pool with stunning views. A perfect spot for relaxation, sunbathing, and unwinding in style.",
  },
  {
    type: "feature",
    icon: <FaWifi className="text-3xl text-indigo-500" />,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi throughout the property. Whether for work or leisure, enjoy seamless internet access during your stay.",
  },
  {
    type: "feature",
    icon: <FaConciergeBell className="text-3xl text-purple-500" />,
    title: "24/7 Concierge",
    description:
      "Our dedicated concierge team is available around the clock to assist you with reservations, travel arrangements, and special requests, ensuring a seamless experience.",
  },
  {
    type: "feature",
    icon: <FaCocktail className="text-3xl text-pink-500" />,
    title: "Exclusive Bar",
    description:
      "Relax at our exclusive bar with a selection of cocktails, wines, and spirits. Perfect for winding down after a day of exploring or simply enjoying a nightcap.",
  },
];

const GiftCoupons = () => {
  return (
    <div>
      {/* Feature Ads with Pulse Animation */}
      <div className="mt-10">
        {ads
          .filter((ad) => ad.type === "feature")
          .map((ad, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 m-2 gap-5 text-center flex flex-col items-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="pulse-icon"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                {ad.icon}
              </motion.div>
              <h4 className="text-lg font-semibold mt-4 text-gradient">
                {ad.title}
              </h4>
              <p className="text-gray-600 mt-2">{ad.description}</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default GiftCoupons;
