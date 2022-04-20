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
import Saved from './components/Saved';
import PlacesState from './context/PlacesState';
import Alert from './components/Alert';
import AlertState from './context/AlertState';
// REACT_APP_RAPIDAPI_KEY = d9a9e9776bmsh81b21eaa5580c93p1ae022jsn20354001224d
function App() {
  return (
    <div className="App bg-purple-100">
      <SlugState>
      <AlertState>
      <PlacesState>

      <Router>
        <Navbar />
        <Alert/>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/map" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/savedPlaces" element={<Saved/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </Router>
      </PlacesState>
      </AlertState>
      </SlugState>
    </div>
  );
}

export default App;
