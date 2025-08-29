import { useState } from 'react'
import BitcoinRates from './components/BitcoinRates'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BitcoinRates />
    </>
  )
}

export default App
