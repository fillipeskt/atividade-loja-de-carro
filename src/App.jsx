import { useState } from 'react'
import './App.css'
import { Cabeca } from './Components/header'
import Lista from './Components/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cabeca/>
    <Lista/>
    </>
)
}

export default App
