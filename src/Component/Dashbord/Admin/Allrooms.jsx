import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Allrooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch rooms data when the component mounts
    fetch('http://localhost:5000/rooms')
      .then(response => response.json())
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  const handleDelete = (room) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to delete ${room.location}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/rooms/${room._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount) {
              // Assuming you have a function to refetch rooms after deletion
              // refetch();
              setRooms(prevRooms => prevRooms.filter(r => r._id !== room._id));
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${room.location} has been deleted!`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl text-center mb-4">Total Rooms: {rooms.length}</h3>

      <div className="w-full px-32 py-5 border-b overflow-x-auto">

        <table className=" border border-gray-300">
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
            {rooms.map(room => (
              <tr key={room._id}>
                <td className="px-5">
                  <img src={room.image} alt={room.location} className="w-40 h-16  rounded-lg object-cover" />
                </td>
                <td className="py-2 px-4">{room.hostname}</td>
                <td className="py-2 px-4">{room.location}</td>
                <td className="py-2 px-4">{room.region}</td>
                <td className="py-2 px-4">{room.property}</td>
                <td className="py-2 px-4">{room.price}</td>
                <td className="py-2 px-4">
                  <button onClick={() => handleDelete(room)}>
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <Link to="/dashboard">
        <div className="card-actions justify-center">
          <button className="btn mt-20  mb-5 btn-outline bg-rose-500 text-white">Go Back</button>
        </div>
      </Link>

    </div>
  );
};

export default Allrooms;
