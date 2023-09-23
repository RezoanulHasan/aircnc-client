// Add a room
export const addRoom = async roomData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(roomData),
  })

  const data = await response.json()
  return data
}
