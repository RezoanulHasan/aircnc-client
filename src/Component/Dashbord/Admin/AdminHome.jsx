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
    return <div>Loading...</div>;
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
      <h2 className="text-4xl font-bold mb-6 text-gray-700">
        Welcome, {user?.displayName}!
      </h2>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mb-10">
        {/* Revenue Card */}
        <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-lg rounded-lg p-6 text-white">
          <div className="flex items-center">
            <div className="text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-12 h-12"
                aria-label="Revenue Icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg">Revenue</h3>
              <p className="text-2xl font-bold">${stats?.revenue}</p>
              <p className="text-sm">Current Month</p>
            </div>
          </div>
        </div>

        {/* Users Card */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 shadow-lg rounded-lg p-6 text-white">
          <div className="flex items-center">
            <div className="text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-12 h-12"
                aria-label="Users Icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg">All Users</h3>
              <p className="text-2xl font-bold">{stats?.users}</p>
              <p className="text-sm">↗︎ 400 (22%)</p>
            </div>
          </div>
        </div>

        {/* Rooms Card */}
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 shadow-lg rounded-lg p-6 text-white">
          <div className="flex items-center">
            <div className="text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-12 h-12"
                aria-label="Rooms Icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg">All Rooms</h3>
              <p className="text-2xl font-bold">{stats?.rooms}</p>
              <p className="text-sm">↗︎ (50%)</p>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg rounded-lg p-6 text-white">
          <div className="flex items-center">
            <div className="text-6xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-12 h-12"
                aria-label="Booking Icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg">Booking</h3>
              <p className="text-2xl font-bold">{stats?.booking}</p>
              <p className="text-sm">↘︎ (14%)</p>
            </div>
          </div>
        </div>
      </div>
      <ChatBase></ChatBase>
      {/* Chart Component */} {/* Chart Components */}
      <RevenueChart revenue={[5000, 6000, 7000, 8000]} />{" "}
      {/* Example revenue data for weeks */}
      <UsersChart users={[70, 30]} />{" "}
      {/* Example user data for active and inactive */}
      <RoomsChart rooms={[20, 30]} />{" "}
      {/* Example room data for available and booked */}
      <BookingsChart bookings={[40, 10]} />{" "}
      {/* Example booking data for confirmed and pending */}
    </div>
  );
};

export default AdminHome;
