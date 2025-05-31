// import React, { useState } from 'react';

// const dummyFlights = [
//   {
//     id: 1,
//     airline: "IndiGo",
//     nonStop: true,
//     refundable: true,
//     price: 10317,
//     duration: "3h",
//     from: "New Delhi",
//     to: "Bengaluru"
//   },
//   {
//     id: 2,
//     airline: "Air India",
//     nonStop: false,
//     refundable: false,
//     price: 9817,
//     duration: "5h",
//     from: "New Delhi",
//     to: "Bengaluru"
//   }
// ];

// export default function FlightFilters() {
//   const [filters, setFilters] = useState({
//     nonStop: true,
//     nearby: false,
//     refundable: false,
//     airline: 'IndiGo',
//     fareType: 'Doctor',
//   });

//   // Filter logic
//   const filteredFlights = dummyFlights.filter(flight => {
//     return (
//       (!filters.nonStop || flight.nonStop) &&
//       (!filters.refundable || flight.refundable) &&
//       (!filters.airline || flight.airline === filters.airline)
//     );
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold mb-6">Flight Filters UI</h1>

//       <div className="grid grid-cols-4 gap-6">
//         {/* Sidebar */}
//         <div className="bg-white p-4 rounded shadow col-span-1">
//           <h2 className="text-xl font-semibold mb-4">Filters</h2>
//           <label className="block mb-2">
//             <input
//               type="checkbox"
//               checked={filters.nonStop}
//               onChange={() =>
//                 setFilters(prev => ({ ...prev, nonStop: !prev.nonStop }))
//               }
//             />
//             <span className="ml-2">Non Stop</span>
//           </label>
//           <label className="block mb-2">
//             <input
//               type="checkbox"
//               checked={filters.refundable}
//               onChange={() =>
//                 setFilters(prev => ({ ...prev, refundable: !prev.refundable }))
//               }
//             />
//             <span className="ml-2">Refundable Fares</span>
//           </label>

//           <h3 className="mt-4 font-medium">Airlines</h3>
//           <label className="block">
//             <input
//               type="radio"
//               name="airline"
//               checked={filters.airline === "IndiGo"}
//               onChange={() =>
//                 setFilters(prev => ({ ...prev, airline: "IndiGo" }))
//               }
//             />
//             <span className="ml-2">IndiGo</span>
//           </label>
//           <label className="block">
//             <input
//               type="radio"
//               name="airline"
//               checked={filters.airline === "Air India"}
//               onChange={() =>
//                 setFilters(prev => ({ ...prev, airline: "Air India" }))
//               }
//             />
//             <span className="ml-2">Air India</span>
//           </label>
//         </div>

//         {/* Results */}
//         <div className="col-span-3">
//           <h2 className="text-xl font-semibold mb-4">Available Flights</h2>
//           {filteredFlights.length === 0 ? (
//             <p className="text-gray-600">No flights found with selected filters.</p>
//           ) : (
//             filteredFlights.map(flight => (
//               <div key={flight.id} className="bg-white p-4 mb-4 rounded shadow">
//                 <div className="flex justify-between">
//                   <div>
//                     <h3 className="text-lg font-bold">{flight.airline}</h3>
//                     <p className="text-sm text-gray-600">
//                       {flight.from} → {flight.to}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-blue-600 font-bold text-xl">₹{flight.price}</p>
//                     <p className="text-sm">{flight.duration}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// const FlightFilters = () => {
//   // State for filters
//   const [activeFilters, setActiveFilters] = useState(['NON STOP']);
//   const [selectedDate, setSelectedDate] = useState('Wed, Jun 4');
  
//   // Flight data
//   const flightDates = [
//     { date: 'Sat, May 31', price: 9817 },
//     { date: 'Sun, Jun 1', price: 9817 },
//     { date: 'Mon, Jun 2', price: 8195 },
//     { date: 'Tue, Jun 3', price: 7151 },
//     { date: 'Wed, Jun 4', price: 6894, isCheapest: true },
//     { date: 'Thu, Jun 5', price: 6321 },
//     { date: 'Fri, Jun 6', price: 6894 },
//     { date: 'Sat, Jun 7', price: 6321 },
//   ];

