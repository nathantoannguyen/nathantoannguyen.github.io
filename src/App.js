import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
