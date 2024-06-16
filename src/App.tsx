import { Route, Routes } from "react-router-dom"

// Pages
import Home from "./pages/home/Home"

// Components
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Contact from "./pages/contact/Contact"
import Backtop from "./components/backtop/Backtop"

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer/>
      <Backtop/>
    </>
  )
}

export default App
