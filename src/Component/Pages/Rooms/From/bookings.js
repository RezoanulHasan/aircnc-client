// Add a booking
export const addBooking = async bookingData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  })

  const data = await response.json()
  return data
}

// update room status
export const updateStatus = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/status/${id}`,
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status }),
    }
  )
  const data = await response.json()
  return data
}





// Get all bookings for a host by email
export const getHostBookings = async email => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/host/?email=${email}`
  )
  const bookings = await response.json()
  return bookings
}
