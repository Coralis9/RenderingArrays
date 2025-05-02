import React from 'react';

function Score({ score }) {
  return (
    <li>
      <strong>{score.date}:</strong> {score.score}
    </li>
  );
}

export default Score;