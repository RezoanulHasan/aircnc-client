import React, { Component } from "react";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";

const ads = [
  {
    type: "highlight",
    icon: <AiFillHeart className="text-3xl text-red-500" />,
    title: "Customer Favorites",
    description:
      "Top-rated items chosen by our valued customers. Discover what's trending and enjoy popular picks that cater to every taste and style! From luxurious stays to exceptional amenities, these selections promise unforgettable experiences. Whether planning a weekend escape or a special celebration, these favorites are designed to impress. Explore now and find the perfect choice that meets all your expectations!",

    link: "/favorite",
  },
];

class Favorites extends Component {
  render() {
    return (
      <div>
        <div
          className="gap-6  mt-10"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          {ads
            .filter((ad) => ad.type === "highlight")
            .map((ad, index) => (
              <motion.div
                key={index}
                className=" rounded-lg shadow-lg p-6 flex items-center "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mr-20">{ad.icon}</div>
                <div>
                  <h4 className="text-2xl font-semibold text-center  text-gradient mb-6">
                    {ad.title}
                  </h4>
                  <p className="">{ad.description}</p>
                  <a
                    href={ad.link}
                    className="text-blue-600 hover:underline mt-2 block   text-2xl p-2"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
