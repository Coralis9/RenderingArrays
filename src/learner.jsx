import React from 'react';
import Score from './Score';

function Learner({ learner }) {
  return (
    <div style={{
      marginBottom: '2rem',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h4>Scores:</h4>
      <ul>
        {learner.scores.map((score, idx) => (
          <Score key={idx} score={score} />
        ))}
      </ul>
    </div>
  );
}

export default Learner;
