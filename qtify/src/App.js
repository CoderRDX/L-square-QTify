import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
// import SongCard from './components/SongCard/SongCard';
import Section from './components/Section';



function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
        
       <Section/>
      
    </div>
  );
}

export default App;
