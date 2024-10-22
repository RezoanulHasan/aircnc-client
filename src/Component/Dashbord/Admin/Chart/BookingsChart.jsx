// BookingsChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BookingsChart = ({ bookings }) => {
  const data = {
    labels: ["Confirmed Bookings", "Pending Bookings"],
    datasets: [
      {
        label: "Bookings",
        data: bookings, // Should be an array of confirmed and pending booking counts
        backgroundColor: ["rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
        borderColor: ["rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="my-8">
      <Doughnut data={data} />
    </div>
  );
};

export default BookingsChart;
