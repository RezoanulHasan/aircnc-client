import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaBell,
  FaStar,
  FaRocket,
  FaTags,
  FaGift,
} from "react-icons/fa";

const ads = [
  {
    type: "banner",
    title: "Seasonal Sale!",
    description: "Up to 50% off on selected items. Hurry, limited time offer!",
    image: "/images/seasonal-sale.jpg",
    buttonText: "Shop Now",
    link: "/sale",
  },
  {
    type: "card",
    icon: <FaShoppingCart className="text-3xl text-blue-600" />,
    title: "New Arrivals",
    description: "Discover the latest trends in our collection.",
    buttonText: "Explore",
    link: "/new-arrivals",
  },
  {
    type: "feature",
    icon: <FaRocket className="text-3xl text-purple-600" />,
    title: "Fast Delivery",
    description: "Get your products delivered within 24 hours.",
  },
  {
    type: "feature",
    icon: <FaGift className="text-3xl text-yellow-600" />,
    title: "Gift Coupons",
    description: "Special discounts on gift items for your loved ones.",
  },
  {
    type: "cta",
    title: "Exclusive Membership",
    description:
      "Become a member today and enjoy exclusive benefits and discounts.",
    buttonText: "Join Now",
    link: "/membership",
    image: "/images/membership.jpg",
  },
  {
    type: "highlight",
    icon: <FaStar className="text-3xl text-red-500" />,
    title: "Customer Favorites",
    description: "Top-rated items chosen by our valued customers.",
    link: "/favorites",
  },
];

const AdvertisementPage = () => {
  return (
    <div className="container mx-auto mt-10 space-y-10 px-4 lg:px-0">
      {/* Banner Ad with Slide-in Animation */}
      {ads
        .filter((ad) => ad.type === "banner")
        .map((ad, index) => (
          <motion.div
            key={index}
            className="relative bg-cover bg-center rounded-md shadow-md text-white p-8 h-64 flex flex-col justify-center"
            style={{ backgroundImage: `url(${ad.image})` }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold">{ad.title}</h2>
            <p className="mt-2 text-lg">{ad.description}</p>
            <a
              href={ad.link}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg self-start"
            >
              {ad.buttonText}
            </a>
          </motion.div>
        ))}

      {/* Card Ads with Hover and Entrance Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads
          .filter((ad) => ad.type === "card")
          .map((ad, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div>{ad.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{ad.title}</h3>
              <p className="text-gray-600 mt-2">{ad.description}</p>
              <a
                href={ad.link}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                {ad.buttonText}
              </a>
            </motion.div>
          ))}
      </div>

      {/* Feature Ads with Pulse Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ads
          .filter((ad) => ad.type === "feature")
          .map((ad, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-md p-6 text-center flex flex-col items-center"
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
              <h4 className="text-lg font-semibold mt-4">{ad.title}</h4>
              <p className="text-gray-600 mt-2">{ad.description}</p>
            </motion.div>
          ))}
      </div>

      {/* Call-to-Action with Zoom Animation */}
      {ads
        .filter((ad) => ad.type === "cta")
        .map((ad, index) => (
          <motion.div
            key={index}
            className="relative bg-cover bg-center rounded-md shadow-md text-white p-8 h-64 flex flex-col justify-center items-start"
            style={{ backgroundImage: `url(${ad.image})` }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold">{ad.title}</h2>
            <p className="mt-2 text-lg">{ad.description}</p>
            <a
              href={ad.link}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
            >
              {ad.buttonText}
            </a>
          </motion.div>
        ))}

      {/* Highlight Ads with Fade-in Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ads
          .filter((ad) => ad.type === "highlight")
          .map((ad, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mr-4">{ad.icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{ad.title}</h4>
                <p className="text-gray-600">{ad.description}</p>
                <a
                  href={ad.link}
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default AdvertisementPage;
