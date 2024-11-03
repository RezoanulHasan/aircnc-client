// AdminHome.js
import React from "react";
import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

import ChatBase from "./ChatBase";
import RevenueChart from "./Chart/RevenueChart";
import UsersChart from "./Chart/UsersChart";
import RoomsChart from "./Chart/RoomsChart";
import BookingsChart from "./Chart/BookingsChart";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: stats = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res?.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-gray-700">
        Loading...
      </div>
    );
  }

  if (isError) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to load stats. Please try again later.",
    });
    return null;
  }

  return (
    <div className="w-full p-8 mb-10">
      <h2 className="text-4xl font-semibold mb-8 text-gray-800">
        Welcome, {user?.displayName}!
      </h2>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mb-12">
        {/* Revenue Card */}
        <StatCard
          title="Revenue"
          value={`$${stats?.revenue}`}
          description="Current Month"
          gradientFrom="from-blue-500"
          gradientTo="to-purple-500"
          iconPath="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />

        {/* Users Card */}
        <StatCard
          title="All Users"
          value={stats?.users}
          description="↗︎ 400 (22%)"
          gradientFrom="from-teal-500"
          gradientTo="to-green-400"
          iconPath="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />

        {/* Rooms Card */}
        <StatCard
          title="All Rooms"
          value={stats?.rooms}
          description="↗︎ (50%)"
          gradientFrom="from-pink-500"
          gradientTo="to-orange-500"
          iconPath="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />

        {/* Booking Card */}
        <StatCard
          title="Bookings"
          value={stats?.booking}
          description="↘︎ (14%)"
          gradientFrom="from-yellow-500"
          gradientTo="to-red-500"
          iconPath="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </div>

      <ChatBase />

      {/* Charts */}
      <div className="grid gap-8 md:grid-cols-2 mt-12">
        <RevenueChart revenue={[5000, 6000, 7000, 8000]} />
        <RoomsChart rooms={[20, 30]} /> <UsersChart users={[70, 30]} />
        <BookingsChart bookings={[40, 10]} />
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  description,
  gradientFrom,
  gradientTo,
  iconPath,
}) => (
  <div
    className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} shadow-md rounded-lg p-6 flex items-center text-white transition-transform transform hover:scale-105`}
  >
    <div className="text-5xl mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={iconPath}
        />
      </svg>
    </div>
    <div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-3xl font-semibold">{value}</p>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  </div>
);

export default AdminHome;
