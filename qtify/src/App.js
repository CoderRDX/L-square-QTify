import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SongCard from './components/SongCard/SongCard';
import Section from './components/Section';



function App() {
  return (
    <div className="App">
       {/* <Navbar searchData="hello"/> */}
       <Hero/>
       {/* <SongCard/> */}
       <Section/>
    </div>
  );
}

export default App;
