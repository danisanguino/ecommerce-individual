import { useEffect } from 'react'
import "./featured.css"
import CardProduct from '../../../../components/cardProduct'
import { useFornitureContext } from '../../../../context/productContext'

type Props = {}

export default function Featured({}: Props) {

const productsFromArray = useFornitureContext();


 // CALL API
 const getProductsData = async () => {
   try {
     const request = await fetch("./data/products.json");
     const JSONrequest = await request.json();

     productsFromArray.setArray(JSONrequest);

   } catch (error) {
     console.log("Message: " + error);
   }
 }

 

 useEffect(() => {
   // API CALL function
   getProductsData();
 }, []);

  return (
    <>
    
    <div className='featured'>
      <h3>Destacados</h3>
    </div>

   

    <div className='featured-products'>
     
      {productsFromArray.array.filter(product => product.Highlight).map((product) => { 
                return (
                  <CardProduct
                  key={product.id}
                  id={product.id}
                  img={product.Image}
                  name={product.Name}
                  price={product.Price}
                  highlight={product.Highlight}
                  class={product.Class}
                  />
                )}
              )
            }
    </div>
    </>
  )
}