import React, { useState, useEffect } from 'react';
import { FcHome,  FcDepartment
} from "react-icons/fc";

import { FaHotel,FaWarehouse} from "react-icons/fa";
const Modals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the specified URL
    fetch('http://localhost:5000/rooms')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store the fetched data in state
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  // Filter the data to count the number of each type of room
  const allTypeCount = data.length;
  const roomCount = data.filter((item) => item.type === 'room').length;
  const homeCount = data.filter((item) => item.type === 'home').length;
 

  return (
    <div>
      
  
          <div className='modal-content'>
            <h2 className='mt-20 font-bold'>   Type of place</h2>
            <p className='mb-10'>Search rooms, entire homes, or any type of place.</p>

        
            <div className=" shadow lg:mx-20 ">
  <div className="join-item btn  w-72 h-20   rounded-md border-color: inherit  border-solid border-2 hover:border-white  hover:bg-black  hover:text-white    ">All type- {allTypeCount}
  </div>
  <div className="join-item btn  w-72 h-20  rounded-md border-color: inherit  border-solid border-2 hover:border-white  hover:bg-black  hover:text-white      "> Room- {roomCount}
  </div>
  <div className="join-item btn  w-72 h-20  rounded-md border-color: inherit  border-solid border-2 hover:border-white hover:bg-black  hover:text-white     ">  Home -{homeCount}
  </div>

</div>





 <h1 className='mt-20 mb-5 font-bold'>Rooms and beds</h1>
 <h1 className='mt-10 mb-5 font-bold'> Bedroom</h1>

<div className='lg:mx-20 m-0 grid  lg:grid-cols-9  md:grid-cols-6  sm:grid-cols-5 grid-cols-4  lg:gap-0 md:gap-0  gap-5'>
<button className="w-14 h-10 rounded-full bg-black text-white  border-color: inherit  border-solid border-2 hover:border-black">Any</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white ">1</button>
<button className=" w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">2</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">3</button>
<button className="w-14 h-10  rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">4</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white">5</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white  ">6</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white">7+</button>
</div>


<h1 className='mt-10 mb-5 font-bold'>Beds</h1>
<div className='lg:mx-20 m-0 grid  lg:grid-cols-9  md:grid-cols-6  sm:grid-cols-5 grid-cols-4  lg:gap-0 md:gap-0  gap-5'>
<button className="w-14 h-10 rounded-full bg-black text-white  border-color: inherit  border-solid border-2 hover:border-black">Any</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white ">1</button>
<button className=" w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">2</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">3</button>
<button className="w-14 h-10  rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">4</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white">5</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white  ">6</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white">7+</button>
</div>




<h1 className='mt-10 mb-5 font-bold'>Bathrooms</h1>
<div className='lg:mx-20 m-0 grid  lg:grid-cols-9  md:grid-cols-6  sm:grid-cols-5 grid-cols-4  lg:gap-0 md:gap-0  gap-5'>
<button className="w-14 h-10 rounded-full bg-black text-white  border-color: inherit  border-solid border-2 hover:border-black">Any</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white ">1</button>
<button className=" w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">2</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">3</button>
<button className="w-14 h-10  rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white ">4</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white">5</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black hover:bg-black  hover:text-white  ">6</button>
<button className="w-14 h-10 rounded-full  border-color: inherit  border-solid border-2 hover:border-black  hover:bg-black  hover:text-white">7+</button>
</div>








<h1 className='mt-20 mb-5 font-bold'>Property type</h1>
<div className='lg:mx-20 m-0 grid  lg:grid-cols-4 grid-cols-2 '>

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
<h1 className='mt-6 font-bold '>Apartment</h1>
</div>

</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl'><FcDepartment
/></h1>
<h1 className='mt-6 font-bold'>Guest House</h1>
</div>
</div>

<div className='w-40 h-40 rounded-md border-color: inherit  border-solid border-2 hover:border-black'>
<div className='m-8'>
<h1 className='text-4xl text-rose-500 '><FaHotel
/></h1>
<h1 className='mt-6 font-bold'>Hotel</h1>
</div>
</div>


</div>



            {/* Additional Close Button */}
            <div className='card-actions justify-end mt-80'>
              <button className='btn btn-outline mx-2'>Show data</button>

             
            </div>
          </div>





      


     
    </div>
  );
};

export default Modals;

