import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

function Signup() {
  const createFun = async (formData) => {
    const response = await fetch('http://localhost:8000/api/auth/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  const mutation = useMutation({
    mutationFn: createFun,
    onSuccess: (data) => {
      console.log('Signup success:', data);
      alert('Signup successful!');
    },
    onError: (error) => {
      console.error('Signup error:', error.message);
      alert(error.message || 'Signup failed');
    },
  });

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    company: '',
    // userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     mutation.mutate(formData);
//   };
const handleSubmit = (e) => {
  e.preventDefault();

  console.log('📤 Sending formData:', formData); // log it

  const payload = { ...formData };
  delete payload.confirmPassword; // usually not needed on backend

  mutation.mutate(payload);
};


  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col text-black gap-4">
        {/* <input type="text" name="userName" placeholder="User Name" value={formData.userName} onChange={handleChange} className="p-2 border border-gray-300 rounded" /> */}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="p-2 border border-gray-300 rounded" />

        <button type="submit" disabled={mutation.isLoading} className="bg-blue-500 text-white p-2 rounded">
          {mutation.isLoading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
}

export default Signup;
