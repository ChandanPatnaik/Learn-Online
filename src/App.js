import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Cources from "./components/Cources/Cources";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Cources />
      <About />
      <Contact />
    </div>
  );
}

export default App;
