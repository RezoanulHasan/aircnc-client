import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Reservation from './Reservation';
import useTitle from '../../../Hooks/useTitle';


const SingleRoom = () => {

const {id,image,bed,bedroom,bathroom,dateRange} =useLoaderData() ;
useTitle('Room Details');

    return (
        <>

        <div className='  m-10  col-span-4 flex flex-col gap-8'>

        <Header></Header>
        <div className='flex flex-col gap-2'>
          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div>Hosted by Rezoanul</div>
  
            <img
              className='rounded-full'
              height='60'
              width='50'
              alt='Avatar'
              src="https://i.ibb.co/K0y7s31/160099600-3757031334417758-3894304083960476350-n.jpg"
            />



          </div>
          <div
            className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
          >
             <div>Beds-{bed }</div>
            <div>Bedrooms-{bedroom}</div>
            <div>Bathroom-{bathroom}</div>
           
          </div>
        </div>
  
  <h1><span className='font-bold'>Booking Time:</span>  {dateRange}</h1>
        <hr />
        <div
          className='
          text-lg font-light text-neutral-500'
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eaque tempore alias autem beatae magni modi accusantium quod id distinctio cumque nostrum ut nisi earum eum pariatur blanditiis iusto tempora?
        </div>
        <hr />

        <Reservation></Reservation>

<div className='card-actions justify-center'>
<Link to='/'><button className="btn mt-36   w-52  btn-warning">

    Back to homepage

</button>  </Link>
</div>  
      </div>
     </>
    )
  }
export default SingleRoom;
