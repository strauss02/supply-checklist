import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewItem } from './checklistSlice'

function AddItemForm(props) {
  const disptach = useDispatch()

  const newItemTemplate = {
    name: '',
    currentQuantity: 0,
    fullQuantity: 0,
    isCustom: true,
  }

  const [newItem, setNewItem] = useState(newItemTemplate)

  function handleAddNewItem(e) {
    disptach(addNewItem(newItem))
  }

  function handleNewItemInputChange(e) {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h4> Add new item</h4>

      <label htmlFor="new-item-name-input"> Item name </label>
      <input
        id="new-item-name-input"
        name="name"
        onChange={handleNewItemInputChange}
      />
      <label htmlFor="new-item-full-quantity-input"> Item Full quantity </label>
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
  )
}

export default AddItemForm
