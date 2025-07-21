import About from "./components/About"
import FadeIn from "./components/FadeIn"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="">
      <FadeIn>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Footer></Footer>
      </FadeIn>
    </div>
  )
}

export default App
