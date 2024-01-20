import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../Shared/Container";
const Discount = () => {
  const calculateTimeLeft = () => {
    const discountEndDate = new Date("2025-01-01"); // Set the end date of the discount
    const currentDate = new Date();
    const difference = discountEndDate - currentDate;

    if (difference <= 0) {
      // Discount has expired
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Container>
      <div className="flex flex-col items-center justify-center pt-16  ">
        <h3 className="text-3xl text-center mb-6">
          Get <span className="text-rose-500 text-5xl font-semibold">15%</span>{" "}
          Discount For All Accommodation to ,{" "}
          <span className="text-red-400  font-semibold">JAN 2025.</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="countdown-timer">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.days }}></span>
            </span>
            <span className="countdown-label">days</span>
          </div>
          <div className="countdown-timer">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.hours }}></span>
            </span>
            <span className="countdown-label">hours</span>
          </div>
          <div className="countdown-timer">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.minutes }}></span>
            </span>
            <span className="countdown-label">min</span>
          </div>
          <div className="countdown-timer">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.seconds }}></span>
            </span>
            <span className="countdown-label">sec</span>
          </div>
        </div>
        <Link
          to="/"
          className="btn hover:bg-white           bg-white text-rose-500 mt-6"
        >
          BookinG Now
        </Link>
      </div>
    </Container>
  );
};

export default Discount;
