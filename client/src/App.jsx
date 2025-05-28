// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyBookings from "./pages/MyBooking";
import ReviewBooking from "./pages/ReviewBooking";
import {Practice}  from "./pages/Practice"
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import FilterData from "./components/FilterData";
import SearchFilter from "./pages/SearchFilter";

const App = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/filter" element={<FilterData />} />


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mybooking" element={<MyBookings />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/search" element={<SearchFilter />} />



          <Route path="/reviewbooking" element={<ReviewBooking />} />


        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
