import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './features/checklist/ItemCard'
import AddItemForm from './features/checklist/AddItemForm'
import UserForm from './features/user/UserForm'

function App() {
  const equipmentState = useSelector((state) => state.checklist)
  const dispatch = useDispatch()

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
    </div>
  )
}

export default App
