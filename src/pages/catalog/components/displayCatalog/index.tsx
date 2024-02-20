import React, { useEffect, useState } from 'react';
import "../../../welcomepage/components/featured/featured.css";
import Filter from '../filter';
import CardProduct from '../../../../components/cardProduct';
import { Main } from '../../../../interfaces/products';

type Props = {}


export default function DisplayCatalog({}: Props) {
  
  // Crear estado
  const [productData, setProductData] = useState<Main[]>([]);

  useEffect(() => {
    // API CALL function
    getProductsData();
  }, []);

  // Función LLamar async await
  const getProductsData = async () => {
    try {
      const request = await fetch("src/data/products.json");
      const JSONrequest = await request.json();

      setProductData(JSONrequest);


    } catch (error) {
      console.log("Message: " + error);
    }
  }

  return (
    <>
      <Filter />
      <div className='catalog-products'>
        
            {productData.map((product) => (
            <div key={product.id}>  
            <div className='card-product'>

            <div
            className='wish-btn'>
            <img src="src/assets/wish-product-icon.svg" />
            </div>

            <div
            className='img-product-thumbnail'>
            <img src={product.Image} alt='silla'/>
            </div>

            <h4>{product.Name}</h4>

            <p>{product.Price} €</p>

            </div>

            </div>
          ))} 
    </div>
    </>
  )
}
