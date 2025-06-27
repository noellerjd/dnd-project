export default function Dice({ dice, num, onClick }) {
  return (
    <div className="dice-box" onClick={() => onClick(num)}>
      <p alt={dice}>{dice}</p>
    </div>
  );
}
