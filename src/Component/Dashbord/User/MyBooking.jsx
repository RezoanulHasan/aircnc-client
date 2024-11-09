import React from "react";
import useTitle from "../../../Hooks/useTitle";
import usePayment from "../../../Hooks/usePayment";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import Container from "../../Shared/Container";
import EmptyState from "../../Shared/EmptyState";
import Swal from "sweetalert2";
import BackNButton from "../../Button/BackButton";

const MyBooking = () => {
  useTitle("My Booking");
  const [cart, refetch] = usePayment();
  const items = cart || [];

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/bookings/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <Container>
      <SectionTitle subHeading="Aircnc" heading="My Bookings" />
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {items.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 bg-white"
            >
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-200 hover:scale-105"
              />
              <h3 className="text-lg font-semibold mb-2">{item.location}</h3>
              <p className="text-gray-500">
                Booking Range: {format(new Date(item.from), "P")} -{" "}
                {format(new Date(item.to), "P")}
              </p>
              <p className="text-gray-500">Price: ${item.price}</p>
              <p className="text-gray-500">Email: {item.host}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleDelete(item)}
                  className="p-2 rounded-full text-red-600 hover:bg-red-100 transition-colors"
                >
                  <FaTrashAlt size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          message="No data available."
          address="/"
          label="Booked Rooms"
        />
      )}
      <div className="text-center mt-8">
        <BackNButton />
      </div>
    </Container>
  );
};

export default MyBooking;
