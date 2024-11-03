import React, { useContext, useState } from "react";
import Calender from "./Calender";
import Button from "../../Button/Button";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { formatDistance } from "date-fns";
import BookingModal from "./From/BookingModal";

const Reservation = () => {
  const {
    price,
    property,
    to,
    from,
    image,
    _id,
    email,
    location,
    hostname,
    hostphotoURL,
    booked,
  } = useLoaderData();

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const { user } = useContext(AuthContext);

  const totalPrice =
    parseFloat(formatDistance(new Date(to), new Date(from)).split(" ")[0]) *
    price;
  const discountedPrice = totalPrice * 0.85;

  const [value, setValue] = useState({
    startDate: new Date(from),
    endDate: new Date(to),
    key: "selection",
  });

  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: email,
    hostphotoURL: hostphotoURL,
    hostname: hostname,
    location: location,
    price: discountedPrice,
    to: value.endDate,
    from: value.startDate,
    roomId: _id,
    image: image,
  });

  const handleSelect = (ranges) => {
    setValue({ ...value });
  };

  return (
    <div className="">
      <div className="flex flex-col items-center text-center space-y-2 p-6 bg-custom text-white rounded-t-3xl">
        <div className="text-4xl font-semibold tracking-tight text-gradient">
          $ {price}/<span className="text-2xl"> Night</span>"
        </div>
      </div>

      <div className="flex justify-center p-4">
        <Calender handleSelect={handleSelect} value={value} />
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-custom rounded-b-3xl space-y-2">
        <div className="line-through text-white text-lg">
          Total: $ {totalPrice}
        </div>
        <div className="text-2xl font-semibold text-gradient">
          You Pay: ${discountedPrice}
        </div>

        <Button
          onClick={() => setIsOpen(true)}
          reloade={true}
          disabled={email === user.email || booked}
          label="Reserve Now"
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-lg font-semibold  transform transition-all duration-200 ease-in-out"
        />
      </div>

      <BookingModal
        bookingInfo={bookingInfo}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Reservation;
