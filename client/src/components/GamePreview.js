import React from 'react';
import { Link } from 'react-router-dom';

function GamePreview({ game }) {
  const image = require(`../assets/images/${game.image_name}`);

  return (
    <Link to={`games/${game.id}`}>
      <div className="Game-preview">
        <h1>{game.name}</h1>
        <img src={image} alt="" className="Game-image" />
      </div>
    </Link>
  );
}

export default GamePreview;
