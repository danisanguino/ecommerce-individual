import React, { useEffect, useState } from 'react';
import "../../../welcomepage/components/featured/featured.css";
import Filter from '../filter';
import CardProduct from '../../../../components/cardProduct';
import { Main } from '../../../../interfaces/products';
import { useFornitureContext } from '../../../../context/productContext';

type Props = {}


export default function DisplayCatalog({}: Props) {
  
  const productsFromArray = useFornitureContext(); 
  
  return (
    <>
      <Filter />
      
      <div className='catalog-products'>
      
            {productsFromArray.array.map((product) => { 
                return (
                  <CardProduct
                  key={product.id}
                  id={product.id}
                  img={product.Image}
                  name={product.Name}
                  price={product.Price}
                  />
                )}
              )
            }
          
    </div>
    </>
  )
}
