import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Coin } from './api/Coin'
import Cart from './component/Cart'
import Menu from './component/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Coin>
      <Menu></Menu>
      <Cart></Cart>
    </Coin>
  )
}

export default App
