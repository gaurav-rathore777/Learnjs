import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [passengers, setPassengers] = useState([{ name: '', age: '', seat: '' }]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePassengerChange = (index, { target }) => {
    const updated = passengers.map((p, i) =>
      i === index ? { ...p, [target.name]: target.value } : p
    );
    setPassengers(updated);
  };

  const addPassenger = () =>
    setPassengers([...passengers, { name: '', age: '', seat: '' }]);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post('http://localhost:8000/api/bookings', {
      userEmail,
      passengers,
    });

    // ✅ Save email and passengers correctly
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('bookedPassengers', JSON.stringify(data.passengers));

    console.log(data);
    console.log("Passengers:", data.passengers);

    setMessage(data.message);
    setError('');
    navigate('/reviewbooking');
  } catch (err) {
    setError(err.response?.data?.error || 'Booking failed');
    setMessage('');
  }
};



  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white text-black rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Tickets</h2>

      {message && <p className="text-green-600 mb-4 text-center">{message}</p>}
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Your Email:</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {passengers.map((p, i) => (
          <div key={i} className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Passenger {i + 1}</h4>

            <input
              type="text"
              name="name"
              value={p.name}
              onChange={(e) => handlePassengerChange(i, e)}
              placeholder="Name"
              className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="number"
              name="age"
              value={p.age}
              onChange={(e) => handlePassengerChange(i, e)}
              placeholder="Age"
              className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="seat"
              value={p.seat}
              onChange={(e) => handlePassengerChange(i, e)}
              placeholder="Seat (e.g. A1)"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
        ))}

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <button
            type="button"
            onClick={addPassenger}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Add Passenger
          </button>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            Book Tickets
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
