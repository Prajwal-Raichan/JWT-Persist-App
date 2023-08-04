import React, { createContext, useContext, useState } from "react";

const StateAuthContext = createContext();

export const ContextAuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userRole, setUserRole] = useState([]);
  const [persist,setPersist]=useState(JSON.parse(localStorage.getItem("persist")) || false);
  

  return (
    <StateAuthContext.Provider
      value={{auth,setAuth,isAuthorized,setIsAuthorized,userRole,setUserRole,persist,setPersist}}>
      {children}
    </StateAuthContext.Provider>
  );
};

export const useStateAuthContext = () => useContext(StateAuthContext);
