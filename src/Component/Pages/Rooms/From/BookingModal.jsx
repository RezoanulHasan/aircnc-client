import React from "react";
import Modal from "react-modal";
import { format } from "date-fns";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import TestPinInfo from "./TestPinInfo";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

Modal.setAppElement("#root");

const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Booking Modal"
      className="flex items-center justify-center mt-32"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
    >
      <div className="bg-white text-gray-800 rounded-lg shadow-2xl w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-6 sm:p-8 md:p-10 lg:p-12 relative border border-gray-200 mx-4 sm:mx-8 lg:mx-16">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors text-lg sm:text-xl"
          aria-label="Close Modal"
        >
          ✕
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[60vh] overflow-y-auto pr-4">
          {/* Review Information */}
          <div className="space-y-4 text-left mt-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gradient">
              Confirm Your Booking Details
            </h3>

            <hr className="my-6 border-gray-300" />
            <div className="relative p-4">
              <img
                src={bookingInfo.image}
                alt="Property"
                className="w-full h-48 rounded-lg object-cover shadow-md"
              />
            </div>
            <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg">
              <span className="text-gray-900">Location:</span>{" "}
              {bookingInfo.location}
            </p>
            <p className="text-gray-700 text-sm sm:text-base ">
              <span className="font-medium text-gray-900">Your Name:</span>{" "}
              {bookingInfo?.guest.name}
            </p>
            <p className="text-gray-700 text-sm sm:text-base ">
              <span className="font-medium text-gray-900">Email:</span>{" "}
              {bookingInfo?.guest.email}
            </p>
            <p className="text-lg sm:text-xl font-semibold  text-gradient">
              <span className="font-medium">Dates:</span>{" "}
              {format(new Date(bookingInfo.from), "PP")} -{" "}
              {format(new Date(bookingInfo.to), "PP")}
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gray-900">
              Price:{" "}
              <span className="text-green-500">${bookingInfo.price}</span>
            </p>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold mb-4 mt-6 text-center">
            100% Safe and Secure Checkout
          </p>
          <div className="flex justify-center mb-4">
            <img
              src="https://support.mywifinetworks.com/hc/article_attachments/360055906133/5e1cce2c96d1d.png"
              alt="payment methods"
              className="max-w-xs w-full sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
          {/* Stripe Checkout Form */}
          <Elements stripe={stripePromise}>
            <CheckoutForm closeModal={closeModal} bookingInfo={bookingInfo} />
          </Elements>
          <TestPinInfo></TestPinInfo>{" "}
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
