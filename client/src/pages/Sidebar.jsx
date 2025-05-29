// Sidebar.jsx
import React from 'react';

function Sidebar({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <span className="text-xl font-bold">Menu</span>
        <button onClick={onClose} className="text-2xl hover:text-red-400">
          ✖
        </button>
      </div>

      {/* children will render here */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
