
import React, { useContext, useState } from 'react';
import { imageUpload } from './Api/utils';
import { addRoom } from './Api/rooms';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../../providers/AuthProvider';
import { TbFidgetSpinner } from 'react-icons/tb';
import { categories } from '../../../Categories/categoriesData';
import { DateRange } from 'react-date-range';
import useTitle from '../../../../Hooks/useTitle';

const RoomAdd = () => {

  useTitle("ADD-ROOM");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');

  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image.name);
  };

  const handleDates = ranges => {
    setDates(ranges.selection);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const location = event.target.location.value;
    const property = event.target.property.value;
    const region = event.target.region.value;
    const latitude = event.target.latitude.value;
    const longitude = event.target.longitude.value;
    const dateRange = event.target.dateRange.value;
    const price = event.target.price.value;
    const guests = event.target.total_guest.value;
    const bedroom = event.target.bedroom.value;
    const bathroom = event.target.bathroom.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];
    const from = dates.startDate
    const to = dates.endDate
    setUploadButtonText('Uploading...');

    imageUpload(image)
      .then((data) => {
        const roomData = {
          location,
          dateRange,
          region,
          property,
          latitude:parseFloat(latitude),
        longitude:parseFloat(longitude),
          price: parseFloat(price),
          guests: parseInt(guests),
          bedroom: parseInt(bedroom),
          bathroom: parseInt(bathroom),
          description,
          image: data.data.display_url,
          hostname: user?.name || user?.displayName,
          hostphotoURL : user?.photoURL,
          email: user?.email,
          category,
         to,
         from,
        };

        addRoom(roomData)
          .then((data) => {
            console.log(data);
            setUploadButtonText('Uploaded!');
            setLoading(false);
            toast.success('Room Added!');
            navigate('/dashboard/mylistings');
          })
          .catch((err) => console.log(err));

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='space-y-8'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='location' className='block text-gray-600'>
                  Location
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='location'
                  id='location'
                  type='text'
                  placeholder='Location'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='property' className='block text-gray-600'>
                  Property TYPE
                </label>
                <select
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='property'
                  id='property'
                  type='text'
                  placeholder='property'
                  required
                >
                     <option value=''>Select</option>
                  <option value='Guest House'>Guest House</option>
                  <option value='Apartment'>Apartment</option>
                  <option value='House'>House</option>
                  <option value='Hotel'>Hotel</option>
                  <option value='Villa'>Villa</option>
                </select>
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='category' className='block text-gray-600'>
                  Category
                </label>
                <select
                  required
                  className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                  name='category'
                >
                  {categories.map((category) => (
                    <option value={category.label} key={category.label}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className='space-y-1'>
                <label htmlFor='location' className='block text-gray-600'>
                  Select Availability Range
                </label>
                <DateRange
                  onChange={handleDates}
                  ranges={[dates]}
                  rangeColors={['#F43F5E']}
                />
              </div>

              <div className='space-y-1 '>
                <label htmlFor='dateRange' className='block text-gray-600 text-center'>
                  Date range
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='dateRange'
                  id='dateRange'
                  type='text'
                  placeholder='Feb 25, 2026 - Mar 2, 2026"' readOnly
           
                />
              </div>
            </div>

            <div className='space-y-6'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='region' className='block text-gray-600'>
                  Region
                </label>
                <select
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='region'
                  id='region'
                  type='text'
                  placeholder='region'
                  required
                >
                    <option value=''>Select</option>
                  <option value='USA'>USA</option>
                  <option value='Asia'>Asia</option>
                  <option value='Europe'>Europe</option>
                  <option value='Africa'>Africa</option>
                  <option value='Russia'>RUssia</option>
                  <option value='Australia'>Australia</option>
                  <option value='Antarctica'>Antarctica</option>
                  <option value='Middle East'>Middle East</option>
                </select>
              </div>

              <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                  <div className='flex flex-col w-max mx-auto text-center'>
                    <label>
                      <input
                        onChange={(event) => {
                          handleImageChange(event.target.files[0]);
                        }}
                        className='text-sm cursor-pointer w-36 hidden'
                        type='file'
                        name='image'
                        id='image'
                        accept='image/*'
                        hidden
                      />
                      <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                        {uploadButtonText}
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className='space-y-1 text-sm'>
                  <label htmlFor='latitude' className='block text-gray-600'>
                    latitude
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='latitude'
                    id='latitude'
                    type='number'
                    step='0.0001'
                    placeholder='latitude'
                    required
                  />
                </div>

                <div className='space-y-1 text-sm'>
                  <label htmlFor='longitude' className='block text-gray-600'>
                    longitude
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='longitude'
                    id='longitude'
                    type='number'
                    placeholder='longitude'
                    step='0.0001'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className='space-y-1 text-sm'>
                  <label htmlFor='price' className='block text-gray-600'>
                    Price
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='price'
                    id='price'
                    type='number'
                    placeholder='Price'
                    required
                  />
                </div>

                <div className='space-y-1 text-sm'>
                  <label htmlFor='guest' className='block text-gray-600'>
                    Total guest
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='total_guest'
                    id='guest'
                    type='number'
                    placeholder='Total guest'
                    max='50'
                    onInput="checkValue(this)"
                    required
                  />
                </div>
              </div>

              <div className='flex justify-between gap-2'>
                <div className='space-y-1 text-sm'>
                  <label htmlFor='bedroom' className='block text-gray-600'>
                    Bedrooms
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='bedroom'
                    id='bedroom'
                    type='number'
                    placeholder='Bedroom'
                    max='50'
                    onInput="checkValue(this)"

                    required
                  />
                </div>

                <div className='space-y-1 text-sm'>
                  <label htmlFor='bathroom' className='block text-gray-600'>
                    Bathrooms
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='bathroom'
                    id='bathroom'
                    type='number'
                    placeholder='Bathroom'
                    onInput="checkValue(this)"
                    max='50'
                  
                    required
                  />
                </div>
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='description' className='block text-gray-600'>
                  Description
                </label>

                <textarea
                  id='description'
                  className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                  name='description'
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
          >
            {loading ? (
              <TbFidgetSpinner className='m-auto animate-spin' size={24} />
            ) : (
              'Save & Continue'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomAdd;
