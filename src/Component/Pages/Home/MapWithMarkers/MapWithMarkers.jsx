import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeAnimation } from 'react-type-animation';

import { format } from 'date-fns';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const MapWithMarkers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this line
        setData(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

 

  
  return (

    <div className="p-4  mt-10">

<SectionTitle
  subHeading="Explore Services Near You"
  heading={<>Discover Nearby Services</>}
/>


<div     className=' bg-black bg-opacity-10   text-xl text-center text-rose-600 ' >

      <TypeAnimation className='mt-10 mb-10   '
      sequence={[
        // Same substring at the start will only be typed out once, initially

        ' For   HOTELs.........',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' For   HOUSEs.........',
        1000,
        'For   Villas.........',   
        1000,
        ' For  Apartments.........',
        1000,
       
       ' For  GEST HOUSEs.........',
        1000,
         
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', 
       background: '', color:'' ,   fontFamily: 'font-mono'}}
      repeat={Infinity}
    />
   
   </div>

    <MapContainer
      center={[0, 0]} // Set initial center
      zoom={2}         // Set initial zoom level
      style={{ height: '600px', width: '100%' }} // Set map size
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((item) => (
        <Marker position={[item?.latitude, item?.longitude]} key={item._id}>
          <Popup>
            <div>
              <h2>{item?.location}</h2>
              <img src={item?.image} alt="" />
              <p>Region: {item?.region}</p>
              <p>Price: {item?.price}</p>
              
<p>
  Date Range: {item?.dateRange
    ? item.dateRange
    : `${format(new Date(item?.from), 'P')} to ${format(new Date(item?.to), 'P')}`}
</p>
              <p>Property: {item?.property}</p>

          
              </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>

    </div>

  );
};

export default MapWithMarkers;
