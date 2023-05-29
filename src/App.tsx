import type { } from '@mui/lab/themeAugmentation';
import Home from "./components/home/home"
import Education from "./components/education/education"
import Portfolio from "./components/portfolio/portfolio"
import Skills from "./components/skills/skills"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Portfolio />
      <Skills />
      <Footer />
    </>
  )
}

export default App
