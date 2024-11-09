import React from "react";
import useTitle from "../../../Hooks/useTitle";
import usePayment from "../../../Hooks/usePayment";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Container from "../../Shared/Container";
import EmptyState from "../../Shared/EmptyState";
import BackNButton from "../../Button/BackButton";

import { format } from "date-fns";

const PaymentInfo = () => {
  useTitle("Pay-History");
  const [cart, refetch] = usePayment();

  // Sort the cart by date
  const sortedCart = [...cart].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Calculate total cost and count
  const totalCost = sortedCart.reduce((sum, item) => sum + item.price, 0);
  const totalCount = sortedCart.length;

  // Date formatting function
  const formatTime = (time) => {
    return new Date(time).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <Container>
      <SectionTitle subHeading="Aircnc" heading="Payment History" />
      {cart?.length > 0 ? (
        <div className="w-full px-32 py-5 border-b text-sm mt-10 lg:max-w-5xl max-w-xl overflow-x-auto">
          <table className="border table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Booking Range</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Host Name</th>
              </tr>
            </thead>
            <tbody>
              {sortedCart.map((item) => (
                <tr key={item._id}>
                  <td className="border px-10 py-2">{formatTime(item.date)}</td>
                  <td className="border px-10 py-2">{item.location}</td>
                  <td className="border px-10 py-2">
                    {format(new Date(item.from), "P")} to{" "}
                    {format(new Date(item.to), "P")}
                  </td>
                  <td className="border px-10 py-2">${item.price}</td>
                  <td className="border px-10 py-2">{item.hostname}</td>
                </tr>
              ))}
            </tbody>
            {/* Total Cost and Total Count Row */}
            <tfoot>
              <tr className="bg-gray-100 font-semibold">
                <td colSpan="3" className="border px-10 py-2 text-right">
                  Total Bookings:
                </td>
                <td colSpan="2" className="border px-10 py-2 text-left">
                  {totalCount}
                </td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td colSpan="3" className="border px-10 py-2 text-right">
                  Total Cost:
                </td>
                <td colSpan="2" className="border px-10 py-2 text-left">
                  ${totalCost.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <EmptyState
          message="You have no previous payment records."
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

export default PaymentInfo;
