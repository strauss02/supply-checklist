import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeQuantity, removeItem } from './checklistSlice'
import { Button, Typography } from '@material-ui/core'

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
      <Typography> {name}</Typography>
      <Typography> full quantity: {fullQuantity}</Typography>
      <Typography>
        {' '}
        current quantity:
        <input
          type="number"
          onChange={handleCurrentQuantityChange}
          value={quantityInputValue}
          min="0"
          max={fullQuantity}
        />
      </Typography>
      <Typography>
        {' '}
        quantity missing : {fullQuantity - currentQuantity}
      </Typography>
      {isCustom ? (
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleRemoveClick}
        >
          remove
        </Button>
      ) : (
        ''
      )}
    </div>
  )
}

export default ItemCard
