import React from 'react';

function Marker({ coordinates }) {
  const { x, y } = coordinates
  const width = x[1] - x[0];
  const height = y[1] - y[0];

  const markerStyles = {
    left: x[0] + 'px',
    top: y[0] + 'px',
    width: width + 'px',
    height: height + 'px',
  }

  return (
    <div className="Game-marker" style={markerStyles} />
  );
}

export default Marker;
