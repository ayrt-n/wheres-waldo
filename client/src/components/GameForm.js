import React from 'react';

function GameForm({ characters, gameId, coordinates, submitCallback }) {
  const formCoordinateStyles = {
    left: coordinates[0] + 'px',
    top: coordinates[1] + 'px',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.closest('form'));
    formData.append(e.target.name, e.target.value);
    
    fetch('http://localhost:3001/api/v1/character_locations', {
      method: 'POST',
      mode: 'cors',
      body: formData,
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      submitCallback(data)
    })
  };
  
  return (
    <form className="Game-form" style={formCoordinateStyles}>
      <input name="x" type="hidden" value={coordinates[0]} />
      <input name="y" type="hidden" value={coordinates[1]} />
      <input name="game_id" type="hidden" value={gameId} />
      {characters.map((character) => {
        return (
          <button
            name="character_id"
            value={character.id}
            className="Game-button fullsize"
            key={character.id}
            onClick={submitHandler}
          >
            {character.name}
          </button>
        );
      })}
    </form>
  );
}

export default GameForm;
