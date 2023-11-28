import { Navigate, Route, Routes } from "react-router-dom"
import { About, Comments, Contact, Home, Services } from "../pages"
import { Navbar } from "../Navbar"

export const FlipperRouter = () => {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/" element={<Home />} />

            <Route path='/*' element={ <Navigate to="/" /> } />
        </Routes>
    </div>
  )
}
