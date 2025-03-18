import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import { Navbar } from './component/Navbar';
import { Home } from './component/Pages/Home';
import { Serveses } from './component/Pages/Serveses';
import { About } from "./component/Pages/About";
import Contact from './component/Pages/Contact';




function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/serveses" element={<Serveses/>} />
          <Route path="/contact" element={<Contact/>}/>
         
      
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


