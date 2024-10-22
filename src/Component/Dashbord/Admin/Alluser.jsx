import React from "react";
import { FaUserShield, FaTrashAlt } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import Container from "../../Shared/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import BackNButton from "../../Button/BackButton";

const AllUsers = () => {
  useTitle("All Users");

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/users/admin/${user?._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeHost = (user) => {
    fetch(
      `https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/users/host/${user?._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is a Host Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${user?.name}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/users/${user?._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} has been deleted!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <Container>
      <div className="mb-10">
        <SectionTitle
          subHeading="Aircnc"
          heading={<>All Users: {users?.length}</>}
        ></SectionTitle>

        <div className="w-full px-5 py-5 lg:max-w-5xl max-w-xl mx-auto overflow-x-auto border shadow-lg rounded-lg">
          <table className="min-w-full table-auto bg-white rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6">No.</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Role</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user?._id} className="text-center border-t">
                  <td className="py-4 px-6 text-blue-500">{index + 1}</td>
                  <td className="py-4 px-6">
                    {user?.name || user?.displayName}
                  </td>
                  <td className="py-4 px-6">{user?.email}</td>
                  <td className="py-4 px-6">
                    {user?.role === "admin" ? (
                      <span className="text-green-600 font-semibold">
                        Admin
                      </span>
                    ) : user?.role === "host" ? (
                      <span className="text-yellow-600 font-semibold">
                        Host
                      </span>
                    ) : (
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                          Admin <FaUserShield className="inline ml-1" />
                        </button>
                        <button
                          onClick={() => handleMakeHost(user)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition duration-300"
                        >
                          Host <FcBusinessman className="inline ml-1" />
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDelete(user)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <BackNButton />
        </div>
      </div>
    </Container>
  );
};

export default AllUsers;
