import React from 'react'
import "./productDescription.css"

type Props = {}

export default function ProductDescription({}: Props) {
  return (
    <>
    <div className='img-product'>
      <img src="src/assets/products/silla-01-forniture.webp" alt="imagen principal" height={"400px"}/>
    </div>

    <div className="description-product">
      <h2>Silla Dalye Terciopelo </h2>
      <h3>345.5 €</h3>
      <p>Nuestra Silla Dalye Terciopelo es elegancia, modernidad, comodidad y sofisticación. ¡Todo en uno! Se trata de una silla cuya estructura está fabricada en acero reforzado, con las patas lacadas en color negro. Su asiento está forrado con terciopelo, un material muy elegante.</p>
      <p>Medidas: 97 centímetros de altura total </p>
    </div>

    <div className='add-cart'>
      <button className='btn-add-cart'><img src="src/assets/cat-btn-icon.svg" alt="comprar" />Añadir a Cesta</button>
    </div>
    </>
  )
}