import React from "react";

function FlightResults({ results }) {
  if (results.length === 0)
    return <p className="mt-6 text-center text-gray-500">No flights found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {results.map((flight) => (
        <div
          key={flight.id}
          className="bg-white shadow-md rounded p-4 border border-gray-200"
        >
          <div className="text-xl font-semibold">
            {flight.from} → {flight.to}
          </div>
          <div className="text-sm text-gray-500">
            {flight.departure} - {flight.return}
          </div>
          <div className="mt-2">
            Fare: <span className="font-medium">{flight.fareType}</span>
          </div>
          <div className="text-lg font-bold mt-1">₹{flight.price}</div>
        </div>
      ))}
    </div>
  );
}

export default FlightResults;
