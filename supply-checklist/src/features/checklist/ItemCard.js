import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeQuantity, removeItem } from './checklistSlice'

function ItemCard({ currentQuantity, fullQuantity, name, isCustom }) {
  const equipmentState = useSelector((state) => state.equipment)
  const dispatch = useDispatch()

  const [quantityInputValue, setQuantityInputValue] = useState(currentQuantity)

  function handleCurrentQuantityChange(e) {
    setQuantityInputValue(e.target.value)
    dispatch(changeQuantity({ name, newQuantity: e.target.value }))
  }

  function handleRemoveClick(e) {
    dispatch(removeItem({ name: name }))
  }

  return (
    <div className="item-card">
      <p> {name}</p>
      <p> full quantity: {fullQuantity}</p>
      <p>
        {' '}
        current quantity:
        <input
          type="number"
          onChange={handleCurrentQuantityChange}
          value={quantityInputValue}
          min="0"
          max={fullQuantity}
        />
      </p>
      <p> quantity missing : {fullQuantity - currentQuantity}</p>
      {isCustom ? <button onClick={handleRemoveClick}>remove</button> : ''}
    </div>
  )
}

export default ItemCard
