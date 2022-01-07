import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router  ,Route} from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <Router> 
    
    <div className="App" >
     <Navbar />
        <h1 className="text-3xl font-bold underline bg-cyan-200 rounded-lg p-7 text-black mt-10 inline-block ">
      Hello world!
    </h1>
        <Route path='/'  component={Home} />
     
    </div></Router>
  );
}

export default App;
