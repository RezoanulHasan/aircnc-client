import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import usePayment from '../../../Hooks/usePayment';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import Container from '../../Shared/Container';
import EmptyState from '../../Shared/EmptyState';
import Swal from "sweetalert2";
const  MyBooking = () => {
    useTitle("Pay-history");
    const [cart, refetch] = usePayment(); 
    const  item = cart || [];

    const navigate = useNavigate();

    const back = () => {
      navigate(-1);
    };
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <>
            <Container>
                <SectionTitle subHeading="Aircnc"  heading="Booking List"/>
                {cart.length > 0 ? (
                <div className="w-full px-32 py-5 border-b text-sm  mt-10 lg:max-w-5xl max-w-xl overflow-x-auto">
                
                    <table className='border   table-auto bg-white shadow-lg rounded-lg'>
                        <thead>
                            <tr className='bg-gray-200'>
                            <th className='px-4 py-2'>Image</th>
                                    <th className='px-4 py-2'>Location</th>
                                <th className='px-4 py-2'>Booking Range</th>
                                <th className='px-4 py-2'>Price</th>
                                <th className='px-4 py-2'>Email</th>
                                <th className='px-4 py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item._id}>
                                  <td className="">
                                    <img src={item.image} alt={item.location} className="lg:w-40 w-full h-20 hover:py-5 hover:px-5 rounded-lg object-cover transition-transform transform scale-100 hover:scale-150 " />
                                  </td>
                                  <td className='border px-10 py-2'>{item.location}</td>
                                  <td className='border px-10 py-2'>  {format(new Date(item.from), 'P')} to {format(new Date(item.to), 'P')}</td>
                                  <td className='border px-10 py-2'>${item.price}</td>
                                  <td className='border px-10 py-2'>{item.host}</td>
                              
                                  <td className="border px-10 py-2  ">
                                    <button onClick={() => handleDelete(item)}>
                                      <FaTrashAlt className="text-red-500" />
                                    </button>
                                  </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />

                    <hr />  
                    </div>
                ) : (
                    <EmptyState
                        message='No data available.'
                        address='/'
                        label='Booked Rooms'
                    />
                )}
                <div className='text-center mt-8'>
                    <button
                        onClick={back}
                        className='btn bg-rose-500 text-white mb-5 mt-5 center btn-lg '
                    >
                        Back
                    </button>
                </div>
            </Container>
        </>
    );
                }
export default MyBooking;
