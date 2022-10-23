import React from 'react';

function Marker({ coordinates }) {
  const { x_coordinates, y_coordinates } = coordinates
  const width = x_coordinates[1] - x_coordinates[0];
  const height = y_coordinates[1] - y_coordinates[0];

  const markerStyles = {
    left: x_coordinates[0] + 'px',
    top: y_coordinates[0] + 'px',
    width: width + 'px',
    height: height + 'px',
  }

  return (
    <div className="Game-marker" style={markerStyles} />
  );
}

export default Marker;
