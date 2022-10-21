import React from 'react';

function GameForm({ characters, coordinates }) {
  const formCoordinateStyles = {
    left: coordinates[0] + 'px',
    top: coordinates[1] + 'px',
  };
  
  return (
    <form className="Game-form" style={formCoordinateStyles}>
      <input type="hidden" value={coordinates} />
      {characters.map((character) => {
        return (
          <button value={character} className="Game-button">
            {character}
          </button>
        );
      })}
    </form>
  );
}

export default GameForm;
