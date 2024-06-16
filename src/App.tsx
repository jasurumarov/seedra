import { Route, Routes } from "react-router-dom"

// Pages
import Home from "./pages/home/Home"

// Components
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Contact from "./pages/contact/Contact"

function App() {
  return (
    <>
      <Header/>
3
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
