import React from 'react'
import Heading from "../../Heading/Heading"
import { useLoaderData } from 'react-router-dom';
import HeartButton from "../../Button/HeartButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {

  const {_id,image,location,region} =useLoaderData() ;

  return (
    <>
      <Heading title={region} subtitle={location}  />
      <div className=' w-full  relative  overflow-hidden rounded-xl'>
        <img
          className='object-cover h-full w-full'
          src={image}
          alt='header image'
        />
<div className='absolute top-10 right-5'>
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
