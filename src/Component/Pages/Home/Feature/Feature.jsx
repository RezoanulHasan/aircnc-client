import {
  FaShippingFast,
  FaUndo,
  FaLock,
  FaHeadset,
  FaGlobe,
  FaCrown,
  FaDollarSign,
  FaUserCheck,
  FaBolt,
  FaGift,
  FaClock,
  FaStar,
  FaMapMarkedAlt,
  FaCreditCard,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLock />,
    title: "Secure Payment",
    description: "Your money is safe",
  },
  {
    icon: <FaHeadset />,
    title: "Support 24/7",
    description: "Live contact / message",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description: "Book rooms worldwide",
  },
  {
    icon: <FaCrown />,
    title: "Luxury Rooms",
    description: "Top-notch facilities",
  },
  {
    icon: <FaDollarSign />,
    title: "Affordable Pricing",
    description: "Comfort within budget",
  },
  {
    icon: <FaUserCheck />,
    title: "Personalized Booking",
    description: "Tailored to your needs",
  },
  { icon: <FaBolt />, title: "Instant Booking", description: "Book instantly" },
  {
    icon: <FaGift />,
    title: "Exclusive Deals",
    description: "Special offers just for you",
  },
  {
    icon: <FaClock />,
    title: "Flexible Check-in",
    description: "Check in anytime",
  },
  {
    icon: <FaStar />,
    title: "Quality Service",
    description: "Best-in-class service",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Prime Locations",
    description: "Access prime spots",
  },
  {
    icon: <FaCreditCard />,
    title: "Easy Payments",
    description: "Hassle-free transactions",
  },
];

const Feature = () => {
  return (
    <div
      className="mt-14 lg:mt-20 border border-gray-100 rounded-md w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 py-6 px-6 lg:p-8"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {features.map((feature, index) => (
        <div key={index} className="flex space-x-4 items-center">
          <div className="text-2xl text-custom-black">{feature.icon}</div>
          <div>
            <h2 className="text-sm font-semibold text-custom-black uppercase">
              {feature.title}
            </h2>
            <p className="text-sm text-gray-600 font-thin">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
