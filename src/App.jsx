import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import './components/Style.css';
import Nav from './components/Nav';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';  
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
 

  return (
    <>
    <Router>
        <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   
  
     <Footer/>
    </>
  )
}

export default App
