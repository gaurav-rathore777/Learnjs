
import data from '../data/Data.json'; // Assuming your JSON data is in this path
import { useState } from 'react';
import FilterData from '../components/FilterData';

function SearchFilter() {
    const [search, setSearch] = useState('');
    
    // Filter data based on search input
    // const filteredData = data.filter((item) =>
    //   `${item.first_name} ${item.last_name} ${item.email} ${item.gender}`
    //     .toLowerCase()
    //     .includes(search.toLowerCase())
    // );
    const [selectedGender, setSelectedGender] = useState("All");
    // Filter users based on selected gender
    const filteredData =
      selectedGender === "All"       
        ? data
        : data.filter((item) => item
          .gender.toLowerCase() === selectedGender.toLowerCase());
    
  return (
    <>
    <div>SearchFilter</div>
    <div className='text-center text-black font-semibold mt-4 mb-4'>
      <h1 className="text-3xl">Filter</h1>
      <input
        type="text"
        placeholder="Search by name, email, or gender"
        className="mt-3 p-2 w-72 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div>
        <FilterData filteredData={filteredData} selectedGender={selectedGender} setSelectedGender={setSelectedGender}/>
    </div>
    </>
  )
}

export default SearchFilter