import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
