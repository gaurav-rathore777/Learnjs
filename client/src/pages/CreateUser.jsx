import React from "react";
import axios from "axios";
import GeneratePDF from "../components/GeneratePDF";
import { UserContext } from "../context/UserContext";
function CreateUser() {
   const { userData1, setUserData1} = React.useContext(UserContext)
  const [userData , setUserData] = React.useState([]);
  const [users, setUsers] = React.useState([
    {
      emailAddress: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      company: "",
    },
  ]);

  const addUser = () => {
    setUsers([
      ...users,
      {
        emailAddress: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        company: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newUsers = [...users];
    newUsers[index][name] = value;
    setUsers(newUsers);
  };

  const handleSubmit = async (index, e) => {
    e.preventDefault();
    const user = users[index];
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/create",
        user
      );
      setUserData(data);
          setUserData1((prev) => [...prev, data]); // update context value
      // setUserData((prevData) => [...prevData, data]);
      console.log(`User ${index + 1} created successfully:`, data);
    } catch (err) {
      console.error(`Error creating user ${index + 1}:`, err);
    }
  };

  return (
    <div className="p-4 
         ">
      <h3 className="text-xl font-bold mb-4">Create Users</h3>
      <button
        onClick={addUser}
        className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Another User
      </button>

      {users.map((user, index) => (
        <form
        style={{color: "black"}}
          key={index}
          onSubmit={(e) => handleSubmit(index, e)}
          className="border p-4 mb-6 max-w-xl bg-red-50 rounded-lg  shadow-md"
        >
          <h4 className=" font-semibold mb-2">User {index + 1}</h4>
          <label htmlFor="emailAddress" className="block mb-1 text-black"> Email Address</label>

          <input
            type="email"
            name="emailAddress"
            value={user.emailAddress}
            onChange={(e) => handleChange(index, e)}
            placeholder="Email Address"
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />

            <label htmlFor="password" className="block mb-1 text-black"> Password</label>

          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(index, e)}
            placeholder="Password"
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
            <label htmlFor="confirmPassword" className="block mb-1 text-black"> Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => handleChange(index, e)}
            placeholder="Confirm Password"
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
            <label htmlFor="firstName" className="block mb-1 text-black"> First Name</label>

          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(index, e)}
            placeholder="First Name"
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />

            <label htmlFor="lastName" className="block mb-1 text-black"> Last Name</label>  
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleChange(index, e)}
            placeholder="Last Name"
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />

            <label htmlFor="phoneNumber" className="block mb-1 text-black"> Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={(e) => handleChange(index, e)}
            placeholder="Phone Number (123-456-7890)"
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />

            <label htmlFor="company" className="block mb-1 text-black"> Company</label>
          <input
            type="text"
            name="company"
            value={user.company}
            onChange={(e) => handleChange(index, e)}
            placeholder="Company"
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Submit User {index + 1}
          </button>
        </form>
      ))}
      <GeneratePDF userData={userData} />

    </div>
  );
}

export default CreateUser;
