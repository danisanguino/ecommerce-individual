
import "./footer.css"
import { Link } from 'react-router-dom'

type Props = {}

export default function Footer({}: Props) {

  const backBtn = () => {
    window.history.back();
  };

  return (
    <div className='footer'>

      <div className="back-btn" onClick={backBtn}  >
        <img src="./assets/back-icon.svg" alt="back"/>
      </div>

      <div className='wish-cart-btn'>
        <img src="./assets/wish-footer-icon.svg" alt="wish list"/>
        <Link to="/cart"><img src="./assets/cart-footer-icon.svg" alt="cart"/></Link>
      </div>

    </div>
  )
}