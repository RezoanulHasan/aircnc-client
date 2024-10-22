// UsersChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const UsersChart = ({ users }) => {
  const data = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        label: "Users",
        data: users, // Should be an array of active and inactive user counts
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="my-8">
      <Pie data={data} />
    </div>
  );
};

export default UsersChart;
