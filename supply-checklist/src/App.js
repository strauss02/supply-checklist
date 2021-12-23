import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './features/checklist/ItemCard'

function App() {
  const equipmentState = useSelector((state) => state.checklist)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h3>Welcome</h3>
      {equipmentState.equipment.map((item) => {
        return (
          <ItemCard
            currentQuantity={item.currentQuantity}
            fullQuantity={item.fullQuantity}
            name={item.name}
          />
        )
      })}
    </div>
  )
}

export default App
