import React, { useState } from 'react'
import "./resume.css"
import ProductCart from '../productCart'
import { userFornitureContext } from '../../../../context/user'
import { useFornitureContext } from '../../../../context/productContext'
import { Main } from '../../../../interfaces/products'

type Props = {}

export default function Resume({}: Props) {

  //Nos traemos los datos de los contextos con las llamadas ya realizadas
  const productTocart = useFornitureContext();
  const usersCartProduct = userFornitureContext();

  const [cartItems, setCartItems] = useState<Main[]>([]);

  return (
    
    <div className='resume'>
    <h2>1 Producto FAKE</h2>
    <div>
    {productTocart.array.map((e) => { 
      
      return (
        <ProductCart
        key={e.id}
        id={e.id}
        name={e.Name}
        price={e.Price} 
        />
        )
      }
        
    )}
    
    </div>
    

    <div className='resume-cart'>
      <p>Subtotal</p> <p><strong>325 FAKE €</strong></p>
    </div>

    <div className='resume-cart'>
      <p>Envíos</p> <p><strong>GRATIS</strong></p>
    </div>

    <div className='resume-cart-total'>
      <p>TOTAL A PAGAR</p> <p><strong>325 FAKE €</strong></p>
    </div>

    <div className='img-logo-resume'>
      <img src="src/assets/logo-forniture-742-color.svg" alt="forniture 742"/>
    </div>
    
    </div>
  )
}