import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
// import SongCard from './components/SongCard/SongCard';
import Section from './components/Section';
// import Carousel from './components/Carousel/Carousel';



function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Section api={"https://qtify-backend-labs.crio.do/albums/top"} albumName={"Top Album"}/>
       <Section api={"https://qtify-backend-labs.crio.do/albums/new"} albumName={"New Album"}/>
       
  
      
    </div>
  );
}

export default App;
