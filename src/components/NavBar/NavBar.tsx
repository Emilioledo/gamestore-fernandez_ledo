import './NavBar.css'
import CartWidget from '../Widget/CartWidget'

export default function NavBar() {
  return (
    <div className="topnav">
      <h3>GAME STORE</h3>
      <div className="topnav-right">
        <CartWidget />
      </div>
    </div>
  )
}
