import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className=" bg-green-200 rounded-xl p-4 m-10">
      Hello world!
    </h1>
    <Cards username="chaiaurcode" btnText="click me" />
    <Cards username="hitesh" />
    </>
  )
}

export default App
