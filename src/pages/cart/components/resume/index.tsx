import React from 'react'
import "./resume.css"
import ProductCart from '../productCart'

type Props = {}

export default function Resume({}: Props) {
  return (
    <div className='resume'>
    <h2>3 Productos</h2>

    <ProductCart/>

    <div className='resume-cart'>
      <p>Subtotal</p> <p><strong>1.967 €</strong></p>
    </div>

    <div className='resume-cart'>
      <p>Envíos</p> <p><strong>GRATIS</strong></p>
    </div>

    <div className='resume-cart-total'>
      <p>TOTAL A PAGAR</p> <p><strong>1.967 €</strong></p>
    </div>

    <div className='img-logo-resume'>
      <img src="src/assets/logo-forniture-742-color.svg" alt="forniture 742"/>
    </div>
    
    </div>
  )
}