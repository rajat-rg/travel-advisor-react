import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import { Index } from "./components/Index";

function App() {
  return (
    <div className="App bg-purple-100">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/map" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
