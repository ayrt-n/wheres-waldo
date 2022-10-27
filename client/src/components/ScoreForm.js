import React, { useEffect, useState } from 'react';
import Modal from './Modal';

function ScoreForm({ startTime, gameId, onSubmit }) {
  const [username, setUsername] = useState('');
  const [ellapsedTime, setEllapsedTime] = useState('');

  const millisecondToMMSS = (milliseconds) => {
    const minutes = String(Math.floor(milliseconds / 60000)).padStart(1, '0')
    const seconds = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, '0')

    return `${minutes}:${seconds}`
  };

  useEffect(() => {
    setEllapsedTime(millisecondToMMSS(new Date() - startTime))
  }, [startTime])

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('score[ellapsed_time]', ellapsedTime);

    fetch(`http://localhost:3001/api/v1/games/${gameId}/leaderboards`, {
      method: 'POST',
      mode: 'cors',
      body: formData,
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      onSubmit();
    })
  };

  return (
    <Modal>
      <h1>Nice work! You finished in {ellapsedTime}!</h1>
      <p>Fill out a name and submit your score to see how you did compared to others!</p>
      <form onSubmit={handleSubmit}>
        <input name="score[name]" type="text" value={username} onChange={handleInputChange} />
        <button>Submit</button>
      </form>
    </Modal>
  );
}

export default ScoreForm;
