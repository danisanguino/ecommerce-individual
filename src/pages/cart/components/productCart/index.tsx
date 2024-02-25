import React, { useState } from 'react'
import "./productCart.css"
import { CgTrashEmpty } from "react-icons/cg";

type Props = {
  id: string
  img: string
  name: string
  price: number
  highlight: boolean
  class: string
  }

export default function ProductCart(props: Props) {

  const [count, setCount] = useState (1);

  return (
    <div className="product-cart">
      <div className='resume-product'>
          <div className="img-resume-product">
              <img src={props.img}  height={"120px"} alt={props.name}/>
          </div>
          <div className='price-model-product'>
              <h2>{props.price} €</h2>
              <p>{props.name} </p>
              <p>Cant: <strong>{count}</strong></p>
              <span><button onClick={() => setCount ((prevState)=> prevState - 1)}>-</button></span>
              <span><button onClick={() => setCount ((prevState)=> prevState + 1)}>+</button></span>
          </div>
      </div>

      <div className='delete-product'>
        <p><CgTrashEmpty /></p>
      </div>

    </div>
  )
}