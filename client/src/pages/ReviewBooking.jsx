import React, { useEffect, useState } from 'react';

const ReviewBooking = () => {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('bookedPassengers');
    if (!stored) {
      alert('No passengers found. Please book tickets first.');
      return;
    }

    const data = JSON.parse(stored);
    if (data.length === 0) {
      alert('No passengers found. Please book tickets first.');
      return;
      
    }

    setPassengers(data);
  }, []);

  const handleChange = (index, { target }) => {
    const updated = passengers.map((p, i) =>
      i === index ? { ...p, [target.name === 'name' ? 'userName' : target.name]: target.value } : p
    );
    setPassengers(updated);
  };

  const handleSaveChanges = () => {
    localStorage.setItem('bookedPassengers', JSON.stringify(passengers));
    alert('Changes saved!');
  };

  const handleDownloadTickets = () => {
    const content = passengers
      .map(
        (p, i) =>
          `Passenger ${i + 1}\nName: ${p.name}\nAge: ${p.age}\nSeat: ${p.seat}\n--------------------`
      )
      .join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'tickets.txt';
    downloadLink.click();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white text-black rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Review & Edit Passengers</h2>

      {passengers.map((p, i) => (
        <div key={i} className="mb-6 p-4 border rounded-lg bg-gray-50">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Passenger {i + 1}</h4>
          <input
            type="text"
            name="name"
            value={p.userName}
            onChange={(e) => handleChange(i, e)}
            placeholder="Name"
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            name="age"
            value={p.age}
            onChange={(e) => handleChange(i, e)}
            placeholder="Age"
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="seat"
            value={p.seat}
            onChange={(e) => handleChange(i, e)}
            placeholder="Seat (e.g. A1)"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      ))}

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleSaveChanges}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Save Changes
        </button>

        <button
          onClick={handleDownloadTickets}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
        >
          Download Tickets
        </button>
      </div>
    </div>
  );
};

export default ReviewBooking;
