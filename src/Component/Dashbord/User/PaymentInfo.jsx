import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import usePayment from '../../../Hooks/usePayment';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

import { format } from 'date-fns';
import Container from '../../Shared/Container';
import EmptyState from '../../Shared/EmptyState';

const PaymentInfo = () => {
    useTitle("Pay-history");
    const [cart, refetch] = usePayment(); 
    const navigate = useNavigate();

    const back = () => {
      navigate(-1);
    };

    const sortedCart = [...cart].sort((a, b) => new Date(b.date) - new Date(a.date));

    const formatTime = (time) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(time).toLocaleDateString('en-US', options);
    };

    return (
        <>
            <Container>
                <SectionTitle subHeading="Aircnc"  heading="Payment History"/>

                <div className="w-full px-32 py-5 border-b text-sm  mt-10 lg:max-w-5xl max-w-xl overflow-x-auto">
                
                    <table className='border   table-auto bg-white shadow-lg rounded-lg'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='px-4 py-2'>Date</th>
                                <th className='px-4 py-2'>Location</th>
                                <th className='px-4 py-2'>Booking Range</th>
                                <th className='px-4 py-2'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedCart.map((item) => (
                                <tr key={item._id}>
                                    <td className='border px-10 py-2'>{formatTime(item.date)}</td>
                                    <td className='border px-10 py-2'>{item.location}</td>
                                    <td className='border px-10 py-2'>  {format(new Date(item.from), 'P')} to {format(new Date(item.to), 'P')}</td>
                                    <td className='border px-10 py-2'>${item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                    <div className='text-center mt-8'>
                        <button
                            onClick={back}
                            className='btn bg-rose-500 white mb-5 mt-5 center btn-lg '
                        >
                            Back
                        </button>
                    </div>
                </div>
            </Container>
            
            {cart.length === 0 ? (
                <EmptyState
                    message='No  data available.'
                    address='/'
                    label='Booked Rooms'
                />
            ) : null}
        </>
    );
};

export default PaymentInfo;
