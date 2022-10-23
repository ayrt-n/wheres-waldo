import React, { useState, useEffect } from 'react';
import GamePreview from './GamePreview';

function GameSelection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/games', {
      mode: 'cors'
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setGames(data);
    })
  }, []);

  return (
    <div>
      <div>Game Selection Time!!!</div>
      {games.map((game) => (<GamePreview key={game.id} game={game} />))}
    </div>
  );
}

export default GameSelection;
