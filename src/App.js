import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Login />} />
        <Route path="/home" element={<Home />} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
