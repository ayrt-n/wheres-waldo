import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Game.css';
import gameImage from '../assets/images/ww-ski-slopes.jpeg';
import GameForm from './GameForm';
import Avatar from './Avatar';

function Game() {
  const [characters, setCharacters] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [formActive, setFormActive] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const { gameId } = useParams();

  // Fetch game data
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/games/${gameId}`, {
      mode: 'cors'
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCharacters(data.characters);
      console.log(data.characters);
    });
  }, [gameId])
  
  // Set up click event handler to play the game
  useEffect(() => {
    function handleClick(e) {
      setFeedback('');
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

  const displayFeedback = (response) => {
    setFormActive(false);
    if (response.correct) {
      setFeedback('Good find!');
      markCharacterFound(response.details.character_id);
    } else {
      setFeedback('Incorrect. Try again!')
    }
  };

  const markCharacterFound = (character_id) => {
    setCharacters((prev) => (prev.map((character) => {
      if (character.id === character_id) {
        return {...character, found: true}
      } else {
        return character;
      }
    })));
  };

  return (
    <div>
      <div className="Game-container" id="Game-container">
        <img src={gameImage} alt="" className="Game-image" id="Game-image" />
        {
          formActive
          && <GameForm
            characters={characters}
            gameId={gameId}
            coordinates={coordinates}
            hidden={!formActive}
            submitCallback={displayFeedback}
          />
        }
      </div>
      <div className="Game-characters">
        {characters.map((character) => {
          return (
            <Avatar character={character} key={character.id} />
          );
        })}
      </div>
      <div>
        {feedback}
      </div>
    </div>
  );
}

export default Game;
