import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Shared/Container";
import Spinner from "../../Shared/Spinner/Spinner";
import Heading from "../../Heading/Heading";
import HeartButton from "../../Button/HeartButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetRandomColor from "../../../Hooks/GetRandomColor";
import useTitle from "../../../Hooks/useTitle";

const RoomFilter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Filters");
  // Filters state
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [bedroom, setBedroom] = useState("");
  const [guests, setGuests] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);

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

  // Handle checkbox changes
  const handleRegionChange = (e) => {
    const { value, checked } = e.target;
    setSelectedRegions((prev) =>
      checked ? [...prev, value] : prev.filter((region) => region !== value)
    );
  };

  const handlePropertyTypeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedPropertyTypes((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  // Filter logic
  const filteredRooms = rooms
    .filter((room) => {
      if (selectedRegions.length === 0) return true;
      return selectedRegions.includes(room.region);
    })
    .filter((room) => {
      if (selectedPropertyTypes.length === 0) return true;
      return selectedPropertyTypes.includes(room.property);
    })
    .filter((room) => {
      if (!bedroom) return true;
      return room.bedroom === parseInt(bedroom, 10);
    })
    .filter((room) => {
      if (!guests) return true;
      return room.guests === parseInt(guests, 10);
    })
    .filter((room) => {
      const [minPrice, maxPrice] = priceRange;
      return room.price >= minPrice && room.price <= maxPrice;
    });

  return (
    <Container>
      <div className="flex gap-8 mt-5">
        {/* Filter Section */}
        <div className="w-1/4 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          {/* Region Filter - Square checkboxes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Region</h3>
            <div className="flex flex-col space-y-2">
              {[
                "USA",
                "Asia",
                "Europe",
                "Africa",
                "Russia",
                "Australia",
                "Antarctica",
                "Mriddle East",
              ].map((region) => (
                <label key={region} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={region}
                    onChange={handleRegionChange}
                    className="form-checkbox h-4 w-4 rounded-md text-blue-500"
                  />
                  <span>{region}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Property Type Filter - Square checkboxes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Property Type</h3>
            <div className="flex flex-col space-y-2">
              {["Guest House", "Apartment", "Villa", "Hotel", "House"].map(
                (type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={type}
                      onChange={handlePropertyTypeChange}
                      className="form-checkbox h-4 w-4 rounded-md text-blue-500"
                    />
                    <span>{type}</span>
                  </label>
                )
              )}
            </div>
          </div>
          {/* Bedrooms Filter - Round checkboxes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Bedrooms</h3>
            <div className="flex flex-col space-y-2">
              {[1, 2, 3, 4, 5, 6, "7+"].map((bdr) => (
                <label key={bdr} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bedroom"
                    value={bdr === "7+" ? "7-1000" : bdr}
                    onChange={(e) => setBedroom(e.target.value)}
                    className="form-radio h-4 w-4 text-blue-500 rounded-full"
                  />
                  <span>{bdr}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Guests Filter - Round checkboxes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Guests</h3>
            <div className="flex flex-col space-y-2">
              {[1, 2, 3, 4, 5, 6, "7+"].map((gst) => (
                <label key={gst} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="guests"
                    value={gst === "7+" ? "7-1000" : gst}
                    onChange={(e) => setGuests(e.target.value)}
                    className="form-radio h-4 w-4 text-blue-500 rounded-full"
                  />
                  <span>{gst}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Price Range Filter */}
          {/* Price Range Filter - Radio buttons for price ranges */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
            <div className="flex flex-col space-y-2">
              {[
                { label: "$0 - $400", range: [0, 400] },
                { label: "$401 - $900", range: [401, 900] },
                { label: "$901 - $1200", range: [901, 1200] },
                { label: "$1201 - $2000", range: [1201, 2000] },
              ].map((priceOption, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="priceRange"
                    value={priceOption.range}
                    onChange={() => setPriceRange(priceOption.range)}
                    className="form-radio h-4 w-4 text-blue-500"
                  />
                  <span>{priceOption.label}</span>
                </label>
              ))}
            </div>
          </div>{" "}
        </div>

        {/* Room List Section */}
        <div className="w-3/4">
          {loading ? (
            <Spinner />
          ) : filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredRooms.map((room) => (
                <ShowRoomData key={room._id} room={room} />
              ))}
            </div>
          ) : (
            <div>
              <Heading
                title="No Rooms Available"
                subtitle="Try adjusting your filters."
                center={true}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

const ShowRoomData = ({ room }) => {
  const textColor = GetRandomColor();

  return (
    <Link to={`/rooms/${room?._id}`} className="group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            className="object-cover h-full w-full group-hover:scale-110 transition"
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
        <div className="flex items-center gap-1">
          <div style={{ color: textColor }} className="font-semibold">
            $ {room?.price}
          </div>
          <div className="font-light">/ night</div>
        </div>
      </div>
    </Link>
  );
};

export default RoomFilter;
