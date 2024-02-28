import { createContext, useContext, useState } from "react";
import { UserMain } from "../../interfaces/users";
import { Outlet } from "react-router-dom";

export interface UserContextType {
  array: UserMain;
  setArray: Function;
}

//Contexto
const users = createContext({} as UserContextType);

//Provider
export const UserContextProvider = () => {
  const [array, setArray] = useState({} as UserMain);

  return (
    <users.Provider value={{ array, setArray }}>{<Outlet />}</users.Provider>
  );
};

// Custom hook to use th context
export const userFornitureContext = () => {
  const context = useContext(users);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
