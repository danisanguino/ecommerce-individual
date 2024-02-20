import { createContext } from "react";

export const UserNameContext = createContext(null);


export const UserProvider = ({children}) => {

    const userData = {
        Name: "Danielo Sanguino",
        mail: "dani@gmail.com"
      }    

    return (
      <UserNameContext.Provider value={userData.Name}>
        {children}
      </UserNameContext.Provider>
    )
  }