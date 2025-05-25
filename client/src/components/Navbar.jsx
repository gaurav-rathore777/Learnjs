// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex  items-center gap-4">
        <li><Link style={{color: "white"}} to="/" className="hover:underline text-xl font-bold">Home</Link></li>
        <li><Link style={{color: "white"}} to="/about" className="hover:underline  text-xl font-bold">About</Link></li>
        <li><Link style={{color: "white"}} to="/mybooking" className="hover:underline text-xl font-bold">myboking</Link></li>

        <li><Link style={{color: "white"}} to="/contact" className="hover:underline text-xl font-bold">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
