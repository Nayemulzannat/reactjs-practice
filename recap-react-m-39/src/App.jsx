import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './posts'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <h1>React</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>props</li>
        <li>state</li>
        <li>Event Hendeler</li>
        <li>load Data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
