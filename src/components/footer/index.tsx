import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

type Props = {}

export default function Footer({}: Props) {

  
  return (
    <div className='footer'>

      <div className="back-btn" >
        <img src="src/assets/back-icon.svg" alt="back"/>
      </div>

      <div className='wish-cart-btn'>
        <img src="src/assets/wish-footer-icon.svg" alt="wish list"/>
        <Link to="/cart"><img src="src/assets/cart-footer-icon.svg" alt="cart"/></Link>
      </div>

    </div>
  )
}