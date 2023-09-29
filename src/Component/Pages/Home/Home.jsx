import React, { useEffect } from 'react';
import Categories from '../../Categories/Categories';
import Rooms from '../Rooms/Rooms';
import useTitle from '../../../Hooks/useTitle';
import MapWithMarkers from './MapWithMarkers/MapWithMarkers';
import Container from '../../Shared/Container';
import Contact from './Contact/Contact';
import Discount from './Discount/Discount';
import AboutUs from './AboutUs/AboutUs';
import ParallaxMessage from './ParallaxMessage/ParallaxMessage';
import ParallaxMessag from './ParallaxMessage/ParallaxMessag';
import Review from './Review/Review';





const Home = () => {

    useTitle('Home'),
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
           <div  >

            <Categories    />
            <Discount></Discount>

            <Rooms />
            <Container>
                <MapWithMarkers />

                <ParallaxMessag></ParallaxMessag>
               

<AboutUs></AboutUs>
         <ParallaxMessage></ParallaxMessage>

         <Review></Review>
                <Contact />



             
            </Container></div> 
        </>
    );
};

export default Home;
