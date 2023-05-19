import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UniversitySearch from './components/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UniversitySearch/>
    </>
  )
}

export default App
