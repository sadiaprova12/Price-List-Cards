// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Price_List from './components/Price_List/Price_List'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
     {/* Just practice */}
     <Navbar></Navbar>
     <h1 className='text-7xl text-purple-700'>Hello from Tailwind</h1>
     <Price_List></Price_List>

    </div>
  )
}

export default App
