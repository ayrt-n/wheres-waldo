import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Game.css';
import GameForm from './GameForm';
import Avatar from './Avatar';
import Marker from './Marker';

function Game() {
  const [gameImage, setGameImage] = useState(null);
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
      setGameImage(require(`../assets/images/${data.image_name}`));
      setCharacters(data.characters.map((character) => ({
        ...character,
        isFound: false,
        coordinates: {
          x: null,
          y: null,
        }
      })));
    });
  }, [gameId]);
  
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

  const displayFeedback = (response) => {
    setFormActive(false);
    if (response.correct) {
      markCharacterFound(response.details);
      setFeedback('Nice find!');
    } else {
      setFeedback('Incorrect. Try again!')
    }
  };

  const markCharacterFound = (response) => {
    setCharacters((prev) => (prev.map((character) => {
      if (character.id === response.character_id) {
        return {
          ...character,
          isFound: true,
          coordinates: {
            x: response.x_coordinates,
            y: response.y_coordinates,
          }
        }
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
