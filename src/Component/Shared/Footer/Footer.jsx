import React from 'react';
import GetRandomColor from './../../../Hooks/GetRandomColor';
  

const Footer = () => {
  const textColor = GetRandomColor(); 
    return (
      <footer className='mt-32 px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
        <div style={{ color: textColor }}  className='py-6  text-center text-xl'>
          © 2023 AirCNC Inc. All rights reserved.
        </div>
      </footer>
    )
  }
  
  export default Footer;
 
 