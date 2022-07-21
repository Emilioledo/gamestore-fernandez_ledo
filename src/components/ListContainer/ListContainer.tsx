import './ListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

export default function ListContainer() {
  return (
    <div className="container">
      <div className='itemCount'>
        <ItemCount initial={0} stock={5} />
      </div>
    </div>
  )
}
