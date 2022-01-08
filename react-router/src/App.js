import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  return (
    
    
    <div className="App" >
       <Navbar />
        <h1 className="text-3xl font-bold underline bg-cyan-200 rounded-lg p-7 text-black mt-10 inline-block ">
      Hello world!
    </h1>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/Contact'  element={<Contact/>} />
        <Route path='/About'  element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
