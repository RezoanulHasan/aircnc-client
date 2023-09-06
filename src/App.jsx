import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from './Component/Shared/Footer/Footer';
const App = () => {
  return (
    <div>
 <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
   <Footer></Footer>
    </div>
  );
};

export default App;