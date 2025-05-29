import React, { useState } from "react";
import FlightSearchForm from "./FlightSearchForm";
import FlightResults from "./FlightResults";
import flightsData from "../data/flights.json";

function FlightApp() {
  const [filteredFlights, setFilteredFlights] = useState([]);
  

  const handleSearch = (filters) => {
    const results = flightsData.filter((flight) =>
  flight.from === filters.from &&
  flight.to === filters.to &&
  flight.departure === filters.departure &&
  flight.return === filters.returnDate &&
  flight.fareType === filters.fareType &&
  flight.class === filters.travelClass
);

    setFilteredFlights(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Flight Booking</h1>
        <FlightSearchForm onSearch={handleSearch} />
        <FlightResults results={filteredFlights} />
      </div>
    </div>
  );
}

export default FlightApp;
