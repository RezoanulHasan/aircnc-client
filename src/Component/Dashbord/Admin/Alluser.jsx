import React from 'react';
import { FaUserShield ,FaTrashAlt} from 'react-icons/fa';
import {FcBusinessman } from "react-icons/fc";
import { useQuery } from 'react-query';
import Swal from "sweetalert2";
import useTitle from '../../../Hooks/useTitle';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import Container from '../../Shared/Container';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
const AllUsers = () => {

    useTitle("All Users");

const navigate = useNavigate();
 
    const handleBack = () => {
      navigate(-1);
    };


    const [axiosSecure] = useAxiosSecure(); 
    const { data: users = [], refetch } = useQuery(['users'], async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    });
  
    const handleMakeAdmin = user => {
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    };
  
    const handleMakeHost = user => {
      fetch(`http://localhost:5000/users/host/${user._id}`, {
        method: 'PATCH'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an host Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    };
  
    const handleDelete = user => {
      Swal.fire({
        title: 'Are you sure?',
        text: `You want to delete ${user.name}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }).then(result => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${user._id}`, {
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
                  title: `${user.name} has been deleted!`,
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
        }
      });
    };
  
    return (
<Container>
     
  <div className=" mb-10 bg-black ">
  
    <SectionTitle subHeading="Aircnc  "  heading={<>All Users: {users.length} </>}></SectionTitle>

    <div className="w-full px-32 py-5 border-b text-sm  mt-10 lg:max-w-5xl max-w-xl overflow-x-auto">
  <table className="border table-auto">
    <thead>
      <tr className="bg-gray-100 text-blue-500">
        <th className="py-2 px-4">No.</th>
        <th className="py-2 px-4">Name</th>
        <th className="py-2 px-4">Email</th>
        <th className="py-2 px-4">Role</th>
        <th className="py-2 px-4">Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user._id}>
          <td className="py-2 px-4 text-green-400">{index + 1}</td>
          <td className="py-2 px-4 text-red-400">{user?.name || user?.displayName}</td>
          <td className="py-2 px-4 text-yellow-400">{user.email}</td>
          <td className="py-2 px-4 text-green-600  text-center text-xl font-bold">
            {user.role === 'admin' ? (
              'Admin'
            ) : user.role === 'host' ? (
              'Host'
            ) : (
              <div className="space-x-2 space-y-2">
                <button
                  onClick={() => handleMakeAdmin(user)}
                  className="btn btn-outline btn-warning text-white"
                >
                  Admin <FaUserShield />
                </button>
                <button
                  onClick={() => handleMakeHost(user)}
                  className="btn btn-info btn-outline text-white"
                >
                  Host <FcBusinessman/>
                </button>
              </div>
            )}
          </td>
          <td className="py-2 px-4">
            <button
              onClick={() => handleDelete(user)}
              className="btn btn-ghost bg-red-600 text-white"
            >
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<div className="card-actions justify-center">
      <button  className="btn mt-10  mb-5 btn-outline bg-rose-500   text-white" onClick={handleBack}>Go Back</button>   
      </div>


</div>
  





</Container>
  
    );
  };
  
  export default AllUsers;
  