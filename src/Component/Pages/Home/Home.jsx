import React, { useEffect } from 'react';
import Categories from '../../Categories/Categories';
import Rooms from '../Rooms/Rooms';
import useTitle from '../../../Hooks/useTitle';
import MapWithMarkers from './MapWithMarkers/MapWithMarkers';

import Container from '../../Shared/Container';
const Home = () => {

    useTitle('Home'),
    useEffect(() => { 

        window.scrollTo(0, 0);

    }, []); 



 
      

    return (
        <div>
        
 <Categories/>

    
<Rooms></Rooms>

<Container>
      

 
    
<MapWithMarkers></MapWithMarkers></Container>
</div>
    );
};

export default Home;