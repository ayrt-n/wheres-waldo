import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Game.css';
import gameImage from '../assets/images/ww-ski-slopes.jpeg';
import GameForm from './GameForm';

function Game() {
  const characters = ['Waldo', 'Wendy', 'Marvin'];
  const [coordinates, setCoordinates] = useState(null);
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      const clickedGame = e.target.closest('#Game-container');
      if (!clickedGame) {
        setFormActive(false);
        return;
      }

      if (e.target.id === 'Game-image') {
        setCoordinates([e.offsetX, e.offsetY]);
        setFormActive(true);
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);


  return (
    <div className="Game-container" id="Game-container">
      <img src={gameImage} alt="" className="Game-image" id="Game-image" />
      {
        formActive
        && <GameForm characters={characters} coordinates={coordinates} hidden={!formActive} />
      }
    </div>
  );
}

export default Game;
