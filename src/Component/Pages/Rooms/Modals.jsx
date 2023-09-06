import React, { useState, useEffect } from 'react';

const Modals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the specified URL
    fetch('http://localhost:5000/rooms')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store the fetched data in state
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  // Filter the data to count the number of each type of room
  const allTypeCount = data.length;
  const roomCount = data.filter((item) => item.type === 'room').length;
  const homeCount = data.filter((item) => item.type === 'home').length;
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      
  
          <div className='modal-content'>
            <h2>Modal Content</h2>
            <p>This is where your modal content goes.</p>

            <div className='stats shadow'>
              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-8 h-8 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                </div>
                <div className='stat-title'>All type</div>
                <div className='stat-value'>{allTypeCount}</div>
              </div>

              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-8 h-8 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                </div>
                <div className='stat-title'>Room</div>
                <div className='stat-value'>{roomCount}</div>
              </div>

              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-8 h-8 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                </div>
                <div className='stat-title'>Home</div>
                <div className='stat-value'>{homeCount}</div>
              </div>
            </div>

            {/* Additional Close Button */}
            <div className='card-actions justify-end mt-80'>
              <button className='btn btn-outline mx-2'>Show data</button>

              <button className='btn btn-outline' onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
      


     
    </div>
  );
};

export default Modals;

