import { createContext, useContext, useState } from "react";
import { Main } from "../../interfaces/users";
import { Outlet } from "react-router-dom";

export interface UserContextType {
  array: Main
  setArray: Function
}


//Creando contexto
const users = createContext({} as UserContextType);



//Creando el provider
export const UserContextProvider = () => {

  const [array, setArray] = useState({} as Main)

  return (
    <users.Provider value={{array, setArray}}>
      {<Outlet/>}
    </users.Provider>
  )
}


// Crear el custom hook para poder usar el contexto en el componente que quieras
export const userFornitureContext = () => {

  const context = useContext(users)
  if (!context) {
      throw new Error ("Error")
  }
  return context 
}
