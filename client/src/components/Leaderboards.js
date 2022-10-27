import React, { useState, useEffect } from 'react';
import Modal from './Modal';

function Leaderboards({ gameId }) {
  const [leaderboards, setLeaderboards] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/games/${gameId}/leaderboards`, {
      mode: 'cors'
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setLeaderboards(data);
      console.log(data);
    });
  }, [gameId])

  return (
    <Modal>
      <h1>Leaderboards</h1>
      <table>
        <thead>
        <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.ellapsed_time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Modal>
  );
}

export default Leaderboards;
