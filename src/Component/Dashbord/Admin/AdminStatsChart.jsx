// AdminStatsChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const AdminStatsChart = ({ stats }) => {
  const data = {
    labels: ["Revenue", "Users", "Rooms", "Bookings"],
    datasets: [
      {
        label: "Current Month",
        data: [stats.revenue, stats.users, stats.rooms, stats.booking],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Admin Statistics",
      },
    },
  };

  return (
    <div className="my-8">
      <Bar data={data} options={options} />
    </div>
  );
};

export default AdminStatsChart;
