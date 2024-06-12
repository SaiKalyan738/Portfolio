import About from './components/About.jsx';
import Bg from './components/Bg.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Nav from './components/navbar/Navbar.jsx'
function App() {
  return (
    <div className="App">
      <Nav />
      <Bg />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
