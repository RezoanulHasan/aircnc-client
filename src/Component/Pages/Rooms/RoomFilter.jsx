import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Container from "../../Shared/Container";
import Spinner from "../../Shared/Spinner/Spinner";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRightLong } from "react-icons/fa6";
import useTitle from "../../../Hooks/useTitle";
import { FaMapMarkerAlt, FaBuilding, FaGlobeAmericas } from "react-icons/fa";
import GiftCoupons from "../Home/ADDS/GiftCoupons";
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
  const [locationSearch, setLocationSearch] = useState(""); // Location Search
  const [sortByPrice, setSortByPrice] = useState(false); // Sort by Price

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

  // Reset all filters
  const resetFilters = () => {
    setSelectedRegions([]);
    setSelectedPropertyTypes([]);
    setBedroom("");
    setGuests("");
    setPriceRange([0, 2000]);
    setLocationSearch("");
    setSortByPrice(false);
  };

  // Filter logic
  const filteredRooms = useMemo(() => {
    let filtered = rooms
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
      })
      .filter((room) => {
        if (!locationSearch) return true;
        return room.location
          .toLowerCase()
          .includes(locationSearch.toLowerCase());
      });

    // Sort by price if enabled
    if (sortByPrice === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price); // Low to High
    } else if (sortByPrice === "highToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price); // High to Low
    }
    return filtered;
  }, [
    rooms,
    selectedRegions,
    selectedPropertyTypes,
    bedroom,
    guests,
    priceRange,
    locationSearch,
    sortByPrice,
  ]);

  return (
    <Container>
      <div className="flex gap-8 mt-5">
        {/* Filter Section */}
        <div className="w-1/4 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold text-gray-700  mb-4">Filters</h2>
          <Link to="/dataFilters">
            <button className="flex items-center justify-center space-x-3 rounded-lg bg-gradient-to-r from-gray-800 to-black text-white px-6 py-4 md:px-8 md:py-5 hover:from-gray-700 hover:to-gray-900 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
              <span className="font-semibold text-white hover:text-red-500 transition duration-300">
                Found Available Date
              </span>
              <FaArrowRightLong className="text-white text-xl" />
            </button>
          </Link>

          {/* Search by Location */}
          <div className="mb-6 mt-6">
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              Search by Location
            </h3>
            <div className="relative">
              <input
                type="text"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                placeholder="Enter location"
                className="w-full p-4 pl-12 text-gray-700 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition duration-200 ease-in-out"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaMapMarkerAlt size={20} />
              </div>
            </div>
          </div>

          {/* Region Filter */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700 mb-3">Region</h3>
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
                    checked={selectedRegions.includes(region)}
                    className="form-checkbox h-4 w-4 rounded-md text-blue-500"
                  />
                  <span>{region}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Property Type Filter */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              Property Type
            </h3>
            <div className="flex flex-col space-y-2">
              {["Guest House", "Apartment", "Villa", "Hotel", "House"].map(
                (type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={type}
                      onChange={handlePropertyTypeChange}
                      checked={selectedPropertyTypes.includes(type)}
                      className="form-checkbox h-4 w-4 rounded-md text-blue-500"
                    />
                    <span>{type}</span>
                  </label>
                )
              )}
            </div>
          </div>
          {/* Bedrooms Filter */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700 mb-3">Bedrooms</h3>
            <div className="flex flex-col space-y-2">
              {[1, 2, 3, 4, 5, 6, "7+"].map((bdr) => (
                <label key={bdr} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bedroom"
                    value={bdr === "7+" ? "7-1000" : bdr}
                    onChange={(e) => setBedroom(e.target.value)}
                    checked={bedroom === String(bdr)}
                    className="form-radio h-4 w-4 text-blue-500 rounded-full"
                  />
                  <span>{bdr}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Guests Filter */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700 mb-3">Guests</h3>
            <div className="flex flex-col space-y-2">
              {[1, 2, 3, 4, 5, 6, "7+"].map((gst) => (
                <label key={gst} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="guests"
                    value={gst === "7+" ? "7-1000" : gst}
                    onChange={(e) => setGuests(e.target.value)}
                    checked={guests === String(gst)}
                    className="form-radio h-4 w-4 text-blue-500 rounded-full"
                  />
                  <span>{gst}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              Price Range
            </h3>
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
                    value={index}
                    onChange={() => setPriceRange(priceOption.range)}
                    className="form-radio h-4 w-4 text-blue-500"
                  />
                  <span>{priceOption.label}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Sort by Price */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              Sort by Price
            </h3>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="sortPrice"
                  value="lowToHigh"
                  onChange={(e) => setSortByPrice(e.target.value)}
                  checked={sortByPrice === "lowToHigh"}
                  className="form-radio h-4 w-4 text-blue-500 rounded-full"
                />
                <span>Low to High</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="sortPrice"
                  value="highToLow"
                  onChange={(e) => setSortByPrice(e.target.value)}
                  checked={sortByPrice === "highToLow"}
                  className="form-radio h-4 w-4 text-blue-500 rounded-full"
                />
                <span>High to Low</span>
              </label>
            </div>
          </div>
          {/* Reset Filters Button */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-5"
            onClick={resetFilters}
          >
            Reset All Filters
          </button>
          <GiftCoupons></GiftCoupons>
        </div>

        {/* Room Listing Section */}
        <div className="w-3/4  mb-10">
          {loading ? (
            <Spinner />
          ) : filteredRooms.length === 0 ? (
            <p className="text-3xl mt-72 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg   mb-3">
              No rooms available
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRooms.map((room) => (
                <div
                  key={room._id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all relative"
                >
                  <Link to={`/rooms/${room._id}`}>
                    <div
                      className="h-48 w-full bg-cover bg-center rounded-t-md"
                      style={{ backgroundImage: `url(${room.image})` }}
                    />

                    <div className="p-4">
                      <p className="text-lg font-semibold text-gray-800 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-rose-500" />{" "}
                        {room.location}
                      </p>

                      <div className="flex justify-between mt-4 space-x-2">
                        <div className="flex items-center text-gray-600">
                          <FaBuilding className="mr-2 text-blue-500" />
                          <span>{room.category}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <FaGlobeAmericas className="mr-2 text-green-500" />
                          <span>{room.region}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <FaBuilding className="mr-2 text-purple-500" />
                          <span>{room.property}</span>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-semibold  py-2 px-2 rounded-bl-lg">
                        ${room.price} / night
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RoomFilter;
