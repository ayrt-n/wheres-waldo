import React, { useState, useEffect } from 'react';
import GameForm from './GameForm';
import Marker from './Marker';

function GameContainer({ characters, gameImage, gameId, submitCallback }) {
  const [coordinates, setCoordinates] = useState(null);
  const [formActive, setFormActive] = useState(false);

  // Set up click event handler to play the game
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

  const handleSubmit = (response) => {
    setFormActive(false);
    submitCallback(response);
  }

  return (
    <div className="Game-container" id="Game-container">
      <img src={gameImage} alt="" className="Game-image" id="Game-image" />
      {
        formActive
        && <GameForm
          characters={characters}
          gameId={gameId}
          coordinates={coordinates}
          hidden={!formActive}
          submitCallback={handleSubmit}
        />
      }
      {
        characters.map((character) => {
          if (character.isFound) {
            return (
              <Marker coordinates={character.coordinates} key={character.id} />
            );
          }
          return null;
        })
      }
    </div>
  );
}

export default GameContainer;
