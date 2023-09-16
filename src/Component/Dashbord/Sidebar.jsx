import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { FaWallet,FaCreativeCommons,FaAddressCard, FaCalendarAlt, FaHome,FaBuffer,  FaUsers, FaCcStripe ,} from 'react-icons/fa';

import { AuthContext } from '../../providers/AuthProvider'
import Logo from '../Shared/Navbar/Logo'

const Sidebar = () => {
  const navigate = useNavigate()

  const { user, logOut } = useContext(AuthContext)



  const handleLogOut = () => {
    logOut()
    navigate('/')
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
          <Logo></Logo>
          </div>
        </div>

     
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
           '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className='w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto'>
              <Logo />
            </div>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <Link to='/dashboard'>
                <img
                  className='object-cover w-24 h-24 mx-2 rounded-full'
                  src={user?.photoURL}
                  alt='avatar'
                  referrerPolicy='no-referrer'
                />
              </Link>
              <Link to='/dashboard'>
                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
                </h4>
              </Link>
              <Link to='/dashboard'>
                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>



          <div className='mt-20'>
  <li className="flex items-center">
    <Link to="/dashboard/alluser" className="flex items-center">
      <FaUsers className="mr-2"></FaUsers> All Users
    </Link>
  </li>
</div>




<div className='mt-5'>
  <li className="flex items-center">
    <Link to="/dashboard/allrooms"   className="flex items-center">
      <FaAddressCard  className="mr-2"></FaAddressCard> All Services
    </Link>
  </li>
</div>



          {/* Nav
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              {role && role === 'host' ? (
                <>
                  <label
                    htmlFor='Toggle3'
                    className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
                  >
                    <input
                      onChange={toggleHandler}
                      id='Toggle3'
                      type='checkbox'
                      className='hidden peer'
                    />
                    <span className='px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300'>
                      Guest
                    </span>
                    <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-rose-400'>
                      Host
                    </span>
                  </label>



                  {/* Menu 


                  
                  {toggle ? <HostMenu /> : <GuestMenu />}
                </>
              ) : (
                <GuestMenu />
              )}
            </nav>
          </div> Items */}
        </div>

        <div>
          <hr />
          
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
