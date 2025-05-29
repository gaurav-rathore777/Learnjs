import React, { useState } from "react";

const fareTypes = ["Regular", "Student", "Doctor", "Senior", "Armed Forces"];

function FlightSearchForm({ onSearch }) {
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");
  const [departure, setDeparture] = useState("2025-05-30");
  const [returnDate, setReturnDate] = useState("2025-06-01");
  const [fareType, setFareType] = useState("Regular");
  const travelClasses = ["Economy", "Premium Economy", "Business", "First Class"];
const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(0);
const [infants, setInfants] = useState(0);
const [travelClass, setTravelClass] = useState("Economy");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
  from,
  to,
  departure,
  returnDate,
  fareType,
  adults,
  children,
  infants,
  travelClass,
});

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-amber-200 text-black shadow-md  rounded-lg p-6 space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">From</label>
          <input
            className="w-full border p-2 rounded"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">To</label>
          <input
            className="w-full border p-2 rounded"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Departure</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Return</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Select a Special Fare
        </label>
        <div className="flex flex-wrap gap-3">
          {fareTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFareType(type)}
              className={`px-4 py-2 rounded border ${
                fareType === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
  <h3 className="text-sm font-medium mb-2">Travellers & Class</h3>
  <div className="grid grid-cols-3 gap-4">
    {/* Adults */}
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">ADULTS (12+)</label>
      <select
        className="w-full border rounded p-2"
        value={adults}
        onChange={(e) => setAdults(Number(e.target.value))}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </div>

    {/* Children */}
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">CHILDREN (2-12)</label>
      <select
        className="w-full border rounded p-2"
        value={children}
        onChange={(e) => setChildren(Number(e.target.value))}
      >
        {[...Array(7)].map((_, i) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>

    {/* Infants */}
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">INFANTS (below 2)</label>
      <select
        className="w-full border rounded p-2"
        value={infants}
        onChange={(e) => setInfants(Number(e.target.value))}
      >
        {[...Array(7)].map((_, i) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Travel Class */}
  <div className="mt-4">
    <label className="block text-xs font-semibold text-gray-600 mb-2">CHOOSE TRAVEL CLASS</label>
    <div className="flex gap-2 flex-wrap">
      {travelClasses.map((cls) => (
        <button
          key={cls}
          type="button"
          className={`px-4 py-1 rounded border text-sm ${
            travelClass === cls ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setTravelClass(cls)}
        >
          {cls}
        </button>
      ))}
    </div>
  </div>
</div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        SEARCH
      </button>
    </form>
  );
}

export default FlightSearchForm;
