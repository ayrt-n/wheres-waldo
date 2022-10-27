import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Game.css';
import Avatar from './Avatar';
import GameContainer from './GameContainer';
import ScoreForm from './ScoreForm';
import Leaderboards from './Leaderboards';

function Game() {
  const [gameImage, setGameImage] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [scoreFormActive, setScoreFormActive] = useState(false);
  const [startTime, setStartTime] = useState(null)
  const { gameId } = useParams();
  const isGameLoaded = useRef(false);

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
      isGameLoaded.current = true;
      setStartTime(new Date());
    });
  }, [gameId]);

  // Check if player has found all characters for win
  useEffect(() => {
    if (isGameLoaded.current) {
      const remainingCharacters = characters.filter((character) => !character.isFound);
      if (!remainingCharacters.length > 0) {
        setGameOver(true);
      }
    }
  }, [characters])

  // Submit callback to run through game flow methods
  const displayFeedback = (response) => {
    if (response.correct) {
      markCharacterFound(response.details);
      setFeedback('Nice find!');
    } else {
      setFeedback('Incorrect. Try again!')
    }
  };

  // Update characters state if character has been found
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

  // Switch from submit screen to show leaderboard
  const showLeaderboards = () => {
    setScoreFormActive(true);
  };

  return (
    <div>
      {gameOver && scoreFormActive && <ScoreForm startTime={startTime} gameId={gameId} onSubmit={showLeaderboards} />}
      {gameOver && !scoreFormActive && <Leaderboards gameId={gameId} />}
      <GameContainer
        characters={characters}
        gameImage={gameImage}
        gameId={gameId}
        submitCallback={displayFeedback}
      />
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
