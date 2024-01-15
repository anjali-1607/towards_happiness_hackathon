import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes ,  Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<LandingPage/>} />
     </Routes>
    </>
  )
}

export default App
