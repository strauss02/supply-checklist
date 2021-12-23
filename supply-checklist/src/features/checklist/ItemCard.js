import { useDispatch, useSelector } from 'react-redux'

function ItemCard({ currentQuantity, fullQuantity, name }) {
  const equipmentState = useSelector((state) => state.equipment)
  const dispatch = useDispatch()

  return (
    <div>
      <p> {name}</p>
      <p> {fullQuantity}</p>
      <p> {currentQuantity}</p>
    </div>
  )
}

export default ItemCard
