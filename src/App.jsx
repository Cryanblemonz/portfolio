import { useState } from 'react'
import './App.css'
import Header from './Header.jsx';
import Technologies from './Technologies';
import Projects from './Projects';

function App() {

  return (
    <div>
      <Header />
      <Technologies />
      <Projects />
    </div>
  )
}

export default App
