import React, { createContext, useState } from "react";
// import { UserContext } from "../context/UserContext";
// 1. Create context
export const UserContext = createContext();


// 2. Create provider
export const UserProvider = ({ children }) => {
  
  const [userData1, setUserData1] = useState([]);
  const [user , setUser] = useState([]);
  const [passenger , setPassenger] = useState(()=>{
     const storedPassenger = localStorage.getItem('passenger');
    return storedPassenger ? JSON.parse(storedPassenger) : null;
  });

  return (
    <UserContext.Provider  value={{ userData1, setUserData1 , user, setUser,passenger , setPassenger }}>
      {children}
    </UserContext.Provider>
  );
};
