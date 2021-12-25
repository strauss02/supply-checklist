import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeMessage, changeVisibility } from '../alert/alertSlice'
import { addNewItem } from './checklistSlice'
import Card from '@mui/material/Card'

function AddItemForm(props) {
  const dispatch = useDispatch()

  const assertItemIsValid = (item) => {
    if (
      item.fullQuantity <= 0 ||
      item.name === '' ||
      // eslint-disable-next-line eqeqeq
      item.currentQuantity == 0
    ) {
      throw new Error(`whoa... Something ain't right with your item!`)
    } else dispatch(changeMessage(''))
  }

  const newItemTemplate = {
    name: '',
    currentQuantity: '0',
    fullQuantity: '0',
    isCustom: true,
  }

  const [newItem, setNewItem] = useState(newItemTemplate)

  function handleAddNewItem(e) {
    try {
      assertItemIsValid(newItem)
      dispatch(addNewItem(newItem))
    } catch (error) {
      dispatch(changeMessage(error.message))
      dispatch(changeVisibility(true))
    }
  }

  function handleNewItemInputChange(e) {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  return (
    <Card sx={{ p: 5 }}>
      <div>
        <h4> Add new item</h4>

        <label htmlFor="new-item-name-input"> Item name </label>
        <input
          id="new-item-name-input"
          name="name"
          onChange={handleNewItemInputChange}
        />
        <label htmlFor="new-item-full-quantity-input">
          {' '}
          Item Full quantity{' '}
        </label>
        <input
          onChange={handleNewItemInputChange}
          type="number"
          name="fullQuantity"
          id="new-item-full-quantity-input"
          min="0"
        />
        <label htmlFor="new-item-current-quantity-input">
          Item Current quantity
        </label>
        <input
          onChange={handleNewItemInputChange}
          type="number"
          min="0"
          name="currentQuantity"
          id="new-item-current-quantity-input"
          max={newItem.fullQuantity}
        />
        <button onClick={handleAddNewItem}> Add it!</button>
      </div>
    </Card>
  )
}

export default AddItemForm
