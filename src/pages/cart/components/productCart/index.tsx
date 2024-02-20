import React from 'react'
import "./productCart.css"

type Props = {}

export default function ProductCart({}: Props) {
  return (
    <div className="product-cart">
      <div className='resume-product'>
          <div className="img-resume-product">
              <img src="src/assets/products/silla-01-forniture.webp" height={"120px"} alt="silla como sea"/>
          </div>
          <div className='price-model-product'>
              <h2>325 €</h2>
              <p>Silla sus muertos</p>
              <p>Cant: <strong>1</strong></p>
          </div>
      </div>

      <div className='delete-product'>
        <p>Eliminar</p>
      </div>

    </div>
  )
}