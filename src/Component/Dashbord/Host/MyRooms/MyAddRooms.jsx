import React from 'react';
import useRoom from './useRoom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';
import EmptyState from './../../../Shared/EmptyState';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';


const MyAddRooms = () => {
  const [card, refetch] = useRoom();
  const rooms = card || [];
  useTitle("My Room");

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
        fetch(`https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms/${room._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount) {
              refetch();
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
    
    <SectionTitle subHeading="Aircnc  "  heading={<>Total Rooms:  {rooms.length} </>}>

</SectionTitle>
      {rooms.length > 0 ? (
        <div className="w-full px-32 py-5 border-b overflow-x-auto">
          <table className=" border  bg-white shadow-lg rounded-lg ">
            <thead>
              <tr className='bg-gray-200' >
                <th className="py-2 px-4 ">Image</th> 
                <th className=" py-2 px-4 ">Location</th>
                <th className="py-2 px-4  ">Region</th>
                <th className=" py-2 px-4 ">Property</th>
                <th className=" py-2 px-4">Price</th>
                <th className=" py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map(room => (
                <tr key={room._id}>


                  <td className="">
                  <Link to={`/rooms/${room._id}`} className='col-span-1 cursor-pointer '>

                    <img src={room.image} alt={room.location} className="lg:w-40 w-full h-20 hover:py-5 hover:px-5 rounded-lg object-cover transition-transform transform scale-100 hover:scale-150 "  /></Link>

                  </td>
                  <td className="border   text-center  px-10 py-2  ">{room.location}</td>
                  <td className="border text-center px-10 py-2 ">{room.region}</td>
                  <td className=" border   text-center px-10 py-2">{room.property}</td>
                  <td className="border   text-center px-10 py-2 ">{room.price}</td>
                  <td className="border px-10 py-2  ">
                    <button onClick={() => handleDelete(room)}>
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState
          message='No Room data available.'
          address='/dashboard/addrooms'
          label='Add Rooms'
        />
      )}

      <Link to="/dashboard">
        <div className="card-actions justify-center">
          <button className="btn mt-20 mb-5 btn-outline bg-rose-500 text-white">Go Back</button>
        </div>
      </Link>
    </div>
  );
};

export default MyAddRooms;