import React from 'react';
import Calender from './Calender';
import Button from "../../Button/Button"
import { useLoaderData } from 'react-router-dom';

const Reservation = () => {
    const {id,price,property} =useLoaderData() ;
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
          <div className='flex  flex-row text-center   justify-center items-center gap-1 p-4'>
            <div className='text-2xl  text-center font-semibold'>${price}-</div>
             
            <div className='font-light text-center  text-neutral-700'> night</div>
          </div>
          <hr />

          <div className='flex  justify-center items-centere'>
          <Calender />
          </div>
          <hr />

          <div className='p-4'>
            <Button label='Reserve' />
          </div>
          <hr />
          <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
            <div>Total</div>
            <div>$ {"price"}</div>
          </div>
        </div>
      )
    }
export default Reservation;