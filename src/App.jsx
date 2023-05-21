import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UniversitySearch from './components/body'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <UniversitySearch/>
      <Footer/>   
    </>
  )
}

export default App
