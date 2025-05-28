import React, { useState } from 'react';
import data from '../data/Data.json';

function FilterData() {
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Create a list of suggestion strings (combined and unique fields)
  const suggestionList = Array.from(
    new Set(
      data.flatMap((item) => [
        item.first_name,
        item.last_name,
        item.email,
        item.gender,
      ])
    )
  )
    .filter((val) => val.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  const handleSuggestionClick = (text) => {
    setSearch(text);
    setShowSuggestions(false);
  };

  const filteredData = data.filter((item) =>
    `${item.first_name} ${item.last_name} ${item.email} ${item.gender}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className='text-center text-black font-semibold mt-4 mb-4'>
        <h1 className="text-3xl">Filter</h1>
        <div className="relative w-72 mx-auto">
          <input
            type="text"
            placeholder="Search by name, email, or gender"
            className="mt-3 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          />

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestionList.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded-md mt-1 max-h-48 overflow-auto shadow-lg text-left">
              {suggestionList.slice(0, 10).map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Filtered Cards */}
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="max-w-sm mx-auto mb-4 mt-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              {item.first_name} {item.last_name}
            </h2>
            <p className="text-gray-500 text-sm">{item.email}</p>
            <div className="mt-4 inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {item.gender}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FilterData;



// import React, { useState } from 'react';
// import data from '../data/Data.json'; // Assuming your JSON data is in this path

// function FilterData({ filteredData, selectedGender, setSelectedGender }) {
  // const [selectedGender, setSelectedGender] = useState("All");

  // Filter users based on selected gender
  // const filteredData =
  //   selectedGender === "All"
  //     ? data
  //     : data.filter((item) => item.gender.toLowerCase() === selectedGender.toLowerCase());

//   return (
//     <>
//       <div className="text-center text-black font-semibold mt-4 mb-6">
//         <h1 className="text-3xl mb-3">Filter by Gender</h1>
//         <select
//           className="p-2 w-60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={selectedGender}
//           onChange={(e) => setSelectedGender(e.target.value)}
//         >
//           <option value="All">All</option> 
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           {/* Add more options if needed, like Non-Binary, Others, etc. */}
//         </select>
//       </div>

//       {filteredData.map((item, index) => (
//         <div
//           key={index}
//           className="max-w-sm mx-auto mb-4 mt-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
//         >
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-1">
//               {item.first_name} {item.last_name}
//             </h2>
//             <p className="text-gray-500 text-sm">{item.email}</p>
//             <div className="mt-4 inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
//               {item.gender}
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default FilterData;

