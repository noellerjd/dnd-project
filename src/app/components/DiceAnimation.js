import { FaDiceD20 } from "react-icons/fa";
import "../../styles/dice.css";

export default function DiceAnimation({ results }) {
  let displayResults = results;

  return (
    <div className="dice-animation-box">
      {displayResults.map((num, i) => (
        <div key={i} className="dice-box roll-result">
          <FaDiceD20 className="rolling-icon" />
          <p>{num}</p>
        </div>
      ))}
    </div>
  );
}
