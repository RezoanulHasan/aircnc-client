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

  // Price Calculation
  const totalPrice =
    parseFloat(formatDistance(new Date(to), new Date(from)).split(" ")[0]) *
    price;

  const discountedPrice = totalPrice * 0.85;

  const [value, setValue] = useState({
    startDate: new Date(from),
    endDate: new Date(to),
    key: "selection",
  });

  // Booking state
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
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">per Night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender handleSelect={handleSelect} value={value} />
      </div>

      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={email === user.email || booked}
          label="Reserve"
        />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div className="inline line-through"> Price:$ {totalPrice}</div>

        <h1>Pay :{discountedPrice} $</h1>
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