//   const FlightFilters = [
//     'Non Stop',
//     'Hide Nearby Airports',
//     'Refundable Fares',
//     'IndiGo',
//     '+ 5 more'
//   ];

//   const departureAirports = [
//     { name: 'Indira Gandhi International Airport', price: 9817 }
//   ];

//   const highlightedFlights = [
//     { type: 'CHEAPEST', price: 10317, airline: 'Osh' },
//     { type: 'NON STOP FIRST', price: 10317, airline: 'Osh' },
//     { type: 'YOU MAY PREFER', price: 10317, airline: 'Osh' }
//   ];

//   // Handler functions
//   const toggleFilter = (filter) => {
//     if (filter === '+ 5 more') return;
    
//     setActiveFilters(prev => {
//       if (prev.includes(filter)) {
//         return prev.filter(f => f !== filter);
//       } else {
//         return [...prev, filter];
//       }
//     });
//   };

//   const selectDate = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-6xl">
//       <h1 className="text-2xl font-bold mb-5">Flights from New Delhi to Bengaluru</h1>
      
//       {/* Offers Section */}
//       <div className="bg-blue-50 p-4 rounded-lg mb-4">
//         <h3 className="font-semibold">VISA Card Exclusive Offer</h3>
//         <p className="text-sm">Get free seat using VISA Signature Credit card. Discount will be automatically applied on payments page.</p>
//       </div>
      
//       <div className="bg-green-50 p-4 rounded-lg mb-4">
//         <h3 className="font-semibold">Showing Itineraries with discounted fares for Doctors and Nurses</h3>
//         <p className="text-sm">Regular fares are also available. <a href="#" className="text-blue-600">View regular fares.</a></p>
//       </div>
      
//       {/* Date Selector */}
//       <div className="flex overflow-x-auto gap-2 py-4 mb-6 scrollbar-hide">
//         {flightDates.map((flight) => (
//           <div 
//             key={flight.date}
//             onClick={() => selectDate(flight.date)}
//             className={`flex flex-col items-center justify-center min-w-24 p-3 border rounded-lg cursor-pointer 
//               ${selectedDate === flight.date ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
//               ${flight.isCheapest ? 'border-red-300 bg-red-50' : ''}`}
//           >
//             <div>{flight.date}</div>
//             <div className="font-medium">${flight.price.toLocaleString()}</div>
//             {flight.isCheapest && <div className="text-xs text-red-500 mt-1">CHEAPEST</div>}
//           </div>
//         ))}
//       </div>
      
//       {/* Highlighted Flight Options */}
//       {highlightedFlights.map((flight) => (
//         <div key={flight.type} className="border border-gray-200 rounded-lg p-4 mb-3">
//           <div className="font-bold">{flight.type}</div>
//           <div>${flight.price.toLocaleString()} | {flight.airline}</div>
//         </div>
//       ))}
      
//       {/* Login Section */}
//       <div className="border-t border-b border-gray-200 py-4 my-4 text-center">
//         <button className="text-blue-600 font-medium">Login or Create Account</button>
//       </div>
      
//       {/* Filters Section */}
//       <div className="mb-6">
//         <h3 className="font-bold mb-2">Applied Filters</h3>
//         <div className="flex flex-wrap gap-2">
//           {activeFilters.map(filter => (
//             <div 
//               key={filter}
//               className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
//             >
//               {filter}
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="mb-6">
//         <h3 className="font-bold mb-2">Popular Filters</h3>
//         <div className="flex flex-wrap gap-2">
//           {FlightFilters.map(filter => (
//             <div
//               key={filter}
//               onClick={() => toggleFilter(filter)}
//               className={`px-4 py-2 border rounded-full text-sm cursor-pointer
//                 ${activeFilters.includes(filter) ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-300'}`}
//             >
//               {filter}
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="mb-6">
//         <h3 className="font-bold mb-2">Departure Airports</h3>
//         <div className="flex flex-wrap gap-2">
//           {departureAirports.map(airport => (
//             <div 
//               key={airport.name}
//               className="px-4 py-2 border border-gray-300 rounded-lg"
//             >
//               <div>{airport.name}</div>
//               <div className="font-medium">${airport.price.toLocaleString()}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightFilters;

// import React, { useState } from 'react';

