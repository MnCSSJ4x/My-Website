import Hero from './Componenets/Hero';
import Navbar from './Componenets/Navbar';
import About from './Componenets/About';
import Skills from './Componenets/Skills';
import Project from './Componenets/Project';
import './App.css'
import Cocurricular from './Componenets/Cocurricular';
import Contact from './Componenets/Contact';
import Footer from './Componenets/Footer';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Cocurricular/>
      <Contact/>
      <Footer/>
   </div>
   
   
   </>
    
  );
}

export default App;
