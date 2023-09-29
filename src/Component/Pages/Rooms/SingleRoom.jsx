import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Reservation from './Reservation';
import useTitle from '../../../Hooks/useTitle';
import { format } from 'date-fns';
import Slider from '../Slider/Slider';
import Container from '../../Shared/Container';
import { Fade } from "react-awesome-reveal";

const SingleRoom = () => {
  useTitle('Room Details'),
    useEffect(() => { 

        window.scrollTo(0, 0);

    }, []); 


const {_id,image,
  guests,bedroom,bathroom,to, from,location,
  hostname,
  hostphotoURL,
  description} =useLoaderData() ;
useTitle('Room Details');
const [data, setData] = useState([]);
    return (
        <>

        <div className=' m-10  col-span-4 flex flex-col gap-8'>
        <Container>
        <Header></Header>

        <Fade direction="right"> 
        <div className='flex flex-col mt-5 gap-2'>
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
            <div>Hosted by -
{hostname}</div>
  
            <img
              className='rounded-full'
              height='60'
              width='50'
              alt='Avatar'
              src={hostphotoURL}
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
             <div>Guests-{guests}</div>
            <div>Bedrooms-{bedroom}</div>
            <div>Bathroom-{bathroom}</div>
           
          </div>
        </div>
  
  <h1 className=' text-xl'><span className='font-bold'>Booking Time:</span> 
   
     {format(new Date(from), 'P')} to ${format(new Date(to), 'P')}
 </h1></Fade> 
 </Container>    
  




<Slider></Slider>
      
        <hr />
        <Fade direction="left">

        <div
          className='
          text-lg font-light text-neutral-500'
        >
           {description}
        </div></Fade >
        <hr />



       
<Container>
        <Reservation></Reservation></Container>    

<div className='card-actions justify-center'>
<Link to='/'><button className="btn mt-36   w-52  bg-rose-500 text-white">

    Back to homepage

</button>  </Link>
</div>  
      </div>
     </>
    )
  }
export default SingleRoom;
