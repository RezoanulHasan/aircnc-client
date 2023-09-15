import React, { useEffect } from 'react';
import Categories from '../../Categories/Categories';
import Rooms from '../Rooms/Rooms';
import useTitle from '../../../Hooks/useTitle';
import MapWithMarkers from './MapWithMarkers/MapWithMarkers';
import Container from '../../Shared/Container';
import Contact from './Contact/Contact';

import Property from './Property/property';
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
      

 
    
<MapWithMarkers></MapWithMarkers>
<Property></Property>
<Contact></Contact>

</Container>
</div>
    );
};

export default Home;