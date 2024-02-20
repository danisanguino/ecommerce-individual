import { createContext, useState, FC, PropsWithChildren, useContext } from "react";
import { Main } from "../../interfaces/products";
import { Outlet } from "react-router-dom";

export interface ProductContextType {
  array: Main[],
  setArray: Function 
}

//Creado contexto
const products = createContext({} as ProductContextType);

//Creado provider, qda array con producto y un metodo para setear el array con el que abrazaremos a los componentes
export const ProductsContextProvider = () => {

  const [array, setArray] = useState([])

  return (
    <products.Provider value={{array, setArray}}>
      {<Outlet/>}
    </products.Provider>
  )
}

// Crear el custom hook para poder usar el contexto en el componente que quieras
export const useFornitureContext = () => {

    const context = useContext(products)
    if (!context) {
        throw new Error ("Error")
    }
    return context 
}




