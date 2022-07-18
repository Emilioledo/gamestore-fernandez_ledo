import './Widget.css'
import { FaShoppingCart } from 'react-icons/fa'

export default function CartWidget() {
  return (
    <button className="button">
      <FaShoppingCart color="white" className="icon"/>
      <span>Cart</span>
    </button>
  )
}
