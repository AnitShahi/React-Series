import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addvalue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    console.log("value added", counter)
  }
  
  
  const removevalue = () => {
    counter = counter - 1
    setCounter(counter)
    console.log("value remove", counter)
  }


  

  return (
    <>
      <h1>chai aru react</h1>
      <h2>Counter value: {counter} </h2>
      
      <button onClick={addvalue}>Add Value {counter} </button>
      <br />
      <button onClick={removevalue}>Remove Value {counter} </button>
      <p>footer {counter} </p>
    </>
  )
}

export default App
