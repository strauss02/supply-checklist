import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewItem } from './checklistSlice'

function AddItemForm(props) {
  const assertItemIsValid = (item) => {
    if (
      item.fullQuantity <= 0 ||
      item.name === '' ||
      item.currentQuantity == 0
    ) {
      throw new Error(`whoa... Something ain't right with your item!`)
    } else setErrorMessage('')
  }
  const disptach = useDispatch()

  const newItemTemplate = {
    name: '',
    currentQuantity: '0',
    fullQuantity: '0',
    isCustom: true,
  }

  const [newItem, setNewItem] = useState(newItemTemplate)

  const [errorMessage, setErrorMessage] = useState('')

  function handleAddNewItem(e) {
    try {
      assertItemIsValid(newItem)
      disptach(addNewItem(newItem))
    } catch (error) {
      setErrorMessage(error.message)
    }
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
      {errorMessage ? <div> {errorMessage}</div> : ''}
    </div>
  )
}

export default AddItemForm
