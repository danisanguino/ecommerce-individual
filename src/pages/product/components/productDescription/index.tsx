import React from 'react'
import "./productDescription.css"
import { useFornitureContext } from '../../../../context/productContext';
import { useParams } from 'react-router-dom';

type Props = {}

export default function ProductDescription({}: Props) {

  const {productId} = useParams()
  
  const productsFromArray = useFornitureContext();

  const productShow = productsFromArray.array.find( (element) => {
      console.log(typeof element.id, typeof productId )
      return element.id === productId
  })
  console.log(productShow)

  return (
    <>
    <div className='img-product'>
      <img src={productShow?.Image} alt="imagen principal" height={"350px"}/>
    </div>

    <div className="description-product">
      <h2>{productShow?.Name} </h2>
      <h3>{productShow?.Price} €</h3>
      <p>{productShow?.Description}</p>
      <p><strong>Medidas: </strong>{productShow?.Meassures} </p>
      <p><strong>Material: </strong>{productShow?.Material} </p>
    </div>

    <div className='add-cart'>
      <button className='btn-add-cart'><img src="src/assets/cart-btn-icon.svg" alt="comprar" />Añadir a Cesta</button>
    </div>
    </>
  )
}