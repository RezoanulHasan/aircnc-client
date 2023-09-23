import React from 'react'
import Heading from "../../Heading/Heading"
import { useLoaderData } from 'react-router-dom';
import HeartButton from "../../Button/HeartButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from "react-awesome-reveal";
const Header = () => {

  const {_id,image,location,region} =useLoaderData() ;

  return (
    <>

<Fade direction="right"> 
      <Heading title={region} subtitle={location}  />
      </Fade>
      
      <div className=' overflow-hidden rounded-xl w-full   md:w-[150vh]'>
      
        <img
          className='object-cover w-full '
          src={image}
          alt='header image'
        />    
      
<div className='absolute top-60 right-60 '>
<div className=' bg-black'>
            < HeartButton />
            </div>
            <ToastContainer />
          </div>

      </div>
      
    </>
  )
}

export default Header;
