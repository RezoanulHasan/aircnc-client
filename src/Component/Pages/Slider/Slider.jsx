import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Slider = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Room view</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        //centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1395111552/photo/video-gamer-room-interior-in-3d.jpg?s=612x612&w=0&k=20&c=2pzZnSjRuVgKvdCsdRLuMcFQFo0Ga-2AOrir8hba5wA="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1393892506/photo/examination-room-in-doctors-office.webp?b=1&s=170667a&w=0&k=20&c=XNJvnqexu2YjRypDpANIKDV7g8NRXh0FcTMCtgJ35Cg="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1440854098/photo/scandinavian-style-modern-living-room-with-entertainment-center.webp?b=1&s=170667a&w=0&k=20&c=H3FbGTnaqUYjA-CE_TPf-Mtvsa04e5VhlSklNEDbwGg="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1441823016/photo/modern-living-room-interior-design.webp?b=1&s=170667a&w=0&k=20&c=eLJcqEoRmydlS160s1oJzAiBOrA6XtMBwgzEHc5zcfE="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.webp?b=1&s=170667a&w=0&k=20&c=7Zv8DXArvGBsLoc4lGMgZ6fieane9s4zC9ioeSETG7k="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1461624460/photo/modern-scandinavian-interior-living-room-three-picture-frame-empty-wall-mockup-in-white-room.webp?b=1&s=170667a&w=0&k=20&c=2adAk1Te7bEIu0ddKhVVUIA6FqfwWn_7vJggI_mhMaw="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1440627430/photo/private-luxury-home-cinema-room.jpg?s=612x612&w=0&k=20&c=UMkArjW6KVCNEHQlMtLoCwpStbp7YK_I-nFbOJ77gy8="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1393892506/photo/examination-room-in-doctors-office.webp?b=1&s=170667a&w=0&k=20&c=XNJvnqexu2YjRypDpANIKDV7g8NRXh0FcTMCtgJ35Cg="
              alt="Room"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden h-full transition-transform transform scale-100 hover:scale-150">
            <img
              className="object-cover h-full"
              src="https://media.istockphoto.com/id/1440854098/photo/scandinavian-style-modern-living-room-with-entertainment-center.webp?b=1&s=170667a&w=0&k=20&c=H3FbGTnaqUYjA-CE_TPf-Mtvsa04e5VhlSklNEDbwGg="
              alt="Room"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
