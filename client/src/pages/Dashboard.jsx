// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const { passenger } = useContext(UserContext);

  console.log('Passenger from context:', passenger);
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Dashboard
      </h2>

      {passenger ? (
        <div className="text-gray-700">
          <p><strong>Welcome,</strong> {passenger.userName}</p>
          <p><strong>Email:</strong> {passenger.email}</p>
        </div>
      ) : (
        <p className="text-red-500 text-center">No user is logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;
