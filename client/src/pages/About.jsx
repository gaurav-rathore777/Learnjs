import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await axios.post('http://localhost:8000/api/auth/signup', formData);
      setMessage(res.data.message);
      console.log(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
   <div className="max-w-md mx-auto mt-10 bg-red-500 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>

      {message && <p className="text-green-200 text-center mb-2">{message}</p>}
      {error && <p className="text-red-200 text-center mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">User Name:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-red-500 font-semibold py-2 rounded hover:bg-gray-100 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default About;
