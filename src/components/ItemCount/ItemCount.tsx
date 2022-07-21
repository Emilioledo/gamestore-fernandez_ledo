import { useState, useEffect } from 'react'
import './ItemCount.css'

interface Props {
  stock: number
  initial: number
}

export default function ItemCount({ stock, initial }: Props) {
  const [itemCount, setItemCount] = useState(initial)
  const [disabledAddBtn, setDisabledAddBtn] = useState(false)

  useEffect(() => {
    if (stock === 0) {
      setDisabledAddBtn(true)
    }
  }, [stock])

  const addItem = () => {
    if (itemCount < stock) {
      setItemCount(itemCount + 1)
    } else {
      setDisabledAddBtn(true)
    }
  }

  const subtractItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
    }
    if (itemCount === stock) {
      setDisabledAddBtn(false)
    }
  }

  return (
    <div className="container">
      <div className='span'>
        <span>Stock disponible: {stock}</span>
        <span>Cantidad: {itemCount}</span>
      </div>
      <div className="buttonItem">
        <button className="btn" onClick={addItem} disabled={disabledAddBtn}>
          +
        </button>
        <button onClick={subtractItem}>-</button>
      </div>
    </div>
  )
}
