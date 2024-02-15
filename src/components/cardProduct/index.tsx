import React from 'react'
import "./cardProduct.css"

type Props = {}

export default function CardProduct({}: Props) {
  return (
    <a href='/#'>
        <div className='card-product'>

          <div
          className='wish-btn'>
          <img src="src/assets/wish-product-icon.svg" />
          </div>

          <div
          className='img-product-thumbnail'>
          <img src="src/assets/products/silla-01-forniture.webp" alt='silla'/>
          </div>

          <h4>Silla Dalye Terciopelo</h4>

          <p>345.5 €</p>

        </div>
    </a>
  )
}