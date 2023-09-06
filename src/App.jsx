import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Footer from './Component/Shared/Footer/Footer';
import Navbar from './Component/Shared/Navbar/Navbar';
const App = () => {

  useEffect(() => {  
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
   <Navbar></Navbar>
 <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
   <Footer></Footer>
    </div>
  );
};

export default App;