// const FlightFilters = () => {
//   // State for filters and selections
//   const [activeFilters, setActiveFilters] = useState(['NON STOP']);
//   const [selectedDate, setSelectedDate] = useState('Wed, Jun 4');
//   const [showAllFilters, setShowAllFilters] = useState(false);

//   // Flight data - would typically come from an API in a real app
//   const flightDates = [
//     { date: 'Sat, May 31', price: 9817, isRefundable: false, airline: 'IndiGo', stops: 1 },
//     { date: 'Sun, Jun 1', price: 9817, isRefundable: true, airline: 'Air India', stops: 0 },
//     { date: 'Mon, Jun 2', price: 8195, isRefundable: false, airline: 'Vistara', stops: 1 },
//     { date: 'Tue, Jun 3', price: 7151, isRefundable: true, airline: 'IndiGo', stops: 0 },
//     { date: 'Wed, Jun 4', price: 6894, isCheapest: true, isRefundable: true, airline: 'SpiceJet', stops: 0 },
//     { date: 'Thu, Jun 5', price: 6321, isRefundable: false, airline: 'GoAir', stops: 1 },
//     { date: 'Fri, Jun 6', price: 6894, isRefundable: true, airline: 'IndiGo', stops: 0 },
//     { date: 'Sat, Jun 7', price: 6321, isRefundable: false, airline: 'Air Asia', stops: 1 },
//   ];

//   // Filter options
//   const allFilters = [
//     { id: 'non-stop', label: 'Non Stop', filterFn: flight => flight.stops === 0 },
//     { id: 'refundable', label: 'Refundable', filterFn: flight => flight.isRefundable },
//     { id: 'indiGo', label: 'IndiGo', filterFn: flight => flight.airline === 'IndiGo' },
//     { id: 'air-india', label: 'Air India', filterFn: flight => flight.airline === 'Air India' },
//     { id: 'vistara', label: 'Vistara', filterFn: flight => flight.airline === 'Vistara' },
//     { id: 'spiceJet', label: 'SpiceJet', filterFn: flight => flight.airline === 'SpiceJet' },
//   ];

//   // Filter flights based on active filters and selected date
//   const filteredFlights = flightDates.filter(flight => {
//     // Filter by date first
//     if (flight.date !== selectedDate) return false;
    
//     // Apply all active filters
//     return activeFilters.every(filterId => {
//       const filter = allFilters.find(f => f.id === filterId);
//       return filter ? filter.filterFn(flight) : true;
//     });
//   });

//   // Toggle filter selection
//   const toggleFilter = (filterId) => {
//     setActiveFilters(prev => 
//       prev.includes(filterId) 
//         ? prev.filter(id => id !== filterId) 
//         : [...prev, filterId]
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Header */}
//       <h1 className="text-2xl font-bold mb-6">Flights from New Delhi to Bengaluru</h1>
      
//       {/* Offers Section */}
//       <div className="bg-blue-50 p-4 rounded-lg mb-6">
//         <h3 className="font-semibold text-blue-800">VISA Card Exclusive Offer</h3>
//         <p className="text-blue-700">Get free seat using VISA Signature Credit card.</p>
//       </div>
      
//       {/* Date Selector */}
//       <div className="mb-8">
//         <h2 className="text-lg font-semibold mb-3">Select Departure Date</h2>
//         <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin">
//           {flightDates.map(flight => (
//             <button
//               key={flight.date}
//               onClick={() => setSelectedDate(flight.date)}
//               className={`flex flex-col items-center min-w-28 p-3 rounded-lg border transition-colors
//                 ${selectedDate === flight.date ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}
//                 ${flight.isCheapest ? 'border-2 border-green-500' : ''}`}
//             >
//               <span>{flight.date}</span>
//               <span className="font-medium mt-1">₹{flight.price.toLocaleString()}</span>
//               {flight.isCheapest && (
//                 <span className="text-xs text-green-600 mt-1">Cheapest</span>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
      
//       {/* Filters Section */}
//       <div className="mb-8 p-4 bg-gray-50 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Filter Flights</h2>
        
