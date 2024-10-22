import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Shared/Container";
import Spinner from "../../Shared/Spinner/Spinner";
import Heading from "../../Heading/Heading";
import HeartButton from "../../Button/HeartButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetRandomColor from "../../../Hooks/GetRandomColor";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const displayedRooms = showAll ? rooms : rooms.slice(0, 20);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : displayedRooms?.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {displayedRooms.map((room) => (
            <ShowRoomData key={room?._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No Rooms Available!"
            subtitle="Please check back later."
            center={true}
          />
        </div>
      )}
      {rooms?.length > 20 && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center bg-rose-500 text-white px-20 py-5 rounded-full shadow-md hover:shadow-lg transition"
          >
            <span>Show All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </Container>
  );
};

const ShowRoomData = ({ room }) => {
  const textColor = GetRandomColor();

  return (
    <Link
      to={`/rooms/${room?._id}`}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
         aspect-square
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={room?.image}
            alt="Room"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
            <ToastContainer />
          </div>
        </div>
        <div className="font-semibold text-lg">{room?.location}</div>
        <div className="font-light text-neutral-500">{room?.dateRange}</div>
        <div className="flex flex-row items-center gap-1">
          <div style={{ color: textColor }} className="font-semibold">
            $ {room?.price}
          </div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  );
};

export default Rooms;
