import React from 'react'
import Index from './pages'
import './css/style.css'
import './css/navigation.css'
import NavBar from './components/NavBar'
import BButton from './components/BButton'
import Title from './components/Title'

function App() {

  return (
    <>
      <NavBar>
        <Title onClick={() => {console.log("Apád faszát kattintgasd!");}}>WebAruhaz</Title>
        <BButton clssnm="navigation-button">Kosár</BButton>
        <BButton clssnm="navigation-button">Felhasználó</BButton>
      </NavBar>
      <main>
        <Index />
      </main>
    </>
  )
}

export default App
