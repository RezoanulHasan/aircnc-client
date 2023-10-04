
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Shared/Container';
import Spinner from '../../Shared/Spinner/Spinner';
import { useSearchParams } from 'react-router-dom';
import Heading from '../../Heading/Heading';
import HeartButton from '../../Button/HeartButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetRandomColor from '../../../Hooks/GetRandomColor';
import { Fade } from "react-awesome-reveal";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [guests, setGuests] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [regions, setRegions] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms')
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);

  const filteredRooms = rooms
    .filter((room) =>
      room.location.toLowerCase().includes(region.toLowerCase())
    )
    .filter((room) => {
      if (!priceRange) return true;
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      return room.price >= minPrice && room.price <= maxPrice;
    })
    .filter((room) => {
      if (!propertyType) return true;
      return room.property.toLowerCase() === propertyType.toLowerCase();
    })
    .filter((room) => {
      if (!regions) return true;
      return room.region.toLowerCase() === regions.toLowerCase();
    })
    .filter((room) => {
      if (!bedroom) return true;
      return room.bedroom === parseInt(bedroom, 10);
    })
    .filter((room) => {
      if (!guests) return true;
      return room.guests === parseInt(guests, 10);
    })
    .filter((room) => {
      if (!bathroom) return true;
      return room.bathroom === parseInt(bathroom, 10);
    });

  const displayedRooms = showAll ? filteredRooms : filteredRooms.slice(0, 20);



  return (
    <Container>
    <Fade direction="down">

   


      <div className=' lg:mx-20 mx-0 overflow-x-auto mt-10 border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer  bg-white'>
        <div className='flex flex-row items-center justify-between bg-rose-100 gap-3'>
          <input
            id='region'
            type='text'
            placeholder='Search by location'
            className='p-2 w-auto border border-gray-300 rounded-full'
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          <select
            id='price'
            className='p-2 border text-center border-gray-300 rounded-full'
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value=''> Price</option>
            <option value='1-500'>$100 - $500</option>
            <option value='501-1000'>$501 - $1000</option>
            <option value='1001-9000'>Over $1001</option>
          </select>



      
      
          <select
            id='type'
            className='p-2 border text-center  border-gray-300 rounded-full'
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value=''> Property</option>


            <option value='Guest House'> Guest House </option>


            <option value='Apartment'>Apartment</option>
            <option value='Villa'>Villa</option>
           
            <option value='Hotel'>Hotel</option>

            <option value='House'>House</option>
          </select> 










<select
            id='regions'
            className='p-2 border text-center  border-gray-300 rounded-full'
            value={regions}
            onChange={(e) => setRegions(e.target.value)}
          >
            <option value=''>Region</option>
            <option value='USA'>USA</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Africa'>Africa</option>
            <option value='Russia'>Russia</option>
           <option value='Australia'>Australia</option>
           <option value='Antarctica'>Antarctica</option>
            <option value='Mriddle East'>Middle East</option>
         
          </select>

      

          <select
            id='bedroom'
            className='p-2 border text-center border-gray-300 rounded-full'
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          >
            <option value=''>Bed-Room</option>
            <option value='1'>1</option>
            <option  value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7-1000'>7+</option>
          </select>


          <select
            id='bed'
            className='p-2 border text-center border-gray-300 rounded-full'
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value=''>Guest</option>
            <option value='1'>1</option>
            <option  value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7-1000'>7+</option>
          </select>

 <select
            id='bathroom'
            className='p-2 border text-center border-gray-300 rounded-full'
            value={bathroom}
            onChange={(e) => setBathroom(e.target.value)}
          >
            <option value=''>Bathroom</option>
            <option value='1'>1</option>
            <option  value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7-1000'>7+</option>
          </select>
        </div>
      </div>
      </Fade>
      {loading ? (
        <Spinner />
        ) : displayedRooms.length > 0 ? (
          <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
            {displayedRooms.map((room) => (
              <ShowRoomData key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className='pt-12'>
            <Heading
              title='No Rooms Available In This Category!'
              subtitle='Please Select Other Categories.'
              center={true}
            />
          </div>
        )}
        {filteredRooms.length > 20 && !showAll && (
          <div className='flex justify-center mt-10'>
            <button
              onClick={() => setShowAll(true)}
              className='flex items-center bg-rose-500 text-white px-20  py-5 rounded-full shadow-md hover:shadow-lg transition'
            >
              <span>Show All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </Container>
    );
  };

const ShowRoomData = ({ room }) => {
  const textColor = GetRandomColor();

  return (
    <Link to={`/rooms/${room._id}`} className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={room.image}
            alt='Room'
          />
          <div className='absolute top-3 right-3'>
            <HeartButton />
            <ToastContainer />
          </div>
        </div>
        <div className='font-semibold text-lg'>{room.location}</div>
        <div className='font-light text-neutral-500'>{room.dateRange}</div>
        <div className='flex flex-row items-center gap-1'>
          <div style={{ color: textColor }} className='font-semibold'>
            $ {room.price}
          </div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </Link>
  );
};

export default Rooms;