//         {/* Applied Filters */}
//         {activeFilters.length > 0 && (
//           <div className="mb-4">
//             <h3 className="text-sm font-medium mb-2">Applied Filters</h3>
//             <div className="flex flex-wrap gap-2">
//               {activeFilters.map(filterId => {
//                 const filter = allFilters.find(f => f.id === filterId);
//                 return (
//                   <span 
//                     key={filterId}
//                     className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
//                   >
//                     {filter?.label}
//                     <button 
//                       onClick={() => toggleFilter(filterId)}
//                       className="ml-2 text-blue-600 hover:text-blue-800"
//                     >
//                       ×
//                     </button>
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//         )}
        
//         {/* All Filters */}
//         <div>
//           <h3 className="text-sm font-medium mb-2">All Filters</h3>
//           <div className="flex flex-wrap gap-2">
//             {allFilters.slice(0, showAllFilters ? allFilters.length : 3).map(filter => (
//               <button
//                 key={filter.id}
//                 onClick={() => toggleFilter(filter.id)}
//                 className={`px-4 py-2 rounded-full text-sm border transition-colors
//                   ${activeFilters.includes(filter.id) 
//                     ? 'bg-blue-100 border-blue-300 text-blue-800' 
//                     : 'bg-white border-gray-300 hover:bg-gray-100'}`}
//               >
//                 {filter.label}
//               </button>
//             ))}
//             {allFilters.length > 3 && (
//               <button
//                 onClick={() => setShowAllFilters(!showAllFilters)}
//                 className="px-4 py-2 rounded-full text-sm border border-gray-300 bg-white hover:bg-gray-100"
//               >
//                 {showAllFilters ? 'Show Less' : `+${allFilters.length - 3} More`}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* Flight Results */}
//       <div className="mb-8">
//         <h2 className="text-lg font-semibold mb-4">Available Flights</h2>
        
