import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/auth/users');
        setUsers(res.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-500 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User List</h2>

      {error && <p className="text-red-500">{error}</p>}

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user._id} className="border p-2 rounded">
              <strong>{user.userName}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
