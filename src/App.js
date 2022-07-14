import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import GameServers from "./pages/game-servers/GameServers";

import "./App.css"

function App() {
  return (
    <div class="app">
      <Router>
        <Header/>
        <div class="routes">
          <Routes>
            <Route path='/game-servers' element={<GameServers/>} />
            <Route path='/games' element={<Games/>} />
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

/*


      */