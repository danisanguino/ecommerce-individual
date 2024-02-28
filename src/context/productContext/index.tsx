import { createContext, useState, useContext } from "react";
import { Main } from "../../interfaces/products";
import { Outlet } from "react-router-dom";

export interface ProductContextType {
  array: Main[],
  setArray: Function 
}

//Contexto
const products = createContext({} as ProductContextType);

//Provider
export const ProductsContextProvider = () => {

  const [array, setArray] = useState([])

  return (
    <products.Provider value={{array, setArray}}>
      {<Outlet/>}
    </products.Provider>
  )
}

// Custom hook to use the Context
export const useFornitureContext = () => {

    const context = useContext(products)
    if (!context) {
        throw new Error ("Error")
    }
    return context 
}




