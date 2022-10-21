import React from 'react';
import { Link } from 'react-router-dom';

function GamePreview({ game }) {
  return (
    <Link to={`games/${game.id}`}>
      <h1>{game.name}</h1>
    </Link>
  );
}

export default GamePreview;
