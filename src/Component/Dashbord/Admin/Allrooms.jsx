import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import BackNButton from "../../Button/BackButton";

const Allrooms = () => {
  const [rooms, setRooms] = useState([]);
  useTitle("All Rooms");
  useEffect(() => {
    // Fetch rooms data when the component mounts
    fetch("https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms")
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  const handleDelete = (room) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${room.location}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms/${room?._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              // Assuming you have a function to refetch rooms after deletion
              // refetch();
              setRooms((prevRooms) =>
                prevRooms.filter((r) => r._id !== room._id)
              );
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${room?.location} has been deleted!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <SectionTitle
        subHeading="Aircnc  "
        heading={<> Total Rooms: {rooms?.length} </>}
      ></SectionTitle>

      <div className="w-full px-32 py-5 border-b overflow-x-auto">
        <table className=" border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Region</th>
              <th className="py-2 px-4">Property</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.map((room) => (
              <tr key={room?._id}>
                <td className="">
                  <Link
                    to={`/rooms/${room?._id}`}
                    className="col-span-1 cursor-pointer "
                  >
                    <img
                      src={room?.image}
                      alt={room?.location}
                      className="lg:w-40 w-full h-20 hover:py-5 hover:px-5 rounded-lg object-cover transition-transform transform scale-100 hover:scale-150 "
                    />
                  </Link>
                </td>
                <td className="border  text-center  px-10 py-2">
                  {room?.hostname}
                </td>
                <td className="border  text-center  px-10 py-2">
                  {room?.location}
                </td>
                <td className="border text-center  px-10 py-2">
                  {room?.region}
                </td>
                <td className="border   text-center px-10 py-2">
                  {room?.property}
                </td>
                <td className="border   text-center  px-10 py-2">
                  {room?.price}
                </td>
                <td className="border  text-center px-10 py-2">
                  <button onClick={() => handleDelete(room)}>
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BackNButton></BackNButton>
    </div>
  );
};

export default Allrooms;
