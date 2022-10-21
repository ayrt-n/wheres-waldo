import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import GameSelection from './components/GameSelection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameSelection />} />
        <Route path="/games/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
