import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MyBookings = () => {
  const [email] = useState(localStorage.getItem('userEmail')); // Replace with logged-in user email
  const [bookings, setBookings] = useState([]);
  const [editing, setEditing] = useState(null);
  const [passengerInput, setPassengerInput] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get(`http://localhost:8000/api/bookings?email=${email}`);
      setBookings(res.data);
    };
    fetchBookings();
  }, [email]);

  const handleEditClick = (booking) => {
    setEditing(booking._id);
    setPassengerInput(booking.passengers);
  };

  const handleInputChange = (index, e) => {
    const updated = passengerInput.map((p, i) =>
      i === index ? { ...p, [e.target.name]: e.target.value } : p
    );
    setPassengerInput(updated);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/bookings/${id}`, {
        passengers: passengerInput,
      });
      setEditing(null);
      const res = await axios.get(`http://localhost:8000/api/bookings/${email}`);

      setBookings(res.data);
    } catch (err) {
      alert('Failed to update');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white text-black rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Bookings</h2>

      {bookings.map((booking) => (
        <div key={booking._id} className="mb-6 p-4 border rounded-lg bg-gray-50">
          <p className="font-semibold">Email: {booking.userEmail}</p>

          {editing === booking._id ? (
            passengerInput.map((p, i) => (
              <div key={i} className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={p.name}
                  onChange={(e) => handleInputChange(i, e)}
                  placeholder="Name"
                  className="mr-2 border p-2 rounded"
                />
                <input
                  type="number"
                  name="age"
                  value={p.age}
                  onChange={(e) => handleInputChange(i, e)}
                  placeholder="Age"
                  className="mr-2 border p-2 rounded"
                />
                <input
                  type="text"
                  name="seat"
                  value={p.seat}
                  onChange={(e) => handleInputChange(i, e)}
                  placeholder="Seat"
                  className="border p-2 rounded"
                />
              </div>
            ))
          ) : (
            booking.passengers.map((p, i) => (
              <div key={i} className="ml-4 text-gray-700">
                • {p.name} | Age: {p.age} | Seat: {p.seat}
              </div>
            ))
          )}

          <div className="mt-3">
            {editing === booking._id ? (
              <button
                onClick={() => handleUpdate(booking._id)}
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(booking)}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
