
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import "./emptyCart.css"


type Props = {}

export default function EmptyCart({}: Props) {
  return (
    
    <div className='empty-cart'>
      <h2>Su cesta está vacía.</h2>
      <MdOutlineRemoveShoppingCart size={200}/></div>
  )
}