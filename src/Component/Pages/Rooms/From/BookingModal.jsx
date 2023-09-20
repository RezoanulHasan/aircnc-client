
import React from 'react';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const customStyles = {
  content: {
    inset: 'auto',
    maxWidth: '100%', // Updated for responsiveness
    width: '40%',
    height:'100%', // Added for responsiveness
    margin: 'auto',
    border: 'none',
    background: 'none',    overflow: 'visible',
 // Added for side scroll
    WebkitOverflowScrolling: 'touch',
    borderRadius: 'none',
    padding: '0',
    boxShadow: 'none',
    textAlign: 'left',
    position: 'center'
  },
};

Modal.setAppElement('#root'); // Set the root element for accessibility

const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
  
      contentLabel="Booking Modal"
   // Added for custom styling
    >
      <div className="bg-black text-white rounded-xl p-20 text-center mt-10 modal-content  ">

        <SectionTitle subHeading="Aircnc" heading={<>  Booking Now </>}></SectionTitle>
        <h3 className="  lg:text-xl  text-sm  font-medium text-center leading-6 text-yellow-400 hover:text-white">
          Review Info Before Reserve
        </h3>
        <div className="mt-2">
          <p className="lg:text-xl  text-sm hover:text-red-500 text-white">Location: {bookingInfo.location}</p>
        </div>
        <div className="mt-2">
          <p className="lg:text-xl  text-sm  hover:text-red-500 text-white">Your name: {bookingInfo?.guest.name}</p>
        </div>
        <div className="mt-2">
          <p className="lg:text-xl  text-sm hover:text-red-500 text-white">Email: {bookingInfo?.guest.email}</p>
        </div>
        <div className="mt-2">
          <p className=" lg:text-xl  text-sm   hover:text-red-500 text-white">
            From: {format(new Date(bookingInfo.from), 'PP')} - To:{' '}
            {format(new Date(bookingInfo.to), 'PP')}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-xl hover:text-red-500 text-white">Price: $ {bookingInfo.price}</p>
        </div>
        <hr className="mt-8" />

        <Elements stripe={stripePromise}>
          <CheckoutForm closeModal={closeModal} bookingInfo={bookingInfo} />
        </Elements>

      </div>
    </Modal>
  );
};

export default BookingModal;
