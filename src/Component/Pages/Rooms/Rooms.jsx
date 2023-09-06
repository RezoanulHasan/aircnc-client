import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Container from '../../Shared/Container';
import Spinner from '../../Shared/Spinner/Spinner';
import { useSearchParams } from 'react-router-dom';
import Heading from '../../Heading/Heading';
import HeartButton from '../../Button/HeartButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetRandomColor from '../../../Hooks/GetRandomColor';

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading as true

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          console.log(data);
          setRooms(data); // Set rooms to all data if no category is specified
        }

        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [category]);

  return (
    <>

    <Container>
      {loading ? (
        <Spinner></Spinner>
      ) : rooms.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {rooms.map((room, index) => (
            <ShowRoomData key={index} room={room} />
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
    </Container>

    </>
  );
};

const ShowRoomData = ({ room }) => {
  const textColor = GetRandomColor(); 

  return (
    <Link to={`/room/${room.id}`} className='col-span-1 cursor-pointer group'>
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
        <div  className='font-semibold text-lg'>{room.location}</div>
        <div className='font-light text-neutral-500'>
          5 nights . {room.dateRange}
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div style={{ color: textColor }}  className='font-semibold'>$ {room.price}</div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </Link>
    
  );
};

export default Rooms;
