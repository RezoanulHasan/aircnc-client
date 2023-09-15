import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeAnimation } from 'react-type-animation';


const MapWithMarkers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this line
        setData(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

 


  
  return (

    <div className="p-4  mt-10">




<div  style={{textShadow: '0 0 3px #FF0000,0 0 4px #FF0000 '}}   className='text-center text-black ' >

      <TypeAnimation className='mt-10 mb-10   '
      sequence={[
        // Same substring at the start will only be typed out once, initially

        'Find Our Services With Map For   HOTEL.........',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Find Our Services With Map For   HOUSE.........',
        1000,
        'Find Our Services With Map For  Apartment.........',   
        1000,
    'Find Our Services With Map For   Gest HOUSE.........',
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
        <Marker position={[item?.latitude, item?.longitude]} key={item.id}>
          <Popup>
            <div>
              <h2>{item?.location}</h2>
              <img src={item?.image} alt="" />
              <p>Region: {item?.region}</p>
              <p>Price: {item?.price}</p>
              <p>Date Range: {item?.dateRange}</p>
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
