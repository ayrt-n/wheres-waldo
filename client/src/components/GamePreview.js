import React from 'react';
import { Link } from 'react-router-dom';

function GamePreview({ game }) {
  const image = require(`../assets/images/${game.image_name}`);

  return (
    <div className="Game-preview">
      <h1 className="Game-selection-header">{game.name}</h1>
      <img src={image} alt="" className="Game-image" />
      <Link to={`games/${game.id}`} className="Game-button small center">
        Start!
      </Link>
    </div>
  );
}

export default GamePreview;
