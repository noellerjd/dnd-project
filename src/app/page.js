"use client";

import "../styles/page.css";
import "../styles/dice.css";
import Dice from "./components/Dice";
import DiceAnimation from "./components/DiceAnimation";
import diceList from "../data/dice.json";
import { FaDiceD20, FaPlus, FaMinus } from "react-icons/fa";
import { GiDiceFire } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  // Dice State + Handlers
  const [hasMounted, setHasMounted] = useState(false);
  const [numDice, setNumDice] = useState(1);
  const [selectedDie, setSelectedDie] = useState(null);
  const [rollResults, setRollResults] = useState([]);
  const [rollHistory, setRollHistory] = useState([]);
  const inputRef = useRef(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("rollHistory");
    if (stored) {
      setRollHistory(JSON.parse(stored));
    }
  }, []);

  if (!hasMounted) return null;

  // Dice Logic Functions
  const chooseDie = (dieSize) => {
    setSelectedDie(dieSize);
  };
  const increaseDice = () => {
    console.log("test");
    setNumDice((prev) => Math.min(prev + 1, 100));
  };
  const decreaseDice = () => {
    setNumDice((prev) => Math.max(prev - 1, 1));
  };
  const handleRoll = () => {
    console.log("Handling Roll");
    if (!selectedDie) return;

    const results = Array.from(
      { length: numDice },
      () => Math.floor(Math.random() * selectedDie) + 1
    );
    setRollResults(results);

    const total = results.reduce((sum, n) => sum + n, 0);
    const rollText = ` [${numDice}d${selectedDie}: ${results.join(
      ", "
    )} = ${total}]`;
    if (inputRef.current) {
      inputRef.current.value += rollText;
    }
    const newHistory = [
      { die: `d${selectedDie}`, num: numDice, results, total },
      ...rollHistory,
    ].slice(0, 5);
    setRollHistory(newHistory);
    localStorage.setItem("rollHistory", JSON.stringify(newHistory));
  };

  // Roll History Logic
  const historyData = localStorage.getItem("rollHistory");

  if (historyData) {
    console.log(historyData);
  }

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
              <Dice key={i} dice={die.dice} num={die.num} onClick={chooseDie} />
            ))}
          </div>
          <div className="dice-tracker">
            <div className="dice-info">
              <button className="dice-control" onClick={decreaseDice}>
                <FaMinus />
              </button>
              <p>
                # of dice: <span>{numDice}</span>
              </p>
              <button className="dice-control" onClick={increaseDice}>
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="roll-box">
            <button id="roll" onClick={handleRoll}>
              <FaDiceD20 />
            </button>
          </div>
        </div>
        <div className="info-box">
          <div className="box-title">
            <h1>Dice Animation</h1>
          </div>
          <div className="results-box">
            <DiceAnimation results={rollResults} />
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
            <textarea className="input-box"></textarea>
            <button className="input-send">
              <GiDiceFire />
            </button>
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
