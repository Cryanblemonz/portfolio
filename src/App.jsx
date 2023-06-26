import { useState } from 'react'
import './App.css'
import Header from './Header.jsx';
import Technologies from './Technologies';
import Projects from './Projects';
import Contact from './Contact';

function App() {

  return (
    <div>
      <Header />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
