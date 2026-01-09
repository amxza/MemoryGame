// Scoreboard.jsx
function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard-container">
      <div className="score-box">
        <h2>Current Score: {score}</h2>
      </div>
      <div className="score-box">
        <h2>Best Score: {bestScore}</h2>
      </div>
    </div>
  );
}

export default Scoreboard;