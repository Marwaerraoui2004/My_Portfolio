import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./composant/HomePage";
import Navbar from "./composant/Navbar";
import Footer from "./composant/Footer";
import About from "./composant/About";
import Portfolio from "./composant/Portfolio";

function App() {
    return (
        <div className="App">
             <Navbar/>
            <Routes>
               
                <Route path="/" element={<HomePage />} />
                 <Route path="/about" element={<About />} /> 
                <Route path="/portfolio" element={<Portfolio />} /> 
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;