import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Shared/Container";
import Spinner from "../../Shared/Spinner/Spinner";
import Heading from "../../Heading/Heading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetRandomColor from "../../../Hooks/GetRandomColor";
import { useSearchParams } from "react-router-dom";
import HeartButton from "../../Badge/HeartButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    fetch("https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);

  const displayedRooms = showAll ? rooms : rooms.slice(0, 20);

  return (
    <Container>
      <ToastContainer />
      {loading ? (
        <Spinner />
      ) : displayedRooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {displayedRooms.map((room) => (
            <ShowRoomData key={room._id} room={room} />
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
      {rooms.length > 20 && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center bg-rose-500 text-white px-20 py-5 rounded-full shadow-md hover:shadow-lg transition"
          >
            <span>Show All</span>
            <AiOutlineArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      )}
    </Container>
  );
};

const ShowRoomData = ({ room }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl group">
        <img
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] delay-[2000ms]"
          src={room.image}
          alt={`Room in ${room.location}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
          <div className="self-end">
            <HeartButton room={room} />
          </div>

          <div>
            <div className="font-semibold text-lg">{room.location}</div>

            <div className="font-light text-neutral-300 flex items-center text-xl  gap-2">
              <span className="text-lg">&#x1F3E1;</span>{" "}
              <span>{room.category}</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <div className="font-semibold bg-black p-2 text-amber-500 rounded-lg">
                $ {room.price}
              </div>
              <div className="font-light">night</div>
            </div>
            <div className="self-end mt-10">
              <Link
                to={`/rooms/${room._id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white transition hover:bg-gray-900 duration-300"
              >
                View Room{" "}
                <AiOutlineArrowRight className="text-lg text-red-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
