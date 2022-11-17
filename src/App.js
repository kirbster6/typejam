import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/HomePage';
import GameScreen from './pages/gamescreen/GameScreen';
import { ChakraProvider } from '@chakra-ui/react';
import TypeBox from "./pages/gamescreen/typebox/TypeBox";


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes >
            <Route path="/" element={ <HomePage /> } />
            <Route path="/play" element={ <GameScreen /> } />
          </Routes >
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
