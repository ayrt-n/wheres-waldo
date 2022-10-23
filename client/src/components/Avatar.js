import React from 'react';

function Avatar({ character }) {
  const profilePicture = require(`../assets/images/${character.image_name}`);

  return (
    <img src={profilePicture} alt="" className={`Game-avatar ${character.found ? 'found' : ''}`} />
  );
}

export default Avatar;
