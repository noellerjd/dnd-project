import "../styles/page.css";
import "../styles/dice.css";
import Dice from "./components/dice";
import diceList from "../data/dice.json";

export default function Home() {
  return (
    <div id="main-container">
      {/* Left Panel */}
      <div className="info-container">
        <div className="info-box">
          <div className="box-title">
            <h1>Dice</h1>
          </div>
          <div className="dice-container">
            {diceList.map((die, i) => (
              <Dice key={i} dice={die.dice} num={die.num} />
            ))}
          </div>
          <div className="dice-tracker">
            <div className="dice-info">
              <button className="dice-control">+</button>
              <p>
                # of dice: <span>1</span>
              </p>
              <button className="dice-control">-</button>
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="box-title">
            <h1>Dice Animation</h1>
          </div>
        </div>
        <div className="info-box">
          <div className="box-title">
            <h1>Roll History</h1>
          </div>
        </div>
      </div>
      {/* Middle Panel */}
      <div className="info-container">
        <div className="console-box">
          <div className="box-title">
            <h1>DM</h1>
          </div>
          <div className="ai-container">
            <div className="ai-text"></div>
          </div>
          <div className="input-container">
            <input className="input-box"></input>
            <button className="input-send">▶</button>
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div className="info-container">
        <div className="info-box">
          <div className="box-title">
            <h1>Items</h1>
          </div>
        </div>
        <div className="info-box">
          <div className="box-title">
            <h1>Notes</h1>
          </div>
        </div>
        <div className="info-box">
          <div className="box-title">
            <h1>Character Info</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
