import React, { useEffect, useState } from 'react';
import "../../../welcomepage/components/featured/featured.css";
import Filter from '../filter';
import CardProduct from '../../../../components/cardProduct';
import { useFornitureContext } from '../../../../context/productContext';
import Header from '../../../../components/Header';
import Footer from '../../../../components/footer';

type Props = {}

export default function displayCatalogTables({}: Props) {

  const productsFromArray = useFornitureContext(); 

  return (
    <>
    <Header/>
    <Filter/>
    <div className='catalog-products'>

      {productsFromArray.array.filter(product => product.Class === "mesa").map((product) => { 
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
    <Footer/>
    </>
  )
}