import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Index } from "./components/Index";
import Category from "./components/Category";
import SlugState from "./context/SlugState";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App bg-purple-100">
      <SlugState>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/map" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </Router>
      </SlugState>
    </div>
  );
}

export default App;
