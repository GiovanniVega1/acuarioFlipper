import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./normalize.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services, Comments} from "./components/pages";
import { AuthRoutes } from "./auth/routes/AuthRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        
      </Routes>
    </div>
  );
}

export default App;
