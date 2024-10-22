import React, { useEffect } from "react";
import Categories from "../../Categories/Categories";
import Rooms from "../Rooms/Rooms";
import useTitle from "../../../Hooks/useTitle";
import MapWithMarkers from "./MapWithMarkers/MapWithMarkers";
import Container from "../../Shared/Container";
import Contact from "./Contact/Contact";
import Discount from "./Discount/Discount";
import AboutUs from "./AboutUs/AboutUs";
import Review from "./Review/Review";

import "./VedioBackground.css";
import PeopleAlsoAsk from "./PeopleAsk/PeopleAlsoAsk";
import Banner from "./Banner/Banner";
import AboutMore from "./AboutUs/AboutMore";

import ParallaxSlideImage from "./ParallaxMessage/ParallaxSlideImage";
import ParallaxMessage from "./ParallaxMessage/ParallaxMessage";
import LeafletMap from "../../Shared/Footer/Leaflet/LeafletMap";
const Home = () => {
  useTitle("Home"),
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div>
        <div className="video-container">
          <video autoPlay muted loop className="background-video">
            <source
              src="https://videos.pexels.com/video-files/3121459/3121459-sd_640_360_24fps.mp4"
              // Replace with your local or hosted video path

              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <Categories />
            <Discount></Discount>
          </div>
        </div>
        <Rooms />

        <Container>
          <Banner></Banner>
          <AboutMore></AboutMore>

          <ParallaxMessage></ParallaxMessage>

          <AboutUs></AboutUs>
          <ParallaxSlideImage></ParallaxSlideImage>

          <Review></Review>
          <Contact />
          <MapWithMarkers />
          <PeopleAlsoAsk></PeopleAlsoAsk>
        </Container>
      </div>
    </>
  );
};

export default Home;
