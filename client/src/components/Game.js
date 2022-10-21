import React from 'react';
import { useParams } from 'react-router-dom';

function Game() {
  const { id } = useParams();

  return (
    <div>Game time! ({id})</div>
  );
}

export default Game;
