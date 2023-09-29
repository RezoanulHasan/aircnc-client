//import React, { useState } from 'react';
import { FcHome,FcFactory  ,FcDepartment} from "react-icons/fc";
import { FaHotel,FaWarehouse,   FaRecordVinyl,FaUmbrellaBeach } from "react-icons/fa";
import {AiTwotoneBank} from "react-icons/ai";

import Marquee from "react-fast-marquee";
//import { useEffect } from 'react';

const Property= () => {


  //const [data, setData] = useState([]);
 // useEffect(() => {
    // Fetch data from the specified URL
      // fetch('https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms')
       //  .then((response) => {
       //    if (!response.ok) {
          //   throw new Error('Network response was not ok');
       //    }
        //   return response.json();
     //    })
     //    .then((data) => {
       //    setData(data); // Store the fetched data in state
      //   })
       //  .catch((error) => {
        //   console.error('Fetch error:', error);
       //  });
   //  }, []);
  // 
  // Filter the data to count the number of each type of room
   //  const allTypeCount = data.length;
    // const roomCount = data.filter((item) => item.type === 'room').length;
    // const homeCount = data.filter((item) => item.type === 'home').length;



    return (
     <Marquee  speed={150} >          
<div className='mt-2 mb-2 grid  text-white grid-cols-8  gap-2 p-1  '>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl'><FcHome/></h1>
<h1 className='mt-6 font-bold'>House  400+</h1>

</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500  '><FaWarehouse
/></h1>
<h1 className='mt-6 font-bold '>Apartments  500+</h1>
</div>

</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl'><FcDepartment
/></h1>
<h1 className='mt-6 font-bold'>Guest Houses  300+</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500 '><FaHotel
/></h1>
<h1 className='mt-6 font-bold'>Hotels  500+</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500 '><FcFactory/></h1>
  
<h1 className='mt-6 font-bold'>Rooms   300+</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit border-solid border-2 hover:border-black'>
  <div className='m-8'>
    <h1 className='text-4xl text-rose-500'>< FaRecordVinyl/></h1>
    <h1 className='mt-6 font-bold'>Motel  500+</h1>
  </div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit border-solid border-2 hover:border-black'>
  <div className='m-8'>
    <h1 className='text-4xl text-rose-500'><FaUmbrellaBeach/></h1>
    <h1 className='mt-6 font-bold'>Resort   300+</h1>
  </div>
</div>


<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500'><AiTwotoneBank/></h1>
<h1 className='mt-6 font-bold'>Villas    200+</h1>
</div>
</div>

</div>
  
        </Marquee>  
    );
};

export default Property;