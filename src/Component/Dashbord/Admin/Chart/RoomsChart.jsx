// RoomsChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const RoomsChart = ({ rooms }) => {
  const data = {
    labels: ["Available Rooms", "Booked Rooms"],
    datasets: [
      {
        label: "Rooms",
        data: rooms, // Should be an array of available and booked room counts
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 159, 64, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="my-8">
      <Bar data={data} />
    </div>
  );
};

export default RoomsChart;
