import React from 'react';
import { FcHome,FcFactory  ,FcDepartment} from "react-icons/fc";
import { FaHotel,FaWarehouse,   FaRecordVinyl,FaUmbrellaBeach } from "react-icons/fa";
import {AiTwotoneBank} from "react-icons/ai";

import Marquee from "react-fast-marquee";

const Property= () => {
    return (
     <Marquee  speed={150} >          
<div className='mt-20 grid  grid-cols-8  gap-2 p-1 '>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl'><FcHome/></h1>
<h1 className='mt-6 font-bold'>House</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500  '><FaWarehouse
/></h1>
<h1 className='mt-6 font-bold '>Apartments</h1>
</div>

</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl'><FcDepartment
/></h1>
<h1 className='mt-6 font-bold'>Guest Houses</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500 '><FaHotel
/></h1>
<h1 className='mt-6 font-bold'>Hotels</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500 '><FcFactory/></h1>
<h1 className='mt-6 font-bold'>Rooms</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit border-solid border-2 hover:border-black'>
  <div className='m-8'>
    <h1 className='text-4xl text-rose-500'>< FaRecordVinyl/></h1>
    <h1 className='mt-6 font-bold'>Motel</h1>
  </div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit border-solid border-2 hover:border-black'>
  <div className='m-8'>
    <h1 className='text-4xl text-rose-500'><FaUmbrellaBeach/></h1>
    <h1 className='mt-6 font-bold'>Resort</h1>
  </div>
</div>


<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500'><AiTwotoneBank/></h1>
<h1 className='mt-6 font-bold'>Villas</h1>
</div>
</div>

</div>
  
        </Marquee>  
    );
};

export default Property;