import React, { useEffect, useState } from 'react';
import "../../../welcomepage/components/featured/featured.css";
import Filter from '../filter';
import CardProduct from '../../../../components/cardProduct';
import { Main } from '../../../../interfaces/products';
import { useFornitureContext } from '../../../../context/productContext';
import Header from '../../../../components/Header';
import Footer from '../../../../components/footer';

type Props = {}


export default function DisplayCatalogAll({}: Props) {
  
  const productsFromArray = useFornitureContext(); 
  
  return (
    <>
    <Header/>
    <Filter/>
    <div className='catalog-products'>
      
            {productsFromArray.array.map((product) => { 
                return (
                  <CardProduct
                  key={product.id}
                  id={product.id}
                  img={product.Image}
                  name={product.Name}
                  price={product.Price}
                  highlight={product.Highlight}
                  />
                )}
              )
            }
          
    </div>
    <Footer/>
    </>
  )
}
