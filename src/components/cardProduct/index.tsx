import React from 'react'
import "./cardProduct.css"
import { Link } from 'react-router-dom'


type Props = {
  id: string
  img: string
  name: string
  price: number
  }

export default function CardProduct(props: Props) {
  
  return (
    <Link to= {`/${props.id}`}>
        <div className='card-product'>

          <div
          className='wish-btn'>
          <img src="src/assets/wish-product-icon.svg" />
          </div>

          <div
          className='img-product-thumbnail'>
          <img src={props.img} alt='silla'/>
          </div>

          <h4>{props.name}</h4>

          <p>{props.price} €</p>

        </div>
    </Link>
  )
}