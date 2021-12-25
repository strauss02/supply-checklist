import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeQuantity, removeItem } from './checklistSlice'
import { Button, Typography } from '@material-ui/core'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

function ItemCard({ currentQuantity, fullQuantity, name, isCustom }) {
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
    <Card sx={{ m: 2 }}>
      <CardContent>
        <div className="item-card">
          <Typography variant="h5"> {name}</Typography>
          <Typography variant="body2">
            {' '}
            full quantity: {fullQuantity}
          </Typography>
          <Typography variant="body2">
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
          <Typography variant="body2">
            {' '}
            quantity missing : {fullQuantity - currentQuantity}
          </Typography>
          {isCustom ? (
            <Button
              color="primary"
              variant="outlined"
              onClick={handleRemoveClick}
            >
              remove
            </Button>
          ) : (
            ''
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ItemCard
