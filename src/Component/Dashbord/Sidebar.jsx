import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { FaWallet,FaCreativeCommons,FaAddressCard, FaCalendarAlt, FaHome,FaBuffer,  FaUsers, FaCcStripe ,} from 'react-icons/fa';

import { AuthContext } from '../../providers/AuthProvider'
import Logo from '../Shared/Navbar/Logo'
import useAdmin from './../../Hooks/useAdmin';
import useHost from './../../Hooks/useHost';

const Sidebar = () => {
  const navigate = useNavigate()

  const { user, logOut } = useContext(AuthContext)

const [isAdmin] = useAdmin();
 const [isHost] = useHost();

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





      {/* Small Screen Navbar */}

{isAdmin && (
            <>

<div className='mt-10'>
              <li className="flex items-center" >
                <Link to="/dashboard/adminHome"  className="flex items-center" >
               < FaAddressCard  className="mr-2"  ></FaAddressCard> Admin Home
                </Link>
              </li>
              </div> 
            

<div className='mt-5 font-bold '> 

              <li  className="flex items-center"   > 
                <Link to="/dashboard/allrooms"       className="flex items-center"   >
                <FaCalendarAlt  className="mr-2 " ></FaCalendarAlt> All rooms
                </Link>
              </li></div> 

              <div className='mt-5'>
  <li className="flex items-center">
    <Link to="/dashboard/alluser" className="flex items-center">
      <FaUsers className="mr-2"></FaUsers> All Users
    </Link>
  </li>
</div>
            </>
          )}

{isHost && (
            <>
          
<div className='mt-10'> 
              <li   className="flex items-center" >
                <Link to="/dashboard/addrooms"   className="flex items-center"  >
                <FaWallet     className="mr-2" ></FaWallet>    Addrooms
                </Link>
              </li></div>  

          
              <div className='mt-5'> 

              <li  className="flex items-center"   > 
                <Link to="/dashboard/mylistings"       className="flex items-center"   >
                <FaCalendarAlt  className="mr-2" ></FaCalendarAlt> My Rooms
                </Link>
              </li></div>  
            </>
          )}   

{isAdmin || isHost ? (
            
            <>
            <div className="divider"></div>



            <li   className="flex items-center"  >
              <Link className="flex items-center"to="/">
                
                <FaHome   className="mr-2" ></FaHome> Home
              </Link>
            </li>
          </>
        ) :   
        <>


                    
    <li>
            <Link to="/dashboard/mycart">
              <FaWallet></FaWallet>My Classes
            </Link>
          </li>

          

          <li>
            <NavLink to="/dashboard/history">
            <FaCalendarAlt></FaCalendarAlt>  Payment History 
            </NavLink>
          </li>
          <li>
            <Link to="/dashboard/payment/:id">
           < FaCcStripe></FaCcStripe>     Payment 
            </Link>
          </li>
         
       
          <div className="divider  bg-white"></div>


          <li   className="flex items-center"  >
              <Link className="flex items-center"to="/">
                
                <FaHome   className="mr-2" ></FaHome> Home
              </Link>
            </li>
           
          



            </>     


       
    
}




        
        </div>
        <hr /> <hr /> <hr /><hr /> <hr /><hr /> <hr />
     
        <div className='mt-5'>
          
        <li className="flex items-center">
            <span className=' font-medium'></span>

            <FcSettings className="mr-2"/>Profile
            </li>

            </div> 
            
            
             <div>
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
