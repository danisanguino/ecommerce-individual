import React from 'react'
import "./footer.css"

type Props = {}

export default function Footer({}: Props) {

  const backBtn = () => {
    window.history.back();
  };

  return (
    <div className='footer'>

      <div className="back-btn" onClick={backBtn} >
        <img src="src/assets/back-icon.svg" alt="back"/>
      </div>

      <div className='wish-cart-btn'>
      <img src="src/assets/wish-footer-icon.svg" alt="wish list"/>
      <img src="src/assets/cart-footer-icon.svg" alt="cart"/>

      </div>

    </div>
  )
}