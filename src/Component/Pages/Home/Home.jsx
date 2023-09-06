import React, { useEffect } from 'react';
import Categories from '../../Categories/Categories';
import Rooms from '../Rooms/Rooms';

const Home = () => {

    useEffect(() => { 

        window.scrollTo(0, 0);
    }, []); 

    return (
        <div>
        
 <Categories/>
<Rooms></Rooms>
        </div>
    );
};

export default Home;