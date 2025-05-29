// import React, { useState } from 'react';

// function ModalExample() {
//   const [isOpen, setIsOpen] = useState(false); // Modal ke liye state

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <div className="p-4">
//       <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
//         Open Modal
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded shadow-lg w-80">
//             <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
//             <p>You can close it by clicking the button below.</p>
//             <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ModalExample;






// import React, { useState } from 'react';



// function ModalExample() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const closeSidebar = () => setIsOpen(false);

//   return (
//     <div className="flex">
//       {/* Hamburger Button */}
//       <button
//         onClick={toggleSidebar}
//         className="m-4 p-2 focus:outline-none bg-gray-800 text-white rounded"
//       >
//         ☰
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out z-50`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-between items-center p-4 border-b border-gray-700">
//           <span className="text-xl font-bold">Menu</span>
//           <button onClick={closeSidebar} className="text-2xl hover:text-red-400">
//             ✖
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className="p-4 space-y-4">
//           <li className="hover:underline cursor-pointer">Home</li>
//           <li className="hover:underline cursor-pointer">About</li>
//           <li className="hover:underline cursor-pointer">Services</li>
//           <li className="hover:underline cursor-pointer">Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ModalExample;



// ModalExample.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="p-4">
      <button
        onClick={openSidebar}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Sidebar
      </button>

      <Sidebar isOpen={isOpen} onClose={closeSidebar}>
        {/* 👇 Yaha children pass ho rahe hain */}
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </Sidebar>
    </div>
  );
}

export default ModalExample;
