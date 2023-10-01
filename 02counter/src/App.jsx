import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter ] = useState(15)

  const addValue = () => {
    console.log("value added" , counter)
    counter = counter+1
    setCounter(counter)
  }
  const removeValue = () => {
    console.log("value added" , counter)
    counter = counter-1
    setCounter(counter)
  }
  
  return (
    <div>
      
        <h1>Hello</h1>
        <h2>Counter number is {counter}</h2>
        <button onClick={addValue}>Add value {counter}</button>
        <br></br>
        <button onClick={removeValue}>Remove value {counter} </button>
        
    </div>
  )
}

export default App
