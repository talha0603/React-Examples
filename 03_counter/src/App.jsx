import { useState } from 'react'
import './App.css';

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
    console.log("Valus" , count);
            
  }

  const decrementValue = () => {
    if (count === 0)                    // will stop at 0
        return; 
    setCount(count - 1)        
  }

  return (
    <>
    <div className="counter-wrapper">
      <h2 className="counter-display">Count Value: {count}</h2>
    </div>
      <br />
    <div className="counter-buttons">
      <button onClick={addValue} className="btn increment">+</button>
      <button onClick={decrementValue} className="btn decrement">-</button>
    </div>
    </>
  )
}

export default App