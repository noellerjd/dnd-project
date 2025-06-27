import { FaDiceD20 } from "react-icons/fa";
import "../../styles/dice.css";

export default function DiceAnimation({ results }) {
  const displayResults = results.length > 3 ? results.slice(0, 1) : results;

  return (
    <div className="dice-animation-box">
      {displayResults.map((num, i) => (
        <div key={i} className="dice-box roll-result">
          <FaDiceD20 className="rolling-icon" />
          <p>{num}</p>
        </div>
      ))}
      {results.length > 3 && (
        <p className="more-text">+ {results.length - 1} more...</p>
      )}
    </div>
  );
}