//         {filteredFlights.length === 0 ? (
//           <div className="text-center py-8 text-gray-500">
//             No flights match your filters. Try adjusting your criteria.
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {filteredFlights.map(flight => (
//               <div key={flight.date} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-semibold">{flight.airline}</h3>
//                     <p className="text-sm text-gray-600">{flight.date}</p>
//                     <p className="text-sm mt-1">
//                       {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
//                       {flight.isRefundable && (
//                         <span className="ml-2 text-green-600">Refundable</span>
//                       )}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-xl font-bold">₹{flight.price.toLocaleString()}</p>
//                     <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
//                       Select
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FlightFilters;

import React, { useState } from 'react';
import { FiFilter, FiX, FiChevronDown, FiChevronUp, FiStar } from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';

const FlightSearchPage = () => {
  // State for filters and UI
  const [filters, setFilters] = useState({
    stops: [],
    airlines: [],
    priceRange: [0, 20000],
    departureTime: [],
    refundable: false,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState('price');
  const [expandedFilter, setExpandedFilter] = useState(null);

  // Flight data
  const flights = [
    {
      id: 1,
      airline: 'IndiGo',
      logo: 'https://via.placeholder.com/80x30?text=IndiGo',
      price: 4899,
      departure: '06:30',
      arrival: '09:00',
      duration: '2h 30m',
      stops: 0,
      refundable: true,
      rating: 4.5,
    },
    {
      id: 2,
      airline: 'Air India',
      logo: 'https://via.placeholder.com/80x30?text=AirIndia',
      price: 5699,
      departure: '08:15',
      arrival: '11:45',
      duration: '3h 30m',
      stops: 1,
      refundable: false,
      rating: 3.8,
    },
    {
      id: 3,
      airline: 'Vistara',
      logo: 'https://via.placeholder.com/80x30?text=Vistara',
      price: 6599,
      departure: '10:00',
      arrival: '12:15',
      duration: '2h 15m',
      stops: 0,
      refundable: true,
      rating: 4.7,
    },
    {
      id: 4,
      airline: 'SpiceJet',
      logo: 'https://via.placeholder.com/80x30?text=SpiceJet',
      price: 4299,
      departure: '14:30',
      arrival: '18:45',
      duration: '4h 15m',
      stops: 1,
      refundable: false,
      rating: 3.9,
    },
    {
      id: 5,
      airline: 'GoAir',
      logo: 'https://via.placeholder.com/80x30?text=GoAir',
      price: 3999,
      departure: '19:00',
      arrival: '21:15',
      duration: '2h 15m',
      stops: 0,
      refundable: true,
      rating: 4.2,
    },
  ];

  // Filter options
  const filterOptions = {
    stops: [
      { value: 0, label: 'Non-stop' },
      { value: 1, label: '1 Stop' },
      { value: 2, label: '2+ Stops' },
    ],
    airlines: [
      { value: 'IndiGo', label: 'IndiGo' },
      { value: 'Air India', label: 'Air India' },
      { value: 'Vistara', label: 'Vistara' },
      { value: 'SpiceJet', label: 'SpiceJet' },
      { value: 'GoAir', label: 'GoAir' },
    ],
    departureTime: [
      { value: 'morning', label: 'Morning (6AM-12PM)' },
      { value: 'afternoon', label: 'Afternoon (12PM-5PM)' },
      { value: 'evening', label: 'Evening (5PM-9PM)' },
      { value: 'night', label: 'Night (9PM-6AM)' },
    ],
  };

  // Filter handlers
  const toggleFilter = (type, value) => {    
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value],
    }));
  };

  const toggleRefundable = () => {
    setFilters(prev => ({ ...prev, refundable: !prev.refundable }));
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setFilters(prev => ({ ...prev, priceRange: newPriceRange }));
  };

  // Apply filters
  const filteredFlights = flights.filter(flight => {
    // Filter by stops
    if (filters.stops.length > 0 && !filters.stops.includes(flight.stops)) {
      return false;
    }
    
    // Filter by airlines
    if (filters.airlines.length > 0 && !filters.airlines.includes(flight.airline)) {
      return false;
    }
    
    // Filter by price
    if (flight.price < filters.priceRange[0] || flight.price > filters.priceRange[1]) {
      return false;
    }
    
    // Filter by departure time
    if (filters.departureTime.length > 0) {
      const departureHour = parseInt(flight.departure.split(':')[0]);
      let timeMatch = false;
      
      if (filters.departureTime.includes('morning') && departureHour >= 6 && departureHour < 12) {
        timeMatch = true;
      }
      if (filters.departureTime.includes('afternoon') && departureHour >= 12 && departureHour < 17) {
        timeMatch = true;
      }
      if (filters.departureTime.includes('evening') && departureHour >= 17 && departureHour < 21) {
        timeMatch = true;
      }
      if (filters.departureTime.includes('night') && (departureHour >= 21 || departureHour < 6)) {
        timeMatch = true;
      }
      
      if (!timeMatch) return false;
    }
    
    // Filter by refundable
    if (filters.refundable && !flight.refundable) {
      return false;
    }
    
    return true;
  });

  // Sort flights
  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (selectedSort === 'price') return a.price - b.price;
    if (selectedSort === 'duration') {
      const aDuration = parseInt(a.duration.split('h')[0]) * 60 + parseInt(a.duration.split('h')[1].split('m')[0]);
      const bDuration = parseInt(b.duration.split('h')[0]) * 60 + parseInt(b.duration.split('h')[1].split('m')[0]);
      return aDuration - bDuration;
    }
    if (selectedSort === 'departure') {
      return a.departure.localeCompare(b.departure);
    }
    if (selectedSort === 'rating') return b.rating - a.rating;
    return 0;
  });

  // Count active filters
  const activeFilterCount = 
    filters.stops.length +
    filters.airlines.length +
    filters.departureTime.length +
    (filters.refundable ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 20000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-600">Flights from Delhi to Mumbai</h1>
          <p className="text-gray-600">Tue, 31 May - 1 Adult</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block bg-amber-300 rounded-lg shadow-sm p-4`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedFilter(expandedFilter === 'price' ? null : 'price')}
              >
                <h3 className="font-medium">Price Range</h3>
                {expandedFilter === 'price' ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {expandedFilter === 'price' && (
                <div className="mt-3">
                  <div className="flex justify-between mb-2">
                    <span>₹{filters.priceRange[0]}</span>
                    <span>₹{filters.priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={filters.priceRange[0]}
                    onChange={e => handlePriceChange(e, 0)}
                    className="w-full mb-4"
                  />
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={filters.priceRange[1]}
                    onChange={e => handlePriceChange(e, 1)}
                    className="w-full"
                  />
                </div>
              )}
            </div>

            {/* Stops */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedFilter(expandedFilter === 'stops' ? null : 'stops')}
              >
                <h3 className="font-medium">Stops</h3>
                {expandedFilter === 'stops' ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {expandedFilter === 'stops' && (
                <div className="mt-3 space-y-2">
                  {filterOptions.stops.map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.stops.includes(option.value)}
                        onChange={() => toggleFilter('stops', option.value)}
                        className="mr-2"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Airlines */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedFilter(expandedFilter === 'airlines' ? null : 'airlines')}
              >
                <h3 className="font-medium">Airlines</h3>
                {expandedFilter === 'airlines' ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {expandedFilter === 'airlines' && (
                <div className="mt-3 space-y-2">
                  {filterOptions.airlines.map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.airlines.includes(option.value)}
                        onChange={() => toggleFilter('airlines', option.value)}
                        className="mr-2"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Departure Time */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedFilter(expandedFilter === 'departureTime' ? null : 'departureTime')}
              >
                <h3 className="font-medium">Departure Time</h3>
                {expandedFilter === 'departureTime' ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {expandedFilter === 'departureTime' && (
                <div className="mt-3 space-y-2">
                  {filterOptions.departureTime.map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.departureTime.includes(option.value)}
                        onChange={() => toggleFilter('departureTime', option.value)}
                        className="mr-2"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Refundable */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.refundable}
                  onChange={toggleRefundable}
                  className="mr-2"
                />
                <span className="font-medium">Refundable Only</span>
              </label>
            </div>

            <button
              onClick={() => setFilters({
                stops: [],
                airlines: [],
                priceRange: [0, 20000],
                departureTime: [],
                refundable: false,
              })}
              className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 font-medium"
            >
              Clear All Filters
            </button>
          </div>

          {/* Flight Results */}
          <div className="lg:w-3/4">
            {/* Filter and Sort Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-md"
                  >
                    <FiFilter />
                    <span>Filters</span>
                    {activeFilterCount > 0 && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>
                  <p className="text-gray-600">
                    {filteredFlights.length} flights found
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Sort by:</span>
                  <select
                    value={selectedSort}
                    onChange={e => setSelectedSort(e.target.value)}
                    className="border rounded-md px-3 py-2"
                  >
                    <option value="price">Price (Lowest)</option>
                    <option value="duration">Duration (Shortest)</option>
                    <option value="departure">Departure (Earliest)</option>
                    <option value="rating">Rating (Highest)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Flight Cards */}
            {sortedFlights.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No flights match your filters</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button
                  onClick={() => setFilters({
                    stops: [],
                    airlines: [],
                    priceRange: [0, 20000],
                    departureTime: [],
                    refundable: false,
                  })}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedFlights.map(flight => (
                  <div key={flight.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        {/* Airline Info */}
                        <div className="flex items-center gap-4">
                          <img src={flight.logo} alt={flight.airline} className="h-8" />
                          <div>
                            <h3 className="font-medium">{flight.airline}</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <span>{flight.rating}</span>
                              <FiStar className="text-yellow-400" />
                            </div>
                          </div>
                        </div>

                        {/* Flight Timing */}
                        <div className="flex-1 flex flex-col sm:flex-row items-center justify-around gap-4">
                          <div className="text-center">
                            <div className="text-xl font-medium">{flight.departure}</div>
                            <div className="text-sm text-gray-600">Delhi</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600">{flight.duration}</div>
                            <div className="relative w-32 h-px bg-gray-300">
                              <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-gray-400 transform -translate-y-1/2"></div>
                              <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-gray-400 transform -translate-y-1/2"></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-medium">{flight.arrival}</div>
                            <div className="text-sm text-gray-600">Mumbai</div>
                          </div>
                        </div>

                        {/* Price and Book */}
                        <div className="flex flex-col items-end justify-between">
                          <div className="text-2xl font-bold text-blue-600 flex items-center">
                            <FaRupeeSign className="text-lg" />
                            <span>{flight.price}</span>
                          </div>
                          <div className="text-xs text-gray-500 mb-2">
                            {flight.refundable ? 'Refundable' : 'Non-refundable'}
                          </div>
                          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchPage;