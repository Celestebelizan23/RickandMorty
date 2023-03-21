import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CharacterDetail from "./components/CharacterDetail";
import Favorites from "./components/Favorites"

// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3005';

function App() {
  return (
   <div>
        <Routes>
      <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/favorites" element={<Favorites />}/>
          <Route path="/detail/:id" element={<CharacterDetail/>} />
        </Routes>
      </div>
   
  
  );
}

export default App;

