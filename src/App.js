import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import About from "./Components/About";
import { BrowserRouter } from "react-router-dom";
import { Element } from "react-scroll";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
function App() {
  return (  
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        {/* <Routing/> */}    
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="skills" className="element">
          <Skills />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>

      </div>
    </BrowserRouter>
  );
}

export default App;
