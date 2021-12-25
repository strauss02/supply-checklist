import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './features/checklist/ItemCard'
import AddItemForm from './features/checklist/AddItemForm'
import UserForm from './features/user/UserForm'
import { changeMessage, changeVisibility } from './features/alert/alertSlice'
import Alert from './features/alert/Alert'

function App() {
  const equipmentState = useSelector((state) => state.checklist)
  const userState = useSelector((state) => state.user)
  const dispatch = useDispatch()

  function validateForm() {
    if (
      userState.firstName !== '' &&
      userState.lastName !== '' &&
      userState.date !== ''
    ) {
      return true
    } else throw new Error(`something's wrong`)
  }

  function handleFormSubmit(e) {
    try {
      validateForm()
      dispatch(changeVisibility(true))
      dispatch(changeMessage('horay'))
    } catch (error) {
      console.log('from is BAD')
      dispatch(changeVisibility(true))
      dispatch(changeMessage('fuck'))
    }
  }

  return (
    <div className="App">
      <h3>Welcome</h3>
      <UserForm />
      <div>
        {equipmentState.equipment.map((item, i) => {
          return (
            <ItemCard
              currentQuantity={item.currentQuantity}
              fullQuantity={item.fullQuantity}
              name={item.name}
              key={item.name + i}
              isCustom={item.isCustom}
            />
          )
        })}
      </div>
      <AddItemForm />
      <button onClick={handleFormSubmit}>Submit Checklist!</button>
      <Alert />
    </div>
  )
}

export default App